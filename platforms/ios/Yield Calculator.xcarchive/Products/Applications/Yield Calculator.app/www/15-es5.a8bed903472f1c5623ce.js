var __extends=this&&this.__extends||function(){var l=function(n,u){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var u in n)n.hasOwnProperty(u)&&(l[u]=n[u])})(n,u)};return function(n,u){function e(){this.constructor=n}l(n,u),n.prototype=null===u?Object.create(u):(e.prototype=u.prototype,new e)}}();(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8cDG":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=function(){},o=u("pMnS"),i=u("oBZk"),r=u("ZZ/e"),a=u("s7LF"),s=u("SVse"),d=function(){function l(){this.completion=!1,this.newStockColour="dark",this.perctGainLoss="dark",this.yearString="Number of years",this.maxYears=!1,this.dividentReturnsPerStock=0}return l.prototype.calculate=function(){if(this.yearsNum>50)this.maxYears=!0,this.yearString="Please reduce number of years of under 50",this.netCashed=this.totalPoolOfMoney,this.projReturn=0,this.newStocks=0,this.dividentReturnsPerStock=0;else{if(this.maxYears=!1,this.shareValue=this.shareCost,this.totalPoolOfMoney=this.cash,this.frozenNumStocks=Math.floor(this.totalPoolOfMoney/this.shareCost),console.log("Outside of loop"),this.frozenNumStocks>=1){for(var l=0;l<this.yearsNum;l++){console.log("Loop of year: ",l),console.log("totalPoolOfMoney ",this.totalPoolOfMoney),this.numStocks=Math.floor(this.totalPoolOfMoney/this.shareCost),console.log("Number of stocks: ",this.numStocks),this.investedCashInit=this.numStocks*this.shareCost,console.log("Cash invested: ",this.investedCashInit),this.remainingCash=this.totalPoolOfMoney-this.investedCashInit,console.log("Cash Remaining: ",this.remainingCash),this.dividendPerctTS=this.dividendPerct/100,console.log("Divident Percentage: ",this.dividendPerctTS),this.dividendPerctTS=this.dividendPerctTS*(1+this.dividendGainLoss/100),console.log("Divident Percentage % in year ",l," ",this.dividendPerctTS);for(var n=1;n<5;n++)this.dividentReturnsPerStock=this.dividentReturnsPerStock+this.dividendPerctTS*this.shareCost,console.log("Divident return Per Share end of quarter",n,": ",this.dividentReturnsPerStock),this.dividentReturnsPerStock>=this.shareValue&&(this.numStocksPurchasedPerQuarter=Math.floor(this.dividentReturnsPerStock/this.shareValue),console.log("Stocks value this quarter ",n,": ",this.shareValue),console.log("Number of stocks purchased in quarter ",n,": ",this.numStocksPurchasedPerQuarter),this.numStocks=this.numStocks+this.numStocksPurchasedPerQuarter,this.dividentReturnsPerStock=this.dividentReturnsPerStock-this.shareValue,console.log("Divident return Per Share end of quarter",n,": ",this.dividentReturnsPerStock));this.shareValue=this.shareValue*(1+this.sharePerct/100),this.investedCashInit=Math.round((this.shareValue+this.dividentReturnsPerStock)*this.numStocks*100)/100,console.log("Share Value changed over year: ",l,": ",this.shareValue),console.log("Money that you invested has become: ",this.investedCashInit),this.totalPoolOfMoney=Math.round(100*(this.remainingCash+this.investedCashInit))/100,console.log("NET CASH: ",this.totalPoolOfMoney),console.log("totalPoolOfMoney ",this.totalPoolOfMoney)}console.log("totalPoolOfMoney ",this.totalPoolOfMoney),this.projReturn=Math.round(100*(this.totalPoolOfMoney-this.cash))/100,this.netCashed=this.totalPoolOfMoney,this.newStocks=this.numStocks-this.frozenNumStocks,this.dividentReturnsPerStock=0}else this.netCashed=this.totalPoolOfMoney,this.projReturn=0,this.newStocks=0,this.dividentReturnsPerStock=0;this.completion=!0,this.newProjSPColour=this.netCashed>=this.cash?"success":"danger",this.newStocks<1||null==this.newStocks?(this.newStocks=0,this.newStockColour="dark"):this.newStockColour="success"}},l}(),c=e.zb({encapsulation:0,styles:[["@media (prefers-color-scheme:light){ion-toolbar[_ngcontent-%COMP%]{--background:white;color:#000}.verticalScrollContainer[_ngcontent-%COMP%]{background:#fff}}@media (prefers-color-scheme:dark){ion-toolbar[_ngcontent-%COMP%]{--background:black;color:#fff}.verticalScrollContainer[_ngcontent-%COMP%]{background:#000}}ion-card[_ngcontent-%COMP%]{margin:0!important;padding:0}ion-col[_ngcontent-%COMP%]{--ion-grid-columns:3;flex-wrap:nowrap}ion-row[_ngcontent-%COMP%]{align-items:stretch;flex-wrap:nowrap;align-items:stretch}ion-grid[_ngcontent-%COMP%]{--ion-grid-column-padding:5px;--ion-grid-row-padding:0}"]],data:{}});function b(l){return e.Sb(0,[(l()(),e.Bb(0,0,null,null,4,"ion-card",[],null,null,null,i.B,i.b)),e.Ab(1,49152,null,0,r.j,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,2,"ion-label",[["class","ion-text-wrap"],["color","danger"],["position","floating"]],null,null,null,i.J,i.n)),e.Ab(3,49152,null,0,r.K,[e.j,e.p,e.F],{color:[0,"color"],position:[1,"position"]},null),(l()(),e.Rb(4,0,[" "," "]))],(function(l,n){l(n,3,0,"danger","floating")}),(function(l,n){l(n,4,0,n.component.yearString)}))}function h(l){return e.Sb(0,[(l()(),e.Bb(0,0,null,null,4,"ion-label",[["class","ion-text-wrap"],["position","floating"]],null,null,null,i.J,i.n)),e.Ab(1,49152,null,0,r.K,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Rb(-1,0,[" Number of years"])),(l()(),e.Bb(3,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Bb(4,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){l(n,1,0,"floating")}),null)}function g(l){return e.Sb(0,[(l()(),e.Bb(0,0,null,null,6,"ion-card",[],null,null,null,i.B,i.b)),e.Ab(1,49152,null,0,r.j,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,4,"ion-item",[["color","medium"],["expand","block"],["fill","solid"],["style","height:stretch;"]],null,null,null,i.I,i.m)),e.Ab(3,49152,null,0,r.E,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Bb(4,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,i.J,i.n)),e.Ab(5,49152,null,0,r.K,[e.j,e.p,e.F],null,null),(l()(),e.Rb(6,0,["Profoilo: $",""]))],(function(l,n){l(n,3,0,"medium")}),(function(l,n){l(n,6,0,n.component.netCashed)}))}function p(l){return e.Sb(0,[(l()(),e.Bb(0,0,null,null,6,"ion-card",[],null,null,null,i.B,i.b)),e.Ab(1,49152,null,0,r.j,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,4,"ion-item",[["expand","block"],["fill","solid"]],null,null,null,i.I,i.m)),e.Ab(3,49152,null,0,r.E,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Bb(4,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,i.J,i.n)),e.Ab(5,49152,null,0,r.K,[e.j,e.p,e.F],null,null),(l()(),e.Rb(6,0,["Return: $",""]))],(function(l,n){l(n,3,0,e.Fb(1,"",n.component.newProjSPColour,""))}),(function(l,n){l(n,6,0,n.component.projReturn)}))}function f(l){return e.Sb(0,[(l()(),e.Bb(0,0,null,null,6,"ion-card",[],null,null,null,i.B,i.b)),e.Ab(1,49152,null,0,r.j,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,4,"ion-item",[["expand","block"],["fill","solid"]],null,null,null,i.I,i.m)),e.Ab(3,49152,null,0,r.E,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Bb(4,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,i.J,i.n)),e.Ab(5,49152,null,0,r.K,[e.j,e.p,e.F],null,null),(l()(),e.Rb(6,0,["Additional Stocks: ",""]))],(function(l,n){l(n,3,0,e.Fb(1,"",n.component.newStockColour,""))}),(function(l,n){l(n,6,0,n.component.newStocks)}))}function m(l){return e.Sb(0,[(l()(),e.Bb(0,0,null,null,6,"ion-header",[],null,null,null,i.F,i.j)),e.Ab(1,49152,null,0,r.y,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.R,i.v)),e.Ab(3,49152,null,0,r.zb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(4,0,null,0,2,"ion-title",[],null,null,null,i.Q,i.u)),e.Ab(5,49152,null,0,r.xb,[e.j,e.p,e.F],null,null),(l()(),e.Rb(-1,0,[" Stock Projection "])),(l()(),e.Bb(7,0,null,null,154,"ion-content",[["fullscreen",""]],null,null,null,i.D,i.h)),e.Ab(8,49152,null,0,r.r,[e.j,e.p,e.F],{fullscreen:[0,"fullscreen"]},null),(l()(),e.Bb(9,0,null,0,64,"ion-grid",[],null,null,null,i.E,i.i)),e.Ab(10,49152,null,0,r.x,[e.j,e.p,e.F],null,null),(l()(),e.Bb(11,0,null,0,62,"ion-row",[],null,null,null,i.M,i.q)),e.Ab(12,49152,null,0,r.gb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(13,0,null,0,18,"ion-col",[],null,null,null,i.C,i.g)),e.Ab(14,49152,null,0,r.q,[e.j,e.p,e.F],null,null),(l()(),e.Bb(15,0,null,0,16,"div",[],null,null,null,null,null)),(l()(),e.Bb(16,0,null,null,15,"ion-card",[["class","--ion-padding: 0px"]],null,null,null,i.B,i.b)),e.Ab(17,49152,null,0,r.j,[e.j,e.p,e.F],null,null),(l()(),e.Bb(18,0,null,0,13,"ion-item",[],null,null,null,i.I,i.m)),e.Ab(19,49152,null,0,r.E,[e.j,e.p,e.F],null,null),(l()(),e.Bb(20,0,null,0,2,"ion-label",[["class","ion-text-wrap"],["position","floating"]],null,null,null,i.J,i.n)),e.Ab(21,49152,null,0,r.K,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Rb(-1,0,["Inital Investment ($)"])),(l()(),e.Bb(23,0,null,0,8,"ion-input",[["clearOnEdit","true"],["inputmode","decimal"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,25)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,25)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.cash=u)&&t),"ionChange"===n&&(t=!1!==o.calculate()&&t),t}),i.H,i.l)),e.Ab(24,49152,null,0,r.D,[e.j,e.p,e.F],{clearOnEdit:[0,"clearOnEdit"],inputmode:[1,"inputmode"],required:[2,"required"]},null),e.Ab(25,16384,null,0,r.Hb,[e.p],null,null),e.Ab(26,16384,null,0,a.h,[],{required:[0,"required"]},null),e.Ob(1024,null,a.c,(function(l){return[l]}),[a.h]),e.Ob(1024,null,a.d,(function(l){return[l]}),[r.Hb]),e.Ab(29,671744,null,0,a.g,[[8,null],[6,a.c],[8,null],[6,a.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ob(2048,null,a.e,null,[a.g]),e.Ab(31,16384,null,0,a.f,[[4,a.e]],null,null),(l()(),e.Bb(32,0,null,0,20,"ion-col",[],null,null,null,i.C,i.g)),e.Ab(33,49152,null,0,r.q,[e.j,e.p,e.F],null,null),(l()(),e.Bb(34,0,null,0,18,"div",[],null,null,null,null,null)),(l()(),e.Bb(35,0,null,null,17,"ion-card",[],null,null,null,i.B,i.b)),e.Ab(36,49152,null,0,r.j,[e.j,e.p,e.F],null,null),(l()(),e.Bb(37,0,null,0,15,"ion-item",[],null,null,null,i.I,i.m)),e.Ab(38,49152,null,0,r.E,[e.j,e.p,e.F],null,null),(l()(),e.Bb(39,0,null,0,4,"ion-label",[["class","ion-text-wrap"],["position","floating"]],null,null,null,i.J,i.n)),e.Ab(40,49152,null,0,r.K,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Rb(-1,0,["Intial Stock Price ($)"])),(l()(),e.Bb(42,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Bb(43,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Bb(44,0,null,0,8,"ion-input",[["clearOnEdit","true"],["inputmode","decimal"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,46)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,46)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.shareCost=u)&&t),"ionChange"===n&&(t=!1!==o.calculate()&&t),t}),i.H,i.l)),e.Ab(45,49152,null,0,r.D,[e.j,e.p,e.F],{clearOnEdit:[0,"clearOnEdit"],inputmode:[1,"inputmode"],required:[2,"required"]},null),e.Ab(46,16384,null,0,r.Hb,[e.p],null,null),e.Ab(47,16384,null,0,a.h,[],{required:[0,"required"]},null),e.Ob(1024,null,a.c,(function(l){return[l]}),[a.h]),e.Ob(1024,null,a.d,(function(l){return[l]}),[r.Hb]),e.Ab(50,671744,null,0,a.g,[[8,null],[6,a.c],[8,null],[6,a.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ob(2048,null,a.e,null,[a.g]),e.Ab(52,16384,null,0,a.f,[[4,a.e]],null,null),(l()(),e.Bb(53,0,null,0,20,"ion-col",[],null,null,null,i.C,i.g)),e.Ab(54,49152,null,0,r.q,[e.j,e.p,e.F],null,null),(l()(),e.Bb(55,0,null,0,18,"div",[],null,null,null,null,null)),(l()(),e.Bb(56,0,null,null,17,"ion-card",[],null,null,null,i.B,i.b)),e.Ab(57,49152,null,0,r.j,[e.j,e.p,e.F],null,null),(l()(),e.Bb(58,0,null,0,15,"ion-item",[],null,null,null,i.I,i.m)),e.Ab(59,49152,null,0,r.E,[e.j,e.p,e.F],null,null),(l()(),e.Bb(60,0,null,0,4,"ion-label",[["class","ion-text-wrap"],["position","floating"]],null,null,null,i.J,i.n)),e.Ab(61,49152,null,0,r.K,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Rb(-1,0,["Annual Stock Price +/- (%) "])),(l()(),e.Bb(63,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Bb(64,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Bb(65,0,null,0,8,"ion-input",[["clearOnEdit","true"],["color","{newStockColour}"],["inputmode","decimal"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,67)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,67)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.sharePerct=u)&&t),"ionChange"===n&&(t=!1!==o.calculate()&&t),t}),i.H,i.l)),e.Ab(66,49152,null,0,r.D,[e.j,e.p,e.F],{clearOnEdit:[0,"clearOnEdit"],color:[1,"color"],inputmode:[2,"inputmode"],required:[3,"required"]},null),e.Ab(67,16384,null,0,r.Hb,[e.p],null,null),e.Ab(68,16384,null,0,a.h,[],{required:[0,"required"]},null),e.Ob(1024,null,a.c,(function(l){return[l]}),[a.h]),e.Ob(1024,null,a.d,(function(l){return[l]}),[r.Hb]),e.Ab(71,671744,null,0,a.g,[[8,null],[6,a.c],[8,null],[6,a.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ob(2048,null,a.e,null,[a.g]),e.Ab(73,16384,null,0,a.f,[[4,a.e]],null,null),(l()(),e.Bb(74,0,null,0,61,"ion-grid",[],null,null,null,i.E,i.i)),e.Ab(75,49152,null,0,r.x,[e.j,e.p,e.F],null,null),(l()(),e.Bb(76,0,null,0,59,"ion-row",[],null,null,null,i.M,i.q)),e.Ab(77,49152,null,0,r.gb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(78,0,null,0,19,"ion-col",[],null,null,null,i.C,i.g)),e.Ab(79,49152,null,0,r.q,[e.j,e.p,e.F],null,null),(l()(),e.Bb(80,0,null,0,17,"div",[],null,null,null,null,null)),(l()(),e.Bb(81,0,null,null,16,"ion-card",[],null,null,null,i.B,i.b)),e.Ab(82,49152,null,0,r.j,[e.j,e.p,e.F],null,null),(l()(),e.Bb(83,0,null,0,14,"ion-item",[],null,null,null,i.I,i.m)),e.Ab(84,49152,null,0,r.E,[e.j,e.p,e.F],null,null),(l()(),e.qb(16777216,null,0,1,null,b)),e.Ab(86,16384,null,0,s.h,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(16777216,null,0,1,null,h)),e.Ab(88,16384,null,0,s.h,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(89,0,null,0,8,"ion-input",[["clearOnEdit","true"],["inputmode","decimal"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,91)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,91)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.yearsNum=u)&&t),"ionChange"===n&&(t=!1!==o.calculate()&&t),t}),i.H,i.l)),e.Ab(90,49152,null,0,r.D,[e.j,e.p,e.F],{clearOnEdit:[0,"clearOnEdit"],inputmode:[1,"inputmode"],required:[2,"required"]},null),e.Ab(91,16384,null,0,r.Hb,[e.p],null,null),e.Ab(92,16384,null,0,a.h,[],{required:[0,"required"]},null),e.Ob(1024,null,a.c,(function(l){return[l]}),[a.h]),e.Ob(1024,null,a.d,(function(l){return[l]}),[r.Hb]),e.Ab(95,671744,null,0,a.g,[[8,null],[6,a.c],[8,null],[6,a.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ob(2048,null,a.e,null,[a.g]),e.Ab(97,16384,null,0,a.f,[[4,a.e]],null,null),(l()(),e.Bb(98,0,null,0,18,"ion-col",[],null,null,null,i.C,i.g)),e.Ab(99,49152,null,0,r.q,[e.j,e.p,e.F],null,null),(l()(),e.Bb(100,0,null,0,16,"div",[],null,null,null,null,null)),(l()(),e.Bb(101,0,null,null,15,"ion-card",[],null,null,null,i.B,i.b)),e.Ab(102,49152,null,0,r.j,[e.j,e.p,e.F],null,null),(l()(),e.Bb(103,0,null,0,13,"ion-item",[],null,null,null,i.I,i.m)),e.Ab(104,49152,null,0,r.E,[e.j,e.p,e.F],null,null),(l()(),e.Bb(105,0,null,0,2,"ion-label",[["class","ion-text-wrap"],["position","floating"]],null,null,null,i.J,i.n)),e.Ab(106,49152,null,0,r.K,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Rb(-1,0,["Quarterly Dividend Return (%)"])),(l()(),e.Bb(108,0,null,0,8,"ion-input",[["clearOnEdit","true"],["inputmode","decimal"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,110)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,110)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.dividendPerct=u)&&t),"ionChange"===n&&(t=!1!==o.calculate()&&t),t}),i.H,i.l)),e.Ab(109,49152,null,0,r.D,[e.j,e.p,e.F],{clearOnEdit:[0,"clearOnEdit"],inputmode:[1,"inputmode"],required:[2,"required"]},null),e.Ab(110,16384,null,0,r.Hb,[e.p],null,null),e.Ab(111,16384,null,0,a.h,[],{required:[0,"required"]},null),e.Ob(1024,null,a.c,(function(l){return[l]}),[a.h]),e.Ob(1024,null,a.d,(function(l){return[l]}),[r.Hb]),e.Ab(114,671744,null,0,a.g,[[8,null],[6,a.c],[8,null],[6,a.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ob(2048,null,a.e,null,[a.g]),e.Ab(116,16384,null,0,a.f,[[4,a.e]],null,null),(l()(),e.Bb(117,0,null,0,18,"ion-col",[],null,null,null,i.C,i.g)),e.Ab(118,49152,null,0,r.q,[e.j,e.p,e.F],null,null),(l()(),e.Bb(119,0,null,0,16,"div",[],null,null,null,null,null)),(l()(),e.Bb(120,0,null,null,15,"ion-card",[],null,null,null,i.B,i.b)),e.Ab(121,49152,null,0,r.j,[e.j,e.p,e.F],null,null),(l()(),e.Bb(122,0,null,0,13,"ion-item",[],null,null,null,i.I,i.m)),e.Ab(123,49152,null,0,r.E,[e.j,e.p,e.F],null,null),(l()(),e.Bb(124,0,null,0,2,"ion-label",[["class","ion-text-wrap"],["position","floating"]],null,null,null,i.J,i.n)),e.Ab(125,49152,null,0,r.K,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Rb(-1,0,["Annual Dividend +/-(%)"])),(l()(),e.Bb(127,0,null,0,8,"ion-input",[["clearOnEdit","true"],["inputmode","decimal"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,129)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,129)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.dividendGainLoss=u)&&t),"ionChange"===n&&(t=!1!==o.calculate()&&t),t}),i.H,i.l)),e.Ab(128,49152,null,0,r.D,[e.j,e.p,e.F],{clearOnEdit:[0,"clearOnEdit"],inputmode:[1,"inputmode"],required:[2,"required"]},null),e.Ab(129,16384,null,0,r.Hb,[e.p],null,null),e.Ab(130,16384,null,0,a.h,[],{required:[0,"required"]},null),e.Ob(1024,null,a.c,(function(l){return[l]}),[a.h]),e.Ob(1024,null,a.d,(function(l){return[l]}),[r.Hb]),e.Ab(133,671744,null,0,a.g,[[8,null],[6,a.c],[8,null],[6,a.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ob(2048,null,a.e,null,[a.g]),e.Ab(135,16384,null,0,a.f,[[4,a.e]],null,null),(l()(),e.Bb(136,0,null,0,6,"ion-grid",[],null,null,null,i.E,i.i)),e.Ab(137,49152,null,0,r.x,[e.j,e.p,e.F],null,null),(l()(),e.Bb(138,0,null,0,4,"ion-row",[],null,null,null,i.M,i.q)),e.Ab(139,49152,null,0,r.gb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(140,0,null,0,2,"ion-col",[],null,null,null,i.C,i.g)),e.Ab(141,49152,null,0,r.q,[e.j,e.p,e.F],null,null),(l()(),e.Bb(142,0,null,0,0,"div",[],null,null,null,null,null)),(l()(),e.Bb(143,0,null,0,18,"ion-grid",[["fixed","true"]],null,null,null,i.E,i.i)),e.Ab(144,49152,null,0,r.x,[e.j,e.p,e.F],{fixed:[0,"fixed"]},null),(l()(),e.Bb(145,0,null,0,16,"ion-row",[],null,null,null,i.M,i.q)),e.Ab(146,49152,null,0,r.gb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(147,0,null,0,4,"ion-col",[["size","1"]],null,null,null,i.C,i.g)),e.Ab(148,49152,null,0,r.q,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Bb(149,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,g)),e.Ab(151,16384,null,0,s.h,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(152,0,null,0,4,"ion-col",[["size","1"]],null,null,null,i.C,i.g)),e.Ab(153,49152,null,0,r.q,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Bb(154,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,p)),e.Ab(156,16384,null,0,s.h,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(157,0,null,0,4,"ion-col",[["size","1"]],null,null,null,i.C,i.g)),e.Ab(158,49152,null,0,r.q,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Bb(159,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,f)),e.Ab(161,16384,null,0,s.h,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,8,0,""),l(n,21,0,"floating"),l(n,24,0,"true","decimal",""),l(n,26,0,""),l(n,29,0,u.cash),l(n,40,0,"floating"),l(n,45,0,"true","decimal",""),l(n,47,0,""),l(n,50,0,u.shareCost),l(n,61,0,"floating"),l(n,66,0,"true","{newStockColour}","decimal",""),l(n,68,0,""),l(n,71,0,u.sharePerct),l(n,86,0,u.maxYears),l(n,88,0,!u.maxYears),l(n,90,0,"true","decimal",""),l(n,92,0,""),l(n,95,0,u.yearsNum),l(n,106,0,"floating"),l(n,109,0,"true","decimal",""),l(n,111,0,""),l(n,114,0,u.dividendPerct),l(n,125,0,"floating"),l(n,128,0,"true","decimal",""),l(n,130,0,""),l(n,133,0,u.dividendGainLoss),l(n,144,0,"true"),l(n,148,0,"1"),l(n,151,0,u.completion),l(n,153,0,"1"),l(n,156,0,u.completion),l(n,158,0,"1"),l(n,161,0,u.completion)}),(function(l,n){l(n,23,0,e.Nb(n,26).required?"":null,e.Nb(n,31).ngClassUntouched,e.Nb(n,31).ngClassTouched,e.Nb(n,31).ngClassPristine,e.Nb(n,31).ngClassDirty,e.Nb(n,31).ngClassValid,e.Nb(n,31).ngClassInvalid,e.Nb(n,31).ngClassPending),l(n,44,0,e.Nb(n,47).required?"":null,e.Nb(n,52).ngClassUntouched,e.Nb(n,52).ngClassTouched,e.Nb(n,52).ngClassPristine,e.Nb(n,52).ngClassDirty,e.Nb(n,52).ngClassValid,e.Nb(n,52).ngClassInvalid,e.Nb(n,52).ngClassPending),l(n,65,0,e.Nb(n,68).required?"":null,e.Nb(n,73).ngClassUntouched,e.Nb(n,73).ngClassTouched,e.Nb(n,73).ngClassPristine,e.Nb(n,73).ngClassDirty,e.Nb(n,73).ngClassValid,e.Nb(n,73).ngClassInvalid,e.Nb(n,73).ngClassPending),l(n,89,0,e.Nb(n,92).required?"":null,e.Nb(n,97).ngClassUntouched,e.Nb(n,97).ngClassTouched,e.Nb(n,97).ngClassPristine,e.Nb(n,97).ngClassDirty,e.Nb(n,97).ngClassValid,e.Nb(n,97).ngClassInvalid,e.Nb(n,97).ngClassPending),l(n,108,0,e.Nb(n,111).required?"":null,e.Nb(n,116).ngClassUntouched,e.Nb(n,116).ngClassTouched,e.Nb(n,116).ngClassPristine,e.Nb(n,116).ngClassDirty,e.Nb(n,116).ngClassValid,e.Nb(n,116).ngClassInvalid,e.Nb(n,116).ngClassPending),l(n,127,0,e.Nb(n,130).required?"":null,e.Nb(n,135).ngClassUntouched,e.Nb(n,135).ngClassTouched,e.Nb(n,135).ngClassPristine,e.Nb(n,135).ngClassDirty,e.Nb(n,135).ngClassValid,e.Nb(n,135).ngClassInvalid,e.Nb(n,135).ngClassPending)}))}var C=e.xb("app-tab2",d,(function(l){return e.Sb(0,[(l()(),e.Bb(0,0,null,null,1,"app-tab2",[],null,null,null,m,c)),e.Ab(1,49152,null,0,d,[],null,null)],null,null)}),{},{},[]);u("HDdC"),u("XNiG"),u("7o/Q"),u("D0XW");var v,B=((v=function(){function l(){}return l.prototype.create=function(l){return"undefined"==typeof MutationObserver?null:new MutationObserver(l)},l}()).ngInjectableDef=Object(e.Wb)({factory:function(){return new v},token:v,providedIn:"root"}),v),A=function(){},y=u("cUpR"),k=new e.U("8.2.3");try{"undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(D){!1}var P=function(){};u("JX91"),u("quSY"),u("LRne"),u("vkgz"),u("pLZG"),u("lJxs"),u("IzEk");var j=new e.U("8.2.3"),w=new e.v("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}}),S=function(){function l(l,n){this._sanityChecksEnabled=l,this._hammerLoader=n,this._hasDoneGlobalChecks=!1,this._hasCheckedHammer=!1,this._document="object"==typeof document&&document?document:null,this._window="object"==typeof window&&window?window:null,this._areChecksEnabled()&&!this._hasDoneGlobalChecks&&(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}return l.prototype._areChecksEnabled=function(){return this._sanityChecksEnabled&&Object(e.fb)()&&!this._isTestEnv()},l.prototype._isTestEnv=function(){var l=this._window;return l&&(l.__karma__||l.jasmine)},l.prototype._checkDoctypeIsDefined=function(){this._document&&!this._document.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")},l.prototype._checkThemeIsPresent=function(){if(this._document&&this._document.body&&"function"==typeof getComputedStyle){var l=this._document.createElement("div");l.classList.add("mat-theme-loaded-marker"),this._document.body.appendChild(l);var n=getComputedStyle(l);n&&"none"!==n.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),this._document.body.removeChild(l)}},l.prototype._checkCdkVersionMatch=function(){j.full!==k.full&&console.warn("The Angular Material version ("+j.full+") does not match the Angular CDK version ("+k.full+").\nPlease ensure the versions of these two packages exactly match.")},l.prototype._checkHammerIsAvailable=function(){!this._hasCheckedHammer&&this._window&&(!this._areChecksEnabled()||this._window.Hammer||this._hammerLoader||console.warn("Could not find HammerJS. Certain Angular Material components may not work correctly."),this._hasCheckedHammer=!0)},l}();try{"undefined"!=typeof Intl}catch(D){!1}var _=new e.v("MAT_HAMMER_OPTIONS"),N=["longpress","slide","slidestart","slideend","slideright","slideleft"],O={on:function(){},off:function(){}},M=function(l){function n(n,u){var e=this;return(e=l.call(this)||this)._hammerOptions=n,e.events=N,u&&u._checkHammerIsAvailable(),e}return __extends(n,l),n.prototype.buildHammer=function(l){var n="undefined"!=typeof window?window.Hammer:null;if(!n)return O;var u=new n(l,this._hammerOptions||void 0),e=new n.Pan,t=new n.Swipe,o=new n.Press,i=this._createRecognizer(e,{event:"slide",threshold:0},t),r=this._createRecognizer(o,{event:"longpress",time:500});return e.recognizeWith(t),r.recognizeWith(i),u.add([t,o,e,i,r]),u},n.prototype._createRecognizer=function(l,n){for(var u=[],e=2;e<arguments.length;e++)u[e-2]=arguments[e];var t=new l.constructor(n);return u.push(l),u.forEach((function(l){return t.recognizeWith(l)})),t},n}(y.g),q=function(){},F=function(){},I=function(){},E=function(){},x=u("iInd");u.d(n,"Tab2PageModuleNgFactory",(function(){return R}));var R=e.yb(t,[],(function(l){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[o.a,C]],[3,e.m],e.D]),e.Lb(4608,B,B,[]),e.Lb(4608,y.e,M,[[2,_],[2,S]]),e.Lb(4608,s.j,s.i,[e.z,[2,s.q]]),e.Lb(4608,r.a,r.a,[e.F,e.g]),e.Lb(4608,r.Db,r.Db,[r.a,e.m,e.w]),e.Lb(4608,r.Gb,r.Gb,[r.a,e.m,e.w]),e.Lb(4608,a.j,a.j,[]),e.Lb(1073742336,F,F,[]),e.Lb(1073742336,E,E,[]),e.Lb(1073742336,S,S,[[2,w],[2,y.f]]),e.Lb(1073742336,P,P,[]),e.Lb(1073742336,q,q,[]),e.Lb(1073742336,A,A,[]),e.Lb(1073742336,I,I,[]),e.Lb(1073742336,s.b,s.b,[]),e.Lb(1073742336,r.Bb,r.Bb,[]),e.Lb(1073742336,a.i,a.i,[]),e.Lb(1073742336,a.b,a.b,[]),e.Lb(1073742336,x.o,x.o,[[2,x.t],[2,x.m]]),e.Lb(1073742336,t,t,[]),e.Lb(1024,x.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);