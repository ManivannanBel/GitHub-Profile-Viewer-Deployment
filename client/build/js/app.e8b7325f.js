(function(e){function t(t){for(var i,s,o=t[0],c=t[1],u=t[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],i=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var i={},n={app:0},a=[];function s(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=i,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"0356":function(e,t,r){"use strict";r("5ba8")},"199b":function(e,t,r){"use strict";r("f013")},"2af9":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("0cdd");var i=r("2b0e"),n=r("5f5b"),a=r("b1e0");r("ab8b"),r("2dd8");i["default"].use(n["a"]),i["default"].use(a["a"]);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],c=(r("034f"),r("2877")),u={},l=Object(c["a"])(u,s,o,!1,null,null,null),p=l.exports,f=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("Header"),r("b-container",[r("SearchBar",{on:{"on-search":e.searchUsers}}),r("GitHubProfileList",{attrs:{usersList:e.searchResults,resultCount:e.resultCount,pageNo:e.pageNo,perPage:e.perPage},on:{"load-more":e.searchMoreUsers}})],1)],1)},h=[],g=r("5530"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",{staticClass:"title"},[r("b-icon",{attrs:{icon:"github"}}),e._v(" GitHub Profile Viewer")],1)])},b=[],v={name:"Header"},_=v,y=(r("cc40"),Object(c["a"])(_,m,b,!1,null,"59b6dc77",null)),P=y.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"wrapper"},[r("b-icon",{staticClass:"searchIcon",attrs:{icon:"search"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"bar",attrs:{type:"text",placeholder:"search user..."},domProps:{value:e.searchQuery},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchUser(t)},input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})],1)},L=[],O=(r("498a"),{name:"SearchBar",data:function(){return{searchQuery:""}},methods:{searchUser:function(e){e.preventDefault(),""!==this.searchQuery.trim&&this.$emit("on-search",this.searchQuery)}}}),j=O,w=(r("d122"),Object(c["a"])(j,D,L,!1,null,"2e5dbe4e",null)),C=w.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"list gridWrapper"},e._l(e.usersList,(function(e){return r("div",{key:e.id},[r("GitHubProfileListItem",{attrs:{profile:e}})],1)})),0)},R=[],N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("router-link",{staticClass:"link",attrs:{to:"/"+e.profile.login}},[r("b-card",{staticClass:"card",attrs:{"img-src":e.profile.avatar_url,"img-alt":e.profile.login,"img-left":"","img-height":"129","img-width":"130"}},[r("div",[r("h4",[e._v(e._s(e.profile.login))])]),e.profileDetails[e.profile.login]?r("div",{staticClass:"desc"},[r("span",[e._v("@"+e._s(e.profileDetails[e.profile.login].login))]),e.profileDetails[e.profile.login].company?r("span",[e._v(","+e._s(e.profileDetails[e.profile.login].company))]):e._e(),r("p",[e._v(e._s(e.profileDetails[e.profile.login].bio))])]):e._e()])],1)],1)},x=[],k=r("2f62"),Q={name:"GitHubProfileListItem",props:["profile"],methods:Object(g["a"])({},Object(k["b"])(["getProfile"])),computed:Object(k["c"])(["profileDetails"]),created:function(){this.profileDetails[this.profile.login]||this.getProfile(this.profile.login)}},H=Q,E=(r("199b"),Object(c["a"])(H,N,x,!1,null,"4026c8c8",null)),A=E.exports,$={name:"GitHubProfileList",props:["usersList","resultCount","pageNo","perPage"],components:{GitHubProfileListItem:A},computed:Object(k["c"])(["apiLoading"]),mounted:function(){this.$nextTick((function(){window.addEventListener("scroll",this.onScroll)}))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){var e=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;e&&!this.apiLoading&&this.pageNo-1>0&&(this.pageNo-1)*this.perPage<=this.resultCount&&this.$emit("load-more")}}},U=$,G=(r("0356"),Object(c["a"])(U,S,R,!1,null,"937ec4f6",null)),M=G.exports,B={name:"Home",components:{Header:P,SearchBar:C,GitHubProfileList:M},methods:Object(g["a"])({},Object(k["b"])(["searchUsers","searchMoreUsers"])),computed:Object(k["c"])(["searchResults","resultCount","pageNo","currentSearchQuery","perPage"])},T=B,I=Object(c["a"])(T,d,h,!1,null,null,null),W=I.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("b-container",[r("router-link",{staticClass:"back",attrs:{to:"/"}},[r("h4",[e._v("Back")])]),e.userDetails.login?r("div",[r("div",{staticClass:"mainDetailWrapper"},[r("img",{staticClass:"avatar",attrs:{src:e.userDetails.avatar_url}}),r("div",{staticClass:"details"},[r("div",[e._v(e._s(e.userDetails.name))]),r("div",[e._v("@"+e._s(e.userDetails.login))])])]),e.userDetails.bio?r("section",[r("h5",[e._v("Bio")]),r("p",[e._v(e._s(e.userDetails.bio))])]):e._e(),e.userDetails.company?r("section",[r("h5",[e._v("Works at")]),r("p",[e._v(e._s(e.userDetails.company))])]):e._e(),r("div",{staticClass:"detailsWrappers"},[r("div",[r("h5",[e._v("Repositories")]),r("div",[e._v(e._s(e.userDetails.public_repos))])]),r("div",[r("h5",[e._v("Followers")]),r("div",[e._v(e._s(e.userDetails.followers))])])])]):e.apiLoading?e._e():r("div",[r("h5",{staticClass:"warn"},[e._v("No user found with username! : "+e._s(e.currentRoute))])])],1)],1)},J=[],F={name:"Profile",data:function(){return{currentRoute:window.location.hash.substring(2),userDetails:{}}},methods:Object(g["a"])({},Object(k["b"])(["getProfile"])),computed:Object(k["c"])(["profileDetails","apiLoading"]),created:function(){this.profileDetails[this.currentRoute]?this.userDetails=this.profileDetails[this.currentRoute]:(this.apiLoading=!0,this.getProfile(this.currentRoute))},watch:{profileDetails:function(){this.userDetails=this.profileDetails[this.currentRoute]}}},V=F,z=(r("cbc7"),Object(c["a"])(V,q,J,!1,null,"b31c3a9c",null)),K=z.exports;i["default"].use(f["a"]);var X=[{path:"/",name:"Home",component:W},{path:"/:loginid",name:"Profile",component:K}],Y=new f["a"]({routes:X}),Z=Y,ee=(r("99af"),r("2909")),te=r("bc3a"),re=r.n(te),ie={searchResults:[],resultCount:0,pageNo:1,currentSearchQuery:"",perPage:10,apiLoading:!1},ne={searchResults:function(e){return e.searchResults},resultCount:function(e){return e.resultCount},pageNo:function(e){return e.pageNo},currentSearchQuery:function(e){return e.currentSearchQuery},perPage:function(e){return e.perPage},apiLoading:function(e){return e.apiLoading}},ae={searchUsers:function(e,t){var r=e.commit;r("setApiLoading",!0),re.a.get("https://api.github.com/search/users",{params:{q:t,per_page:ie.perPage,page:1}}).then((function(e){r("setSearchResults",e.data.items),r("setResultCount",e.data.total_count),r("setPageNo",++ie.pageNo),r("setCurrentSearchQuery",t),r("setApiLoading",!1)})).catch((function(e){console.log(e),r("setApiLoading",!1)}))},searchMoreUsers:function(e){var t=e.commit;t("setApiLoading",!0),re.a.get("https://api.github.com/search/users",{params:{q:ie.currentSearchQuery,per_page:ie.perPage,page:ie.pageNo}}).then((function(e){t("setApiLoading",!1),t("updateSearchResults",e.data.items),t("setPageNo",++ie.pageNo)})).catch((function(e){console.log(e),t("setApiLoading",!1)}))}},se={setSearchResults:function(e,t){return e.searchResults=t},updateSearchResults:function(e,t){return e.searchResults=[].concat(Object(ee["a"])(e.searchResults),Object(ee["a"])(t))},setPageNo:function(e,t){return e.pageNo=t},setResultCount:function(e,t){return e.resultCount=t},setCurrentSearchQuery:function(e,t){return e.currentSearchQuery=t},setApiLoading:function(e,t){return e.apiLoading=t}},oe={state:ie,getters:ne,actions:ae,mutations:se},ce=r("ade3"),ue={profileDetails:{},apiLoading:!1},le={profileDetails:function(e){return e.profileDetails},apiLoading:function(e){return e.apiLoading}},pe={setProfileDetails:function(e,t){return e.profileDetails=Object(g["a"])(Object(g["a"])({},e.profileDetails),{},Object(ce["a"])({},t.login,t))},setApiLoading:function(e,t){return e.apiLoading=t}},fe={getProfile:function(e,t){var r=e.commit;r("setApiLoading",!0),re.a.get("https://api.github.com/users/".concat(t)).then((function(e){r("setProfileDetails",e.data),r("setApiLoading",!1)})).catch((function(e){r("setApiLoading",!1),console.log(e)}))}},de={state:ue,getters:le,mutations:pe,actions:fe};i["default"].use(k["a"]);var he=new k["a"].Store({modules:{search:oe,profile:de}});i["default"].config.productionTip=!1,new i["default"]({store:he,router:Z,render:function(e){return e(p)}}).$mount("#app")},"576a":function(e,t,r){},"5ba8":function(e,t,r){},"7aa6":function(e,t,r){},"85ec":function(e,t,r){},cbc7:function(e,t,r){"use strict";r("576a")},cc40:function(e,t,r){"use strict";r("7aa6")},d122:function(e,t,r){"use strict";r("2af9")},f013:function(e,t,r){}});
//# sourceMappingURL=app.e8b7325f.js.map