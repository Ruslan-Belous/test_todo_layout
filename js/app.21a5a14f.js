(function(t){function e(e){for(var s,a,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&m.push(n[a][0]),n[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],s=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var s={},n={app:0},i=[];function a(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=s,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(o,s,function(e){return t[e]}.bind(null,s));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/test_todo_layout/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0a15":function(t,e,o){},"0e4f":function(t,e,o){},"114f":function(t,e,o){"use strict";o("0a15")},"1d60":function(t,e,o){},2612:function(t,e,o){},4695:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);var s=o("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("v-header"),e("keep-alive",[e("router-view")],1),e("v-footer")],1)},i=[],a=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"v-footer"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content__top"},[e("v-main-logo",{staticClass:"footer-logo"}),e("v-footer-nav",{staticClass:"content__nav"})],1),e("hr"),e("p",{staticClass:"content__privacy"},[t._v(" Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender. ")])])])},r=[],c=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"v-footer-nav"},[e("ul",t._l(t.list,(function(o,s){return e("li",{key:s},[t._v(t._s(o.name))])})),0)])},l=[],u={name:"v-footer-nav",data(){return{list:[{name:"Terms & Conditions"},{name:"Privacy"},{name:"CA Privacy Hub"},{name:"Contact Us"},{name:"Sitemap"},{name:"Notice at Collection"}]}}},d=u,m=(o("aa2c"),o("2877")),f=Object(m["a"])(d,c,l,!1,null,"dee260c4",null),p=f.exports,v=function(){var t=this,e=t._self._c;return e("img",{staticClass:"main-logo",attrs:{src:t.mainLogo,alt:"mainLogo"}})},g=[],h=o("bd34"),_=o.n(h),b={name:"v-main-logo",data(){return{mainLogo:_.a}}},A=b,C=Object(m["a"])(A,v,g,!1,null,"58226f1a",null),y=C.exports,O={components:{vMainLogo:y,VFooterNav:p},name:"v-footer"},w=O,L=(o("768f"),Object(m["a"])(w,a,r,!1,null,"276ca79a",null)),T=L.exports,E=function(){var t=this,e=t._self._c;return e("header",{staticClass:"v-header"},[e("div",{staticClass:"v-header__top"}),e("div",{staticClass:"v-header__bot"},[e("div",{staticClass:"v-header__content"},[e("v-main-logo",{staticClass:"logo"}),t.isUserLogged?e("button",{staticClass:"btn-s btn-grey",on:{click:t.logOut}},[t._v(" Log out ")]):t._e()],1)])])},S=[],x=o("2f62"),k={components:{vMainLogo:y},name:"v-header",data(){return{}},computed:{...Object(x["c"])(["isUserLogged"])},created(){var t;null!==(t=Object.keys(localStorage))&&void 0!==t&&t.length&&this.CHANGE_USER_STATUS()},methods:{...Object(x["b"])(["CHANGE_USER_STATUS"]),logOut(){localStorage.setItem("isUserLogged",!1),this.CHANGE_USER_STATUS(),localStorage.clear(),this.$router.push({name:"Login"})}}},j=k,I=(o("9a33"),Object(m["a"])(j,E,S,!1,null,"9070ca76",null)),N=I.exports,U={components:{VHeader:N,VFooter:T},name:"app"},P=U,D=(o("6a9b"),Object(m["a"])(P,n,i,!1,null,null,null)),F=D.exports,M=o("9483");Object(M["a"])("/test_todo_layout/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var R=o("8c4f");s["a"].use(x["a"]);var G=new x["a"].Store({state:{isUserLogged:!1,todoList:[]},mutations:{CHANGE_USER_STATUS:t=>t.isUserLogged=JSON.parse(localStorage.getItem("isUserLogged")),ADD_TODO_ITEM:(t,e)=>t.todoList.push(e),DELETE_TODO:(t,e)=>t.todoList=t.todoList.filter(t=>t.id!==e)},actions:{},modules:{}}),V=function(){var t=this,e=t._self._c;return e("main",{staticClass:"v-container"},[e("img",{staticClass:"v-container__main-bg",attrs:{src:t.mainBg,alt:""}}),e("div",{staticClass:"content"},[e("div",{staticClass:"content__article"},[t._m(0),e("div",{staticClass:"content__section"},[t._m(1),e("ul",t._l(t.list,(function(o,s){return e("li",{key:s},[e("span",[t._v(t._s(o.title))]),e("p",[t._v(t._s(o.note))])])})),0)])]),e("v-form",{staticClass:"content__form"})],1)])},H=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"content__title"},[t._v(" Welcome to"),e("br"),t._v(" Business Analytics Online ")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"content__note"},[e("span",[t._v("Business Analytics")]),t._v(" — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's ")])}],Y=o("9855"),B=o.n(Y),K=function(){var t=this,e=t._self._c;return e("form",{staticClass:"v-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("div",{staticClass:"v-form__input-wrapp"},[e("label",{attrs:{for:"lofin"}},[t._v("Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.login,expression:"form.login"}],staticClass:"form-control",class:{required:t.isLoginNotValid},attrs:{type:"text",id:"name"},domProps:{value:t.form.login},on:{input:function(e){e.target.composing||t.$set(t.form,"login",e.target.value)}}}),t.isLoginNotValid?e("p",[t._v("× Enter correct login")]):t._e()]),e("div",{staticClass:"v-form__input-wrapp"},[e("label",{attrs:{for:"password"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{required:t.isPassNotValid},attrs:{type:"password",id:"value"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t.isPassNotValid?e("p",[t._v("× Enter correct password")]):t._e()]),e("button",{staticClass:"btn-blue btn-primary",attrs:{type:"submit"}},[t._v("LOGIN")]),e("p",{staticClass:"v-form__forgot"},[t._v("Forgot Password")]),e("p",{staticClass:"v-form__register"},[t._v("Register now")])])},Q=[],Z={name:"v-from",data(){return{form:{login:"",password:""},isUserLogged:!1,isLoginNotValid:!1,isPassNotValid:!1}},computed:{},watch:{isUserLogged(){this.isUserLogged=localStorage.getItem("isUserLogged")}},methods:{...Object(x["b"])(["CHANGE_USER_STATUS"]),onSubmit(){this.isLoginNotValid=!this.form.login,this.isPassNotValid=!this.form.password,"Admin"===this.form.login&&"12345"===this.form.password?(localStorage.setItem("isUserLogged",!0),localStorage.setItem("userName","Admin"),this.CHANGE_USER_STATUS(),this.$router.push({name:"TodoPage"})):(this.isLoginNotValid=!0)&&(this.isPassNotValid=!0)}}},J=Z,W=(o("114f"),Object(m["a"])(J,K,Q,!1,null,"3eb88e36",null)),z=W.exports,q={components:{vForm:z},name:"LoginPage",data(){return{mainBg:B.a,list:[{title:"Interactive Reporting",note:"In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities."},{title:"Automated data updates",note:"The application automatically updates and structures the data in just 60 seconds, saving you time and money."},{title:"Data Security",note:"The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality."}]}}},X=q,$=(o("7f21"),Object(m["a"])(X,V,H,!1,null,"797cf940",null)),tt=$.exports,et=function(){var t=this,e=t._self._c;return e("main",{staticClass:"v-container"},[e("v-main-logo",{staticClass:"v-container__logo logo"}),e("div",{staticClass:"content"},[e("h1",[t._v("Thank you "+t._s(t.getUserName)+"!")]),e("button",{staticClass:"content__btn btn-blue btn-primary",class:{hide:t.todoList.length},on:{click:t.addTodoList}},[e("font-awesome-icon",{staticClass:"v-header__admin-panel__icon",attrs:{icon:"fa-solid fa-list"}}),t._v("    New todo list ")],1),t.todoList.length?t._e():e("p",[t._v("Theare no todos")]),t.isFormVisible?e("form",{staticClass:"content__new-todo",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),e("button",{staticClass:"btn-m btn-blue",attrs:{type:"submit",disabled:t.cantAddTodo}},[t._v(" Add new todo ")])]):t._e(),e("v-todo-list",{staticClass:"content__todo-list",attrs:{todoList:t.todoList}})],1)],1)},ot=[],st=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-todo-list"},t._l(t.todoList,(function(t,o){return e("v-todo-item",{key:o,attrs:{item:t}})})),1)},nt=[],it=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-todo-item"},[t.item.mode?e("div",{staticClass:"v-todo-item__state"},[e("input",{staticClass:"v-todo-item__checkbox",attrs:{type:"checkbox"},on:{change:t.isTodoCompleted}}),e("span",{directives:[{name:"touch",rawName:"v-touch:touchhold",value:t.switchModeTodo,expression:"switchModeTodo",arg:"touchhold"}],class:{completed:t.item.isCompleted},on:{dblclick:t.switchModeTodo}},[t._v(t._s(t.item.title))]),e("button",{staticClass:"btn-s btn-del",on:{click:function(e){return t.DELETE_TODO(t.item.id)}}},[t._v(" Delete ")])]):t._e(),t.item.mode?t._e():e("div",{staticClass:"v-todo-item__state"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],staticClass:"v-todo-item__input",attrs:{type:"text"},domProps:{value:t.item.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.switchModeTodo.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}}),e("button",{staticClass:"btn-s btn-grey",on:{click:t.switchModeTodo}},[t._v("Save")])])])},at=[],rt={name:"v-todo-item",props:{item:{type:Object,required:!0}},methods:{...Object(x["b"])(["DELETE_TODO"]),switchModeTodo(){this.item.mode=!this.item.mode},isTodoCompleted(){this.item.isCompleted=!this.item.isCompleted}}},ct=rt,lt=(o("8f94"),Object(m["a"])(ct,it,at,!1,null,"489c5648",null)),ut=lt.exports,dt={components:{vTodoItem:ut},name:"v-todo-list",data(){return{}},computed:{...Object(x["c"])(["todoList"])},methods:{...Object(x["b"])(["DELETE_SELECTED","CHOOSE_ALL"])}},mt=dt,ft=(o("dd31"),Object(m["a"])(mt,st,nt,!1,null,"f0068128",null)),pt=ft.exports,vt={name:"TodoList",components:{VTodoList:pt,VMainLogo:y},data(){return{value:"",isFormVisible:!1}},computed:{...Object(x["c"])(["todoList"]),cantAddTodo(){return!this.value},getUserName(){return localStorage.getItem("userName")}},watch:{todoList(){0===this.todoList.length&&(this.isFormVisible=!1)}},methods:{...Object(x["b"])(["ADD_TODO_ITEM"]),addTodoList(){this.isFormVisible=!0},onSubmit(){const t={id:Date.now(),title:this.value,mode:!0,isCompleted:!1};this.ADD_TODO_ITEM(t),this.value=""}}},gt=vt,ht=(o("62ea"),Object(m["a"])(gt,et,ot,!1,null,"c07997ec",null)),_t=ht.exports;s["a"].use(R["a"]);const bt=[{path:"/",redirect:"login"},{path:"/login",name:"Login",component:tt},{path:"/todo",name:"TodoPage",component:_t}],At=new R["a"]({mode:"history",base:"/test_todo_layout/",routes:bt});At.beforeEach(async(t,e,o)=>{if(G.state.isUserLogged=localStorage.getItem("isUserLogged"),"Login"!==t.name&&!G.state.isUserLogged)return G.state.isUserLogged=localStorage.getItem("isUserLogged"),o({name:"Login"});o()});var Ct=At,yt=o("0086"),Ot=o.n(yt),wt=(o("6788"),o("927c"),o("2612"),o("ecee")),Lt=o("c074"),Tt=o("ad3d");s["a"].component("font-awesome-icon",Tt["a"]),wt["c"].add(Lt["a"]),s["a"].use(Ot.a),s["a"].config.productionTip=!1,new s["a"]({router:Ct,store:G,render:t=>t(F)}).$mount("#app")},"62ea":function(t,e,o){"use strict";o("9124")},6788:function(t,e,o){},"6a9b":function(t,e,o){"use strict";o("e7d5")},"768f":function(t,e,o){"use strict";o("1d60")},"7f21":function(t,e,o){"use strict";o("a438")},"7f79":function(t,e,o){},"8f94":function(t,e,o){"use strict";o("c9f9")},9124:function(t,e,o){},"927c":function(t,e,o){},9855:function(t,e,o){t.exports=o.p+"img/background.901a8b78.png"},"9a33":function(t,e,o){"use strict";o("4695")},a438:function(t,e,o){},aa2c:function(t,e,o){"use strict";o("7f79")},bd34:function(t,e){t.exports="data:image/png;base64,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"},c9f9:function(t,e,o){},dd31:function(t,e,o){"use strict";o("0e4f")},e7d5:function(t,e,o){}});
//# sourceMappingURL=app.21a5a14f.js.map