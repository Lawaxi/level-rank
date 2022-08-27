<?php

namespace Lawaxi\LevelRanks\StudentID\Filter;

use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;

class CardConfirmedFilter implements FilterInterface
{
    public function getFilterKey(): string
    {
        return 'confirmed';
    }

    public function filter(FilterState $filterState, string $filterValue, bool $negate)
    {
        if($filterValue !== null){
            $filterState->getQuery()->where('users.studentID', null)
                ->where('users.is_studentID_confirmed', '!=', null);
        }
    }
}
