module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=40)}([,function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}r.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["forum/app"]},function(t,e){t.exports=flarum.core.compat["forum/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/models/User"]},function(t,e){t.exports=flarum.core.compat["common/utils/ItemList"]},function(t,e){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e,r){t.exports=r(16)},function(t,e){t.exports=flarum.core.compat["common/components/Modal"]},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e,r){"use strict";function n(t,e){if(void 0===e&&(e=2),0===t)return"0 Bytes";var r=e<0?0:e,n=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,n)).toFixed(r))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}r.d(e,"a",(function(){return n}))},function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}r.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat["common/components/EditUserModal"]},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=w(i,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u={};function f(){}function m(){}function p(){}var d={};s(d,o,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(j([])));v&&v!==e&&r.call(v,o)&&(d=v);var y=p.prototype=f.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,s){var c=l(t[o],t,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function g(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(g,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=p,s(y,"constructor",p),s(p,"constructor",m),m.displayName=s(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),s(y,i,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(t,e){t.exports=flarum.core.compat["forum/components/UserCard"]},,,function(t,e){t.exports=flarum.core.compat["forum/components/PostUser"]},function(t,e){t.exports=flarum.core.compat["common/components/Tooltip"]},function(t,e){t.exports=flarum.core.compat["forum/components/Notification"]},function(t,e){t.exports=flarum.core.compat["forum/components/NotificationGrid"]},function(t,e){t.exports=flarum.core.compat["forum/components/UserPage"]},function(t,e){t.exports=flarum.core.compat["forum/components/SettingsPage"]},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["components/HeaderSecondary"]},function(t,e){t.exports=flarum.core.compat["components/HeaderPrimary"]},function(t,e){t.exports=flarum.core.compat["forum/ForumApplication"]},function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat["common/components/Alert"]},function(t,e){t.exports=flarum.core.compat["forum/components/SignUpModal"]},function(t,e){t.exports=flarum.core.compat["forum/components/Badge"]},function(t,e){t.exports=flarum.core.compat["common/helpers/username"]},,,,,,function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n),a=r(3),i=r(20),s=r.n(i),c=r(1),l=r(9),u=r.n(l),f=r(21),p=r.n(f),d=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e)},r.view=function(){var t=this.attrs.user,e="图样",r=64*(t.commentCount()-t.discussionCount())+89*t.discussionCount(),n=Math.floor(r/2022)+1,o=100*(r-2022*(n-1))/2022;return n>9?e="见得多了":n>4&&(e="似董非董"),m(p.a,{text:r.toString()+" 点人生经验"},m("div",{class:"PostUser-level"},m("span",{class:"PostUser-text"},m("span",{class:"PostUser-levelText"},e)," ",m("span",{class:"PostUser-levelPoints"},n)),m("div",{class:"PostUser-bar PostUser-bar--empty"}),m("div",{class:"PostUser-bar",style:"width: "+o+"%;"})))},e}(u.a),h=r(22),v=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var r=e.prototype;return r.icon=function(){return"fas fa-carrot"},r.href=function(){return o.a.route.user(this.attrs.notification.subject())},r.content=function(){return o.a.translator.trans("lawaxi-level-ranks.notification.verification.content")},e}(r.n(h).a),y=r(23),b=r.n(y),x=r(24),w=r.n(x),g=r(25),k=r.n(g),_=r(17),j=r.n(_),O=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e)},r.view=function(){var t=this.attrs.user,e=app.store.getById("themes",t.attribute("theme")||1);return void 0===e?(app.themeList.load().then((function(){return m.redraw()})),null):""!==(e.frame()||"")?m("img",{src:app.forum.attribute("lawaxi-level-ranks.address")+"assets/frames/frame_"+e.frame(),class:"PostUser-Frame",alt:""}):null},e}(u.a),I=r(2),N=r.n(I),B=r(26),T=function(t){function e(){return t.apply(this,arguments)||this}return Object(c.a)(e,t),e}(r.n(B)()(N.a,{id:N.a.attribute("id"),title:N.a.attribute("title"),price:N.a.attribute("price"),icon:N.a.attribute("icon"),icon_color:N.a.attribute("icon-color"),frame:N.a.attribute("frame"),favicon:N.a.attribute("favicon"),color_p:N.a.attribute("color-p"),color_s:N.a.attribute("color-s")})),L=r(27),P=r.n(L),E=r(28),M=r.n(E),F=r(5),D=r.n(F),C=r(29),U=r.n(C),S=r(30),A=r.n(S);function G(){return A.a.store.all("themes")}var z=r(11),H=r.n(z),R=r(7),Y=r.n(R);function q(t,e){return 1===t||(e.hastheme()||"1").toString().split(",").includes(t.toString())}var V=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var r=e.prototype;return r.className=function(){return"ThemeChooseModal"},r.title=function(){return m("p",null,app.translator.trans("lawaxi-level-ranks.forum.chooseModal.title"))},r.content=function(){return m("div",{class:"Modal-body"},this.fields().toArray())},r.fields=function(){var t=this,e=new Y.a,r=G();return e.add("info1",m("div",null,m("label",{class:"ThemeChooseInfo1"},app.translator.trans("lawaxi-level-ranks.forum.chooseModal.top",{id:app.session.user.id(),balance:app.session.user.balance()}))),100),e.add("themelist",m("div",null,r.map((function(e){return D.a.component({active:!1,icon:e.icon()||app.translator.trans("lawaxi-level-ranks.forum.theme.defaultIcon"),className:"Button Button--flat"+(e.id()===app.session.user.theme()?" CurrentTheme":q(e.id(),app.session.user)?" OwnedTheme":" NownedTheme"),disabled:!(q(e.id(),app.session.user)||e.price()>=0),onclick:function(){app.session.user.save(q(e.id(),app.session.user)?{theme:e.id()}:{buyTheme:e.id()},{errorHandler:t.onerror.bind(t)}).then((function(){return window.location.reload()}),t.loaded.bind(t))}},q(e.id(),app.session.user)?app.translator.trans("lawaxi-level-ranks.forum.theme.showFormat2",{title:Z(e),price:K(e.price())}):app.translator.trans("lawaxi-level-ranks.forum.theme.showFormat1",{title:Z(e),price:K(e.price())}))}))),90),e.add("info2",m("div",null,m("label",{class:"ThemeChooseInfo2"},app.translator.trans("lawaxi-level-ranks.forum.chooseModal.bottom",{id:app.session.user.id(),balance:app.session.user.balance()}))),80),e.add("info3",m("div",null,m("table",{class:"ThemeChooseBalanceGrid"},m("thead",null,m("tr",null,m("th",{class:"ThemeChooseBalanceGrid-groupToggle"},m("i",{"aria-hidden":"true",class:"icon fas fa-fingerprint "}),app.translator.trans("lawaxi-level-ranks.forum.chooseModal.info_id")),m("th",{class:"ThemeChooseBalanceGrid-groupToggle"},m("i",{"aria-hidden":"true",class:"icon far fa-wallet "}),app.translator.trans("lawaxi-level-ranks.forum.chooseModal.info_balance")))),m("tbody",null,m("tr",null,m("td",null,app.session.user.id()),m("td",null,app.session.user.balance()))))),70),e.add("qrCode",m("div",null,m("img",{src:app.forum.attribute("lawaxi-level-ranks.payCode")})),60),e},r.onsubmit=function(){},e}(H.a);function K(t){return t>=0?t+"六币":-2===t?"一周目纪念":-3===t?"二周年纪念":-4===t?"2023迎新":"非卖"}function Z(t){return t.title()||app.translator.trans("lawaxi-level-ranks.forum.theme.defaultTitle",{id:t.id()})}V.isDismissible=!0;var J=r(12),Q=r.n(J),W=r(13),X=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.maxSize=parseFloat(o.a.forum.attribute("lawaxi-level-ranks.studentID_maxSize")||666),this.alertAttrs={content:o.a.translator.trans("lawaxi-level-ranks.forum.student_confirmation.notice",{size:Object(W.a)(this.maxSize*Math.pow(2,10))})},this.loading=!1,this.cover=this.attrs.user.studentID()||o.a.forum.attribute("lawaxi-level-ranks.studentID_example")||"https://lawaxi.net/assets/cardExample.jpg",this.context=""},r.content=function(){var t={},e="Modal-image CoverEditor-cover";return this.cover&&(t.style={backgroundImage:"url("+this.cover+")"},e+=" CoverEditor-card"),[m("div",Object.assign({className:e},t),this.loading?m(Q.a,null):""),m("div",{className:"Modal-body"},m("div",{className:"Form"},this.fieldsItems().toArray()))]},r.className=function(){return"Cover-modal Modal--small"},r.title=function(){return o.a.translator.trans("lawaxi-level-ranks.forum.student_confirmation.title")},r.fieldsItems=function(){var t=new Y.a;return t.add("actions",this.controlItems().toArray()),t},r.controlItems=function(){var t=new Y.a;return t.add("upload",m(D.a,{icon:"fas fa-upload",className:"Button",onclick:this.openPicker.bind(this)},o.a.translator.trans("core.forum.user.avatar_upload_button")),50),t},r.openPicker=function(){var t=this;$('<input type="file">').appendTo("body").hide().click().on("change",(function(e){t.upload($(e.target)[0].files[0])}))},r.upload=function(t){if(!this.loading){var e=new FormData;e.append("studentID",t),this.loading=!0,this.context="added",m.redraw(),o.a.request({method:"POST",url:o.a.forum.attribute("apiUrl")+"/users/"+this.attrs.user.id()+"/card",serialize:function(t){return t},body:e}).then(this.success.bind(this),this.failure.bind(this))}},r.success=function(t){o.a.store.pushPayload(t),this.showAlert("success"),this.loading=!1,m.redraw(),this.hide()},r.failure=function(){this.showAlert("error"),this.loading=!1,m.redraw()},r.showAlert=function(t){this.alertAttrs.content=o.a.translator.trans("lawaxi-level-ranks.forum.student_confirmation.feedback."+t),this.alertAttrs.type=t},e}(H.a),tt=r(14),et=r(10),rt=r.n(et),nt=function(){function t(){this.loadedIncludes=new Set}return t.prototype.load=function(){var t=Object(tt.a)(rt.a.mark((function t(e){var r,n=this;return rt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e&&(e=[]),0!==(r=e.filter((function(t){return!n.loadedIncludes.has(t)}))).length){t.next=4;break}return t.abrupt("return",Promise.resolve(app.store.all("themes")));case 4:return t.abrupt("return",app.store.find("themes").then((function(t){return r.forEach((function(t){return n.loadedIncludes.add(t)})),t})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t}();function ot(){return(ot=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function at(t){return!t||0!==(t.is_studentID_confirmed()||0)}var it=r(31),st=r.n(it);var ct=r(32),lt=r.n(ct),ut=r(15),ft=r.n(ut),mt=r(8),pt=r.n(mt),dt=r(6),ht=r.n(dt),vt=r(33),yt=function(t){function e(){return t.apply(this,arguments)||this}return Object(c.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e),e.type="theme"},e}(r.n(vt).a),bt=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e)},r.view=function(){var t=this.attrs.user,e=app.store.getById("themes",t.attribute("theme")||1);return void 0===e?(app.themeList.load().then((function(){return m.redraw()})),null):""!==(e.frame()||"")?m("img",{class:"Avatar-Frame",src:app.forum.attribute("lawaxi-level-ranks.address")+"assets/frames/frame_"+e.frame(),alt:""}):null},e}(u.a),xt=r(34),wt=r.n(xt),gt=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).target=null,e.actor=null,e.amount=pt()(0),e}Object(c.a)(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.target=this.attrs.target,this.actor=this.attrs.actor},r.className=function(){return"TransferBalanceModal"},r.title=function(){return m("p",null,app.translator.trans("lawaxi-level-ranks.forum.transferBalance.title",{name:wt()(this.target),id:this.target.id()}))},r.content=function(){return m("div",{class:"Modal-body"},this.fields().toArray())},r.fields=function(){var t=new Y.a;return t.add("amount",m("div",null,m("label",null,app.translator.trans("lawaxi-level-ranks.forum.transferBalance.amount",{balance:this.actor.balance()})),m("input",{className:"FormControl",placeholder:app.translator.trans("lawaxi-level-ranks.forum.transferBalance.amount2"),bidi:this.amount})),3),t.add("submit",m("div",{className:"Form-balanceTransfer"},D.a.component({className:"Button Button--primary",type:"submit",loading:this.loading},app.translator.trans("lawaxi-level-ranks.forum.transferBalance.submit"))),1),t},r.onsubmit=function(){this.target.save({payAmount:this.amount()},{errorHandler:this.onerror.bind(this)}).then((function(){return window.location.reload()}),this.loaded.bind(this))},e}(H.a);gt.isDismissible=!0,o.a.initializers.add("lawaxi-level-ranks",(function(t){t.store.models.themes=T,t.themeList=new nt,function(t){ht.a.prototype.verification=N.a.attribute("verification"),ht.a.prototype.theme=N.a.attribute("theme"),ht.a.prototype.hastheme=N.a.attribute("hastheme"),ht.a.prototype.vip=N.a.attribute("vip"),ht.a.prototype.balance=N.a.attribute("balance"),ht.a.prototype.studentID=N.a.attribute("studentID"),ht.a.prototype.is_studentID_confirmed=N.a.attribute("is_studentID_confirmed"),Object(a.extend)(ft.a.prototype,"oninit",(function(){var e=this;this.verification=pt()(this.attrs.user.verification()),this.theme=pt()(this.attrs.user.theme()||1),this.hastheme={},this.studentID=pt()(this.attrs.user.studentID()||t.forum.attribute("lawaxi-level-ranks.studentID_example")||"https://lawaxi.net/assets/cardExample.jpg"),this.is_studentID_confirmed=pt()(this.attrs.user.is_studentID_confirmed()||0),this.donate=pt()(0),this.themes=G(),this.themes.forEach((function(t){e.hastheme[t.id()]=pt()(q(t.id(),e.attrs.user))}))})),Object(a.extend)(ft.a.prototype,"fields",(function(e){var r=this;e.add("verification",m("div",{className:"Form-group"},m("label",null,t.translator.trans("lawaxi-level-ranks.forum.userUtil.verification")),m("input",{className:"FormControl",placeholder:t.translator.trans("lawaxi-level-ranks.forum.userUtil.verification2"),bidi:this.verification})),3),e.add("theme",m("div",{className:"Form-group"},m("label",null,t.translator.trans("lawaxi-level-ranks.forum.userUtil.currentTheme")),m("input",{className:"FormControl",placeholder:t.translator.trans("lawaxi-level-ranks.forum.userUtil.currentTheme2"),bidi:this.theme})),2),e.add("ownedtheme",m("div",{className:"Form-group EditUserModal-ownedtheme"},m("label",null,t.translator.trans("lawaxi-level-ranks.forum.userUtil.hasTheme")),m("div",null,this.themes.map((function(e){return m("label",{className:"checkbox"},m("input",{type:"checkbox",bidi:r.hastheme[e.id()]}),yt.component({icon:e.icon()||t.translator.trans("lawaxi-level-ranks.forum.theme.defaultIcon"),color:e.icon_color()||t.translator.trans("lawaxi-level-ranks.forum.theme.defaultIconColor")}),e.title()||t.translator.trans("lawaxi-level-ranks.forum.theme.defaultTitle"))})))),1),e.add("studentID",m("div",{className:"Form-group"},m("label",null,t.translator.trans("lawaxi-level-ranks.forum.settings.sc1")),m("img",{class:"FormControl_Image",src:this.studentID()}),m("label",{className:"checkbox"},m("input",{className:"FormControl",placeholder:t.translator.trans("20220424"),bidi:this.is_studentID_confirmed}))),30),e.add("donate",m("div",{className:"Form-group"},m("label",null,t.translator.trans("lawaxi-level-ranks.forum.userUtil.vip",{balance:this.attrs.user.balance()||0,vip:this.attrs.user.vip()||0})),m("input",{className:"FormControl",placeholder:t.translator.trans("lawaxi-level-ranks.forum.userUtil.vip2"),bidi:this.donate})),31)})),Object(a.extend)(ft.a.prototype,"data",(function(t){var e=this;this.verification()!==this.attrs.user.verification()&&(t.verification=this.verification()),this.theme()!==this.attrs.user.theme()&&(t.theme=this.theme()),this.is_studentID_confirmed()!==this.attrs.user.is_studentID_confirmed()&&(t.is_studentID_confirmed=this.is_studentID_confirmed()),0!==(this.donate()||0)&&(t.donate=this.donate());var r=[];Object.keys(this.hastheme).forEach((function(t){e.hastheme[t]()&&r.push(t)})),r.join(",")!==this.attrs.user.hastheme()&&(t.hastheme=r.join(","))}))}(t),Object(a.extend)(s.a.prototype,"view",(function(t){var e=this.attrs.post.user();e&&(t.children.push(d.component({user:e})),t.children.push(O.component({user:e})))})),Object(a.extend)(j.a.prototype,"view",(function(t){var e=this.attrs.user;e&&null!==t.children[0]&&null!==t.children[0].children[0]&&null!=t.children[0].children[0].children[1]&&t.children[0].children[0].children[1].children.push(bt.component({user:e}))})),t.notificationComponents.verification=v,Object(a.extend)(b.a.prototype,"notificationTypes",(function(e){e.add("verification",{name:"verification",icon:t.translator.trans("lawaxi-level-ranks.forum.settings.vn_icon"),label:t.translator.trans("lawaxi-level-ranks.forum.settings.vn_label")})})),Object(a.extend)(j.a.prototype,"infoItems",(function(e){var r=this.attrs.user;""!==(r.attribute("verification")||"")&&e.add("verification",m("div",{class:"UserVerification"},m("div",{class:"UserVerification-content"},m("i",{"aria-hidden":"true",class:"icon fas fa-crow Badge-icon"},t.translator.trans("lawaxi-level-ranks.forum.verification.display",{ver:r.attribute("verification")})))),0),"0"!==(r.attribute("team")||"0")&&e.add("team",m("span",null,t.translator.trans("lawaxi-level-ranks.forum.team.display",{team:r.attribute("team")})),80)})),Object(a.extend)(k.a.prototype,"accountItems",(function(e){var r=this.user;at(r)||e.add("studentID",m(D.a,{className:"Button",style:"color: #d83e3e;",href:function(){return t.modal.show(X,{user:r})}},t.translator.trans("lawaxi-level-ranks.forum.settings.studentID_button")))})),Object(a.extend)(w.a.prototype,"navItems",(function(e){var r=this.user;t.session.user&&t.session.user!==r&&e.add("transferBalance",m(D.a,{class:"TButton",onclick:function(){return t.modal.show(gt,{target:r,actor:t.session.user})},icon:"fas fa-credit-card"},t.translator.trans("lawaxi-level-ranks.forum.settings.transferBalance")),1)})),Object(a.extend)(P.a.prototype,"items",(function(e){var r=this;t.session.user&&e.add("theme",D.a.component({active:!1,icon:"fas fa-leaf",className:"Button Button--flat",onclick:function(){t.session.user&&t.modal.show(V,r.attrs)}},t.translator.trans("lawaxi-level-ranks.forum.chooseModal.header")),9)})),Object(a.extend)(M.a.prototype,"items",(function(e){t.themeList.load(["id"])})),Object(a.extend)(U.a.prototype,"mount",(function(t){!function(t){var e=t.session.user;if(!at(e)){var r=function(t){function e(){return t.apply(this,arguments)||this}return Object(c.a)(e,t),e.prototype.view=function(e){var r=t.prototype.view.call(this,e);return ot({},r,{children:[m("div",{className:"container"},r.children)]})},e}(st.a),n=function(r){function n(){return r.apply(this,arguments)||this}return Object(c.a)(n,r),n.prototype.view=function(){return m(D.a,{class:"Button Button--link",onclick:function(){return t.modal.show(X,{user:e})}},t.translator.trans("lawaxi-level-ranks.forum.student_confirmation.alert_button"))},n}(u.a);m.mount($("<div/>").insertBefore("#content")[0],{view:function(){return m(r,{dismissible:!1,controls:[m(n,null)]},e.studentID()?m("div",{className:"container"},"【账号激活步骤3】您的学生卡登记已经提交，尚未通过审核，请耐心等待，如非开学季等注册频繁时段，请联系猫人",m("a",{href:"mailto:lawaxilawaxi@gmail.com"},"lawaxilawaxi@gmail.com"),"。"):m("div",{className:"container"},"【账号激活步骤2】请尽快完成导航栏-头像-设置-学号认证(通过学生卡)，您可以阅读",m("a",{href:"https://lawaxi.net/d/184"},"《总法》"),"了解本站针对个人信息保护的相关规定。"))}})}}(this)})),Object(a.extend)(lt.a.prototype,"fields",(function(t){t.add("notice",m("p",null,"提示：每个账号在注册后都需经过邮箱验证和学号(学生卡)验证才可使用，注册即表明您同意",m("a",{href:"https://lawaxi.net/d/184"},"《总法》"),"及其他社区规范内容。"))}))}))}]);
//# sourceMappingURL=forum.js.map