(function(e){function t(t){for(var n,c,o=t[0],i=t[1],l=t[2],s=0,d=[];s<o.length;s++)c=o[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,c=1;c<r.length;c++){var o=r[c];0!==a[o]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},c={app:0},a={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4f1bcbdb":"5199e08f","chunk-1652e15a":"0df5fe5e","chunk-c74f61aa":"477f88c5","chunk-61702fe2":"a73e2e8c","chunk-8b199fc4":"c76c0019"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-4f1bcbdb":1,"chunk-1652e15a":1,"chunk-c74f61aa":1,"chunk-61702fe2":1,"chunk-8b199fc4":1};c[e]?t.push(c[e]):0!==c[e]&&r[e]&&t.push(c[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-4f1bcbdb":"1defe011","chunk-1652e15a":"58af28ae","chunk-c74f61aa":"b09077c8","chunk-61702fe2":"1defe011","chunk-8b199fc4":"854d7ad0"}[e]+".css",a=i.p+n,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var l=u[o],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===n||s===a))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],s=l.getAttribute("data-href");if(s===n||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete c[e],f.parentNode.removeChild(f),r(u)},f.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){c[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",d.name="ChunkLoadError",d.type=n,d.request=c,r[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/sundown-boulevard/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"26ce":function(e,t,r){"use strict";r("7274")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),c=r("9b19"),a=r.n(c),u={id:"nav"},o={class:"row align-items-center"},i={class:"col"},l=Object(n["g"])("img",{src:a.a,class:"img-fluid logo",alt:"Sundown Boulevard logo"},null,-1),s={class:"container mt-3 mb-5"},d=Object(n["g"])("footer",{class:"text-center"}," Sundown Boulevard ",-1);function f(e,t,r,c,a,f){var b=Object(n["C"])("router-link"),m=Object(n["C"])("router-view");return Object(n["u"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",u,[Object(n["g"])("div",o,[Object(n["g"])("div",i,[Object(n["g"])(b,{to:"/"},{default:Object(n["L"])((function(){return[l]})),_:1})]),(Object(n["u"])(!0),Object(n["d"])(n["a"],null,Object(n["A"])(a.navigation,(function(e,t){return Object(n["u"])(),Object(n["d"])("div",{key:t,class:"col navigation-item"},Object(n["F"])(e),1)})),128)),Object(n["g"])(b,{class:"btn btn-primary col",to:"/select-dish"},{default:Object(n["L"])((function(){return[Object(n["f"])(Object(n["F"])(e.getOrderStatus),1)]})),_:1})])]),Object(n["g"])("div",s,[Object(n["g"])(m)]),d],64)}var b=r("5530"),m=r("5502"),p={data:function(){return{navigation:["Restauranter","Produkter","Nyhedsbrev","Kontakt"]}},beforeCreate:function(){this.$store.commit("loadOrder")},computed:Object(b["a"])({},Object(m["b"])(["getOrderStatus"]))};r("26ce");p.render=f;var O=p,g=r("a18c"),h=(r("c740"),r("a434"),function(){return{currentOrder:{selectedDish:null,selectedBeverages:[],date:new Date,time:"16:00",amountOfPeople:0,email:""}}}),v=h(),j={toggleBeverageSelection:function(e,t){var r=e.currentOrder.selectedBeverages.findIndex((function(e){return e.id==t.id}));-1===r?e.currentOrder.selectedBeverages.push(t):e.currentOrder.selectedBeverages.splice(r,1),k(e.currentOrder,!0)},selectDish:function(e,t){e.currentOrder.selectedDish=t,k(e.currentOrder,!0)},loadOrder:function(e,t){var r=!1,n="currentOrder";void 0!=t&&(r=!0,n+="_".concat(t));var c=JSON.parse(localStorage.getItem(n));null!=c?(e.currentOrder=c,r&&(alert("Order was found! Navigating to dish selection screen 🤠"),k(e.currentOrder,!0),g["a"].push("/select-dish"))):r&&alert("Order was not found... Did you enter the correct email?")},confirmOrder:function(e,t){e.currentOrder.email=t.email,e.currentOrder.amountOfPeople=t.amountOfPeople,e.currentOrder.time=t.time,e.currentOrder.date=t.date,k(e.currentOrder),Object.assign(e,h()),localStorage.removeItem("currentOrder")}},y=Object(m["a"])({state:v,mutations:j,getters:{currentOrder:function(e){return e.currentOrder},getCurrentDish:function(e){return e.currentOrder.selectedDish},getOrderStatus:function(e){return""!=e.currentOrder.email?"Update order":"Create order"}}}),k=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r="currentOrder";""!=e.email?(r+="_".concat(e.email),t?(localStorage.removeItem(r),localStorage.setItem("currentOrder",JSON.stringify(e))):localStorage.setItem(r,JSON.stringify(e))):localStorage.setItem(r,JSON.stringify(e))},S=(r("bbe3"),Object(n["c"])(O));S.use(y),S.use(g["a"]),S.mount("#app")},7274:function(e,t,r){},"9b19":function(e,t,r){e.exports=r.p+"img/logo.c8f375f7.svg"},a18c:function(e,t,r){"use strict";r("d3b7"),r("3ca3"),r("ddb0");var n=r("6c02"),c=r("7a23"),a=r("b424"),u=r.n(a),o=Object(c["P"])("data-v-0cbfb322");Object(c["x"])("data-v-0cbfb322");var i={class:"home"},l={class:"row"},s=Object(c["g"])("div",{class:"col-12 mt-3"},[Object(c["g"])("h1",{class:"text-center"},"Welcome to Sundown Boulevard!")],-1),d={class:"offset-2 col-8 mt-3 mb-4"},f={class:"find-order"},b=Object(c["g"])("hr",null,null,-1),m={class:"row"},p=Object(c["g"])("div",{class:"col-6"},[Object(c["g"])("p",null,"Suspendisse venenatis sem vel ligula tristique, quis vulputate est sollicitudin. Ut massa justo, fringilla at felis congue, pretium congue tortor. Sed justo dolor, faucibus ut ex non, vehicula faucibus erat. Suspendisse scelerisque purus ut diam dapibus, ut vehicula turpis dapibus. Sed sed laoreet quam. Donec pharetra vitae nibh sit amet eleifend. Vestibulum tincidunt ut turpis eu condimentum. Nam id eros diam.")],-1),O={class:"col-6"},g=Object(c["g"])("img",{class:"img-fluid",src:u.a},null,-1);Object(c["v"])();var h=o((function(e,t,r,n,a,u){var h=Object(c["C"])("swiper-slide"),v=Object(c["C"])("swiper");return Object(c["u"])(),Object(c["d"])("div",i,[Object(c["g"])("div",l,[s,Object(c["g"])("div",d,[Object(c["g"])("div",f,[Object(c["M"])(Object(c["g"])("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.email=e}),onKeyup:t[2]||(t[2]=Object(c["N"])((function(e){return u.findOrder()}),["enter"])),placeholder:"Enter email to change previous order"},null,544),[[c["H"],a.email]]),Object(c["g"])("button",{class:"btn btn-primary",onClick:t[3]||(t[3]=function(e){return u.findOrder()})},"Find order")])])]),b,Object(c["g"])("div",m,[p,Object(c["g"])("div",O,[Object(c["g"])(v,{"slides-per-view":1,"space-between":50,pagination:{clickable:!0}},{default:o((function(){return[(Object(c["u"])(),Object(c["d"])(c["a"],null,Object(c["A"])(3,(function(e){return Object(c["g"])(h,{key:e},{default:o((function(){return[g]})),_:2},1024)})),64))]})),_:1})])])])})),v=r("6d3b"),j=r("5dc8"),y=r("90ea"),k=r("a16a");v["a"].use([j["a"]]);var S={components:{Swiper:y["a"],SwiperSlide:k["a"]},data:function(){return{email:""}},methods:{findOrder:function(){this.$store.commit("loadOrder",this.email)}}};r("e98a");S.render=h,S.__scopeId="data-v-0cbfb322";var w=S,P=[{path:"/",name:"Home",component:w},{path:"/select-dish",name:"Select dish",component:function(){return Promise.all([r.e("chunk-4f1bcbdb"),r.e("chunk-c74f61aa")]).then(r.bind(null,"f3d5"))}},{path:"/select-beverage",name:"Select beverage",component:function(){return Promise.all([r.e("chunk-4f1bcbdb"),r.e("chunk-1652e15a")]).then(r.bind(null,"7cb7"))}},{path:"/confirm-order",name:"Confirm order",component:function(){return r.e("chunk-61702fe2").then(r.bind(null,"ae6a"))}},{path:"/receipt",name:"Receipt",component:function(){return r.e("chunk-8b199fc4").then(r.bind(null,"ebb1"))}}],_=Object(n["a"])({history:Object(n["b"])(),routes:P});t["a"]=_},a56a:function(e,t,r){},b424:function(e,t,r){e.exports=r.p+"img/cage.5eaf3bcb.jpg"},e98a:function(e,t,r){"use strict";r("a56a")}});
//# sourceMappingURL=app.519ea503.js.map