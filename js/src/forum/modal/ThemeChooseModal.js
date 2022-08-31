import getAllThemes from "../../common/theme/getAllThemes";
import Modal from 'flarum/common/components/Modal';
import ItemList from 'flarum/common/utils/ItemList';
import Button from 'flarum/forum/components/Button';
import doesHaveTheme from "../../common/theme/doesHaveTheme";

export default class ThemeChooseModal extends Modal {
  static isDismissible = true;

  className() {
    return 'ThemeChooseModal';
  }

  title() {
    return <p>{app.translator.trans('lawaxi-level-ranks.forum.chooseModal.title')}</p>;
  }


  content() {return(<div class="Modal-body">{this.fields().toArray()}</div>);
  }

  fields(){
    const items = new ItemList();
    const themes = getAllThemes();

    items.add(
      'info1',
      <div>
        <label class={"ThemeChooseInfo1"}>
          {app.translator.trans('lawaxi-level-ranks.forum.chooseModal.top', {id: app.session.user.id() , balance: app.session.user.balance()})}
        </label>
      </div>,100
    );


    items.add(
      'themelist',
      <div>
        {
          themes
            .map((theme) => {
              return(Button.component(
                {
                  active: false,
                  icon: (theme.icon() || app.translator.trans('lawaxi-level-ranks.forum.theme.defaultIcon')),
                  className: 'Button Button--flat' +(
                    theme.id() === app.session.user.theme() ? ' CurrentTheme' :
                    (doesHaveTheme(theme.id(),app.session.user) ? ' OwnedTheme' : ' NownedTheme')),
                  disabled: !(doesHaveTheme(theme.id(),app.session.user) || theme.price()>=0),
                  onclick: () => {
                    app.session.user.save(doesHaveTheme(theme.id(),app.session.user) ? {theme: theme.id()} : {buyTheme: theme.id()}, { errorHandler: this.onerror.bind(this) })
                      .then(() => window.location.reload(), this.loaded.bind(this));
                  },
                },
                doesHaveTheme(theme.id(),app.session.user)?
                  app.translator.trans('lawaxi-level-ranks.forum.theme.showFormat2', {title: getThemeTitle(theme), price: switchPrice(theme.price())}) :
                  app.translator.trans('lawaxi-level-ranks.forum.theme.showFormat1', {title: getThemeTitle(theme), price: switchPrice(theme.price())})
              ));
            }
            )}
      </div>,90);
    items.add(
      'info2',
      <div>
        <label class={"ThemeChooseInfo2"}>
          {app.translator.trans('lawaxi-level-ranks.forum.chooseModal.bottom', {id: app.session.user.id(), balance: app.session.user.balance()})}
        </label>
      </div>,80);

    items.add(
      'info3',
      <div><table>
        <thead>
          <tr>
            <th class="ThemeChooseBalanceGrid">
              <i aria-hidden="true" class="icon fas fa-fingerprint " />
              {app.translator.trans('lawaxi-level-ranks.forum.chooseModal.info_id')}
            </th>
            <th class="NotificationGrid-groupToggle">
              <i aria-hidden="true" class="icon far fa-wallet "/>
              {app.translator.trans('lawaxi-level-ranks.forum.chooseModal.info_balance')}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{app.session.user.id()}</td>
            <td>{app.session.user.balance()}</td>
          </tr>
        </tbody>
      </table></div>,70
    )

    items.add(
      'qrCode',
      <div>
        <img src={app.forum.attribute("lawaxi-level-ranks.payCode")} /></div>,60
    )

    return items;
  }

  onsubmit() {
  }

}

function switchPrice(price){

  if(price >= 0)
    return price+'六币';
  if(price === -2)
    return '一周目纪念'
  if(price === -3)
    return '二周年纪念';
  if(price === -4)
    return '2023迎新';
  else
    return '非卖';
}

function getThemeTitle(theme){
  return theme.title() || app.translator.trans('lawaxi-level-ranks.forum.theme.defaultTitle',{id:theme.id()})
}
