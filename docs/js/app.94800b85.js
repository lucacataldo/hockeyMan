(function(e){function t(t){for(var n,r,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},s={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2ed189fa":"bc3678ae"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-2ed189fa":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-2ed189fa":"947c17a0"}[e]+".css",s=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===n||l===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],m.parentNode.removeChild(m),a(o)},m.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){r[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,a[1](f)}s[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var m=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"06e0":function(e,t,a){"use strict";var n=a("c3e6"),r=a.n(n);r.a},"107c":function(e,t,a){"use strict";var n=a("6c49"),r=a.n(n);r.a},3672:function(e,t,a){"use strict";var n=a("7f58"),r=a.n(n);r.a},"555f":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cont"},[a("div",[a("i",{staticClass:"fa fa-5x fa-circle-notch"}),e.isLongWait?a("div",{staticClass:"message"},[e._v(e._s(e.waitMsg))]):a("div",{staticClass:"message"},[e._v(e._s(e.message))])])])},r=[],s=(a("d3b7"),a("96cf"),a("1da1")),o={data:function(){return{isDestroyed:!1,isLongWait:!1,waitMsg:""}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.wait(5e3);case 2:if(e.isLongWait=!0,e.waitMsg="Remember when the Leafs lost to a Zamboni driver?",!e.isDestroyed){t.next=6;break}return t.abrupt("return",0);case 6:return t.next=8,e.wait(5e3);case 8:if(e.waitMsg="That was fun :)",!e.isDestroyed){t.next=11;break}return t.abrupt("return",0);case 11:return t.next=13,e.wait(5e3);case 13:if(e.waitMsg="Shoutout to /r/hockey!",!e.isDestroyed){t.next=16;break}return t.abrupt("return",0);case 16:return t.next=18,e.wait(5e3);case 18:if(e.waitMsg="Sorry it shouldn't take this long...",!e.isDestroyed){t.next=21;break}return t.abrupt("return",0);case 21:return t.next=23,e.wait(5e3);case 23:if(e.waitMsg="Maybe you requested a lot of data.",!e.isDestroyed){t.next=26;break}return t.abrupt("return",0);case 26:return t.next=28,e.wait(5e3);case 28:if(alert("Hmm, sorry this is taking so long. It might be a good idea to try again later."),!e.isDestroyed){t.next=31;break}return t.abrupt("return",0);case 31:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.isDestroyed=!0},timers:[0],props:{message:{type:String,default:""}},methods:{wait:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){setTimeout((function(){e()}),t)}));case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},i=o,c=(a("06e0"),a("2877")),u=Object(c["a"])(i,n,r,!1,null,"55d994bb",null);t["a"]=u.exports},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:{"--highlight":e.themeColour},attrs:{id:"app"}},[a("toaster",{ref:"toaster"}),a("div",{staticClass:"header"},[a("router-link",{attrs:{to:"/"}},[a("h1",{staticClass:"title"},[a("span",{staticClass:"beta-tag"},[e._v("BETA")]),a("span",{staticClass:"highlight"},[e._v("{")]),e._v(" StickStats "),a("span",{staticClass:"highlight"},[e._v("}")])])]),a("settings-popup")],1),a("transition",{on:{"after-enter":function(t){return e.animate()}}},[a("router-view",{key:e.$route.path,attrs:{theme:e.themeColour}})],1),a("div",{staticClass:"copyright"},[e._v(" "+e._s(e.$teams.copyright)+" "),a("br"),e._m(0)])],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{target:"_blank",href:"https://cataldo.ca"}},[e._v(" Created by "),a("b",[e._v("Cataldo "),a("i",{staticClass:"fas fa-external-link-alt"})])])}],o=(a("96cf"),a("1da1")),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("i",{staticClass:"fas fa-ellipsis-v settingsButton",on:{click:function(t){e.menuOpen=!e.menuOpen}}}),a("transition",{attrs:{name:"menu"}},[e.menuOpen?a("div",{staticClass:"menu"},[a("span",[e._v("Theme Colour")]),a("ul",{staticClass:"colourOptions"},e._l(e.colourOptions,(function(t){return a("li",{key:t,style:{background:"#"+t},on:{click:function(a){return e.selectColour(t)}}})})),0),a("br"),a("div",{staticClass:"button noselect",on:{click:function(t){return e.clearStorage()}}},[e._v("Clear Cache")])]):e._e()])],1)},c=[],u={name:"SettingsPopup",data:function(){return{colourOptions:["fbff12","0affc2","00ccf5","ff7700","f50076"],menuOpen:!1}},methods:{selectColour:function(e){e="#"+e,this.$parent.themeColour=e,localStorage.themeColour=e},clearStorage:function(){localStorage.clear(),alert("Cleared!")}},mounted:function(){var e=this;document.addEventListener("click",(function(t){t.target===document.querySelector(".settingsButton")||!0!==e.menuOpen||document.querySelector(".menu").contains(t.target)||(e.menuOpen=!1)}))}},l=u,f=(a("3672"),a("2877")),m=Object(f["a"])(l,i,c,!1,null,"0a8fc342",null),p=m.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"open"}},[e.isOpen?a("div",{staticClass:"container"},[a("div",{staticClass:"top"},[a("i",{staticClass:"fas fa-times close",on:{click:function(t){e.isOpen=!1}}})]),a("div",{staticClass:"message"},[a("span",{domProps:{innerHTML:e._s(e.options.message)}})])]):e._e()])},d=[],g={name:"Toaster",data:function(){return{options:{message:"Loading message, please wait.",length:5e3},isOpen:!1}},methods:{toast:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{message:"message",length:5e3};this.options=t,this.isOpen=!0,setTimeout((function(){e.isOpen=!1}),t.length)}}},v=g,b=(a("107c"),Object(f["a"])(v,h,d,!1,null,"12475424",null)),y=b.exports,w={name:"App",data:function(){return{copyright:"",themeColour:"#fbff12"}},components:{SettingsPopup:p,Toaster:y},methods:{toggleSettings:function(){}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:localStorage.themeColour&&(e.themeColour=localStorage.themeColour),e.$refs.toaster.toast({message:'\n\t\t\t\tHey, thanks for checking out StickStats. We\'re currently in <b>BETA</b> meaning \n\t\t\t\tthat there might be some hiccups and bugs along the way. If you do happen \n\t\t\t\tto come accross a bug or have a suggestion, feel free to send us a message \n\t\t\t\t<b><a target="_blank" href="https://cataldo.ca#chat">here <i class="fas fa-external-link-alt"></i></a> </b> \n\t\t\t\tand check back often for new features!',length:1e4});case 2:case"end":return t.stop()}}),t)})))()}},k=w,C=(a("034f"),Object(f["a"])(k,r,s,!1,null,null,null)),x=C.exports,_=(a("d3b7"),a("8c4f")),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("h2",{staticClass:"seasonCont"},[e._v(" Stats for the "),a("season-selector"),e._v(" season ")],1)]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"searchBox",attrs:{type:"text",placeholder:"Filter teams..."},domProps:{value:e.searchTerm},on:{input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}}),a("i",{staticClass:"fas fa-search"}),a("div",{staticClass:"description float-up"},[e._v(" StickStats compiles stats and standings from the NHL regular season to offer simple ratings on a scale from 1-100. You'll find teams listed from best to worst based on these ratings below. ")]),a("div",{staticClass:"teamGrid"},[e.$teams.loading?a("loader",{attrs:{message:"Working hard, please wait..."}}):e._l(e.$teams.teams.filter(e.searchAlgorithm),(function(t){return a("router-link",{key:t.id+""+Date.now(),staticClass:"team float-up",attrs:{to:"/team/"+t.id+"/season/"+e.$teams.season.slice(0,4)}},[a("h3",[e._v(e._s(t.name))]),a("img",{staticClass:"logo",attrs:{src:"https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/"+t.id+".svg"},on:{error:e.fallbackImg}}),a("span",{staticClass:"subtitle"},[e._v("Our Rating")]),a("span",{staticClass:"rating"},[e._v(" "+e._s(t.overall)+" ")])])}))],2)])},O=[],T=(a("c975"),a("b0c0"),a("644c")),j=a("555f"),$={components:{SeasonSelector:T["a"],Loader:j["a"]},name:"Home",data:function(){return{searchTerm:"",searchResults:[]}},methods:{searchAlgorithm:function(e){var t=this.searchTerm.toLowerCase(),a=e.name.toLowerCase().indexOf(t)>-1||e.abbreviation.toLowerCase()===t;return a}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$route.params.seasonId){t.next=5;break}return t.next=3,e.$teams.getData(parseInt(e.$route.params.seasonId));case 3:t.next=7;break;case 5:return t.next=7,e.$teams.getData();case 7:e.animate();case 8:case"end":return t.stop()}}),t)})))()}},E=$,R=(a("a2a2"),Object(f["a"])(E,S,O,!1,null,"c05cff3a",null)),D=R.exports;n["a"].use(_["a"]);var L=[{path:"/",name:"Home",component:D},{path:"/season/:seasonId",name:"Season",component:D},{path:"/team/:id",name:"View Team Stats",component:function(){return a.e("chunk-2ed189fa").then(a.bind(null,"0767"))}},{path:"/team/:id/season/:seasonId",name:"View Team Stats",component:function(){return a.e("chunk-2ed189fa").then(a.bind(null,"0767"))}}],P=new _["a"]({mode:"history",base:"/",routes:L}),I=P,M=(a("99af"),a("4160"),a("fb6a"),a("b680"),a("159b"),a("bc3a")),A=a.n(M),N=n["a"].observable({loading:!1,teams:[],copyright:"",season:"",seasonSimple:"",formatSeason:function(e){return"".concat(e).concat(e+1)},getTeamSeason:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://statsapi.web.nhl.com/api/v1/teams/".concat(t,"?expand=team.stats&season=").concat(this.formatSeason(a)));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}(),getHistoricalRatings:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var a,n,r,s,o,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=i.length>1&&void 0!==i[1]?i[1]:30,n=(new Date).getFullYear()-a,r={},s=n;case 4:if(!(s<(new Date).getFullYear())){e.next=26;break}if(e.prev=5,!localStorage.getItem("".concat(t,"-").concat(s))){e.next=10;break}r[s]=JSON.parse(localStorage.getItem("".concat(t,"-").concat(s))).overall,e.next=14;break;case 10:return e.next=12,this.getTeamSeason(t,s);case 12:o=e.sent,200===o.status?(r[s]=this.rate(o.data.teams[0]),localStorage.setItem("".concat(t,"-").concat(s),JSON.stringify({year:s,overall:r[s]}))):(r[s]=null,localStorage.setItem("".concat(t,"-").concat(s),JSON.stringify({year:s,overall:null})));case 14:e.next=21;break;case 16:e.prev=16,e.t0=e["catch"](5),r[s]=null,localStorage.setItem("".concat(t,"-").concat(s),JSON.stringify({year:s,overall:null})),console.log(e.t0);case 21:return e.next=23,new Promise((function(e){setTimeout((function(){e()}),75)}));case 23:s++,e.next=4;break;case 26:return e.abrupt("return",r);case 27:case"end":return e.stop()}}),e,this,[[5,16]])})));function t(t){return e.apply(this,arguments)}return t}(),rate:function(e){var t=e.teamStats[0].splits[1].stat,a=0,n=1;for(var r in t)a+=parseInt(t[r].slice(0,-2)),n++;return(100*(n-a/n)/n).toFixed(1)},getData:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var a,n,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.loading=!0,t){e.next=8;break}return e.next=4,A.a.get("https://statsapi.web.nhl.com/api/v1/seasons/current");case 4:a=e.sent,t=a.data.seasons[0].seasonId,e.next=9;break;case 8:t=this.formatSeason(t);case 9:return this.season=t,e.next=12,A.a.get("https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats&season=".concat(t));case 12:n=e.sent,this.teams=n.data.teams,this.copyright=n.data.copyright,this.teams.forEach((function(e,t){r.teams[t].overall=r.rate(e)})),this.teams=this.teams.sort((function(e,t){return t.overall-e.overall})),this.loading=!1;case 18:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}),B=a("cffa");n["a"].prototype.$teams=N,n["a"].mixin({methods:{animate:function(){var e=B["a"].timeline();e.set(".float-up",{opacity:0,y:50}),e.to(".float-up",{duration:.3,opacity:1,y:0,stagger:.05})},fallbackImg:function(e){e.target.src="/notFound.svg"}}}),new n["a"]({router:I,render:function(e){return e(x)}}).$mount("#app")},6251:function(e,t,a){},"644c":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"seasonSelector"},[a("div",{staticClass:"selector noselect",on:{click:function(t){e.isOpen=!e.isOpen}}},[e._v(" "+e._s(e.$teams.season.slice(0,4)+"-"+e.$teams.season.slice(4,8))+" "),a("i",{staticClass:"fa fa-angle-down"})]),e.isOpen?a("div",{staticClass:"seasons"},[a("i",{staticClass:"fa fa-times close",on:{click:function(t){e.isOpen=!1}}}),a("h1",{staticClass:"noselect"},[e._v("Select a season")]),e._l(e.seasons,(function(t){return a("router-link",{key:t,staticClass:"seasonResult noselect",attrs:{to:e.toPrefix+"/season/"+t.slice(0,4)}},[e._v(" "+e._s(t.slice(0,4)+"-"+t.slice(4,8))+" ")])}))],2):e._e()])},r=[],s=(a("99af"),{data:function(){return{seasons:[],isOpen:!1}},props:{toPrefix:{type:String,default:""}},mounted:function(){for(var e=this,t=(new Date).getFullYear(),a=0;a<10;a++)this.seasons[a]="".concat(t-a-1).concat(t-a);document.addEventListener("click",(function(t){t.target!==document.querySelector(".seasonResult")&&!0===e.isOpen&&document.querySelector(".seasons").contains(t.target)&&(e.isOpen=!1)}))}}),o=s,i=(a("a5c6"),a("2877")),c=Object(i["a"])(o,n,r,!1,null,"6318a312",null);t["a"]=c.exports},"6c49":function(e,t,a){},"7f58":function(e,t,a){},"85ec":function(e,t,a){},a2a2:function(e,t,a){"use strict";var n=a("cf6d"),r=a.n(n);r.a},a5c6:function(e,t,a){"use strict";var n=a("6251"),r=a.n(n);r.a},c3e6:function(e,t,a){},cf6d:function(e,t,a){}});
//# sourceMappingURL=app.94800b85.js.map