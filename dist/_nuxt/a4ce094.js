(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,7],{323:function(e,t,r){var content=r(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(124).default)("a59ee5ce",content,!0,{sourceMap:!1})},324:function(e,t,r){var content=r(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(124).default)("a57a839c",content,!0,{sourceMap:!1})},325:function(e,t,r){var content=r(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(124).default)("7803683a",content,!0,{sourceMap:!1})},326:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(44),r(125)),c=r(126),d={data:function(){return{user:null}},mounted:function(){var e=this;Object(c.c)(o.a,(function(t){e.user=t}))},methods:{loginWithFacebook:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(c.d)(o.a,o.d);case 3:r=t.sent,e.user=r.user,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),"auth/popup-closed-by-user"===t.t0.code?console.log("User closed the popup before completing the login."):console.error("Facebook login failed:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},logout:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(c.e)(o.a);case 3:e.user=null,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error("Logout failed:",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},l=(r(329),r(58)),component=Object(l.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"auth-section",attrs:{id:"auth-section"}},[e.user?e._e():t("button",{staticClass:"auth-section button",on:{click:e.loginWithFacebook}},[e._v("Login with Facebook")]),e._v(" "),e.user?t("button",{staticClass:"auth-section button",on:{click:e.logout}},[e._v("Logout")]):e._e(),e._v(" "),e.user?t("span",[e._v("Logged in as: "+e._s(e.user.displayName))]):e._e()])}),[],!1,null,"6dc14710",null);t.default=component.exports},327:function(e,t,r){"use strict";r.r(t);r(51),r(59),r(19),r(36),r(159);var n={data:function(){return{query:"",cuisine:""}},methods:{search:function(){this.$router.push({path:"/results",query:{query:this.query,cuisine:this.cuisine}})}}},o=(r(331),r(58)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"search-section"},[t("h2",[e._v("Search Recipes")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Search for recipes..."},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.cuisine,expression:"cuisine"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.cuisine=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:""}},[e._v("All Cuisines")]),e._v(" "),t("option",{attrs:{value:"Mongolian"}},[e._v("Mongolian")]),e._v(" "),t("option",{attrs:{value:"Asian"}},[e._v("Asian")]),e._v(" "),t("option",{attrs:{value:"Italian"}},[e._v("Italian")])]),e._v(" "),t("button",{on:{click:e.search}},[e._v("Search")])])}),[],!1,null,"a646b484",null);t.default=component.exports},328:function(e,t,r){"use strict";r.r(t);r(41);var n=r(10),o=(r(44),r(125)),c=r(160),d={data:function(){return{name:"",cuisine:"",ingredients:"",image:""}},methods:{addRecipe:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=auth.currentUser){t.next=3;break}return t.abrupt("return",alert("Please log in."));case 3:return t.prev=3,t.next=6,Object(c.a)(Object(c.b)(o.b,"recipes"),{name:e.name,cuisine:e.cuisine,ingredients:e.ingredients.split(","),image:e.image,uid:r.uid});case 6:alert("Recipe added successfully!"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[3,9]])})))()}}},l=(r(333),r(58)),component=Object(l.a)(d,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"search-section"},[t("h2",[e._v("Add a Recipe")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Recipe Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.cuisine,expression:"cuisine"}],attrs:{type:"text",placeholder:"Cuisine"},domProps:{value:e.cuisine},on:{input:function(t){t.target.composing||(e.cuisine=t.target.value)}}}),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.ingredients,expression:"ingredients"}],attrs:{placeholder:"Ingredients (comma-separated)"},domProps:{value:e.ingredients},on:{input:function(t){t.target.composing||(e.ingredients=t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.image,expression:"image"}],attrs:{type:"text",placeholder:"Image URL"},domProps:{value:e.image},on:{input:function(t){t.target.composing||(e.image=t.target.value)}}}),e._v(" "),t("button",{on:{click:e.addRecipe}},[e._v("Add Recipe")])])}),[],!1,null,"37792e26",null);t.default=component.exports},329:function(e,t,r){"use strict";r(323)},330:function(e,t,r){var n=r(123)((function(i){return i[1]}));n.push([e.i,".auth-section span[data-v-6dc14710]{font-weight:700}.auth-section button[data-v-6dc14710]{background-color:#007bff;border:none;border-radius:8px;color:#fff;cursor:pointer;font-size:16px;margin-top:15px;max-width:400px;padding:12px 16px;transition:background-color .3s ease;width:100%}.auth-section button[data-v-6dc14710]:hover{color:#0056b3}",""]),n.locals={},e.exports=n},331:function(e,t,r){"use strict";r(324)},332:function(e,t,r){var n=r(123)((function(i){return i[1]}));n.push([e.i,".search-section[data-v-a646b484]{align-items:center;background:#f9f9f9;border-radius:12px;box-shadow:0 4px 8px rgba(0,0,0,.1);display:flex;flex-direction:column;margin:auto;max-width:600px;padding:30px;width:100%}.search-section input[data-v-a646b484],.search-section select[data-v-a646b484],.search-section textarea[data-v-a646b484]{background-color:#fff;border:1px solid #ddd;border-radius:8px;font-size:16px;margin:10px 0;max-width:100%;padding:12px 16px;transition:border-color .3s ease,box-shadow .3s ease;width:100%}.search-section input[data-v-a646b484]:focus,.search-section select[data-v-a646b484]:focus,.search-section textarea[data-v-a646b484]:focus{border-color:#007bff;box-shadow:0 0 8px rgba(0,123,255,.3);outline:none}.search-section textarea[data-v-a646b484]{min-height:100px;resize:vertical}.search-section button[data-v-a646b484]{background-color:#007bff;border:none;border-radius:8px;color:#fff;cursor:pointer;font-size:16px;margin-top:15px;max-width:220px;padding:12px 16px;transition:background-color .3s ease;width:100%}.search-section button[data-v-a646b484]:hover{background-color:#0056b3}",""]),n.locals={},e.exports=n},333:function(e,t,r){"use strict";r(325)},334:function(e,t,r){var n=r(123)((function(i){return i[1]}));n.push([e.i,".search-section[data-v-37792e26]{align-items:center;background:#f9f9f9;border-radius:12px;box-shadow:0 4px 8px rgba(0,0,0,.1);display:flex;flex-direction:column;margin:auto;max-width:600px;padding:30px;width:100%}.search-section input[data-v-37792e26],.search-section select[data-v-37792e26],.search-section textarea[data-v-37792e26]{background-color:#fff;border:1px solid #ddd;border-radius:8px;font-size:16px;margin:10px 0;max-width:100%;padding:12px 16px;transition:border-color .3s ease,box-shadow .3s ease;width:100%}.search-section input[data-v-37792e26]:focus,.search-section select[data-v-37792e26]:focus,.search-section textarea[data-v-37792e26]:focus{border-color:#007bff;box-shadow:0 0 8px rgba(0,123,255,.3);outline:none}.search-section textarea[data-v-37792e26]{min-height:100px;resize:vertical}.search-section button[data-v-37792e26]{background-color:#007bff;border:none;border-radius:8px;color:#fff;cursor:pointer;font-size:16px;margin-top:15px;max-width:220px;padding:12px 16px;transition:background-color .3s ease;width:100%}.search-section button[data-v-37792e26]:hover{background-color:#0056b3}",""]),n.locals={},e.exports=n},347:function(e,t,r){var content=r(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(124).default)("adfb2d9a",content,!0,{sourceMap:!1})},355:function(e,t,r){"use strict";r(347)},356:function(e,t,r){var n=r(123)((function(i){return i[1]}));n.push([e.i,'[data-v-22c4dbd8]:root{--primary-color:#007bff;--primary-dark:#0056b3;--secondary-color:#6c757d;--success-color:#28a745;--danger-color:#dc3545;--background-color:#f4f4f4;--header-background:#2c3e50;--card-background:#fff;--font-family:"Arial",sans-serif;--font-family-serif:"Georgia",serif;--font-size-base:16px;--font-size-large:1.5rem;--font-size-small:0.875rem;--line-height-base:1.5;--spacing-small:8px;--spacing-medium:16px;--spacing-large:24px;--spacing-xlarge:32px;--breakpoint-mobile:768px;--breakpoint-tablet:1024px;--breakpoint-desktop:1200px;--box-shadow-light:0 2px 6px rgba(0,0,0,.1);--box-shadow-medium:0 4px 12px rgba(0,0,0,.2);--box-shadow-dark:0 6px 18px rgba(0,0,0,.3);--border-radius-small:4px;--border-radius-medium:8px;--border-radius-large:16px;--button-padding:12px 20px;--button-border-radius:5px;--button-font-size:1rem;--button-transition:background-color 0.3s ease}.page-container[data-v-22c4dbd8]{align-items:center;background-color:#ffc181;display:flex;flex-direction:column;margin:0;min-height:100vh}.header[data-v-22c4dbd8]{background-color:#ff9021;border-radius:8px;box-shadow:0 6px 12px rgba(0,0,0,.1);color:#f5f5f5;margin:20px 0;padding:40px 20px;text-align:center;width:95%}.header h1[data-v-22c4dbd8]{color:#f5f5f5;font-size:2.8rem;font-weight:700;letter-spacing:2px}.main-content[data-v-22c4dbd8]{align-items:center;display:flex;flex-direction:column;gap:40px;padding:20px;width:100%}',""]),n.locals={},e.exports=n},365:function(e,t,r){"use strict";r.r(t);var n=r(326),o=r(327),c=r(328),d=r(125),l=r(126),f={components:{AuthSection:n.default,SearchSection:o.default,AddRecipeSection:c.default},data:function(){return{user:null}},mounted:function(){var e=this;Object(l.c)(d.a,(function(t){e.user=t}))}},x=(r(355),r(58)),component=Object(x.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-container"},[t("header",{staticClass:"header"},[t("h1",[e._v("Recipe Web Application")]),e._v(" "),t("AuthSection")],1),e._v(" "),t("main",{staticClass:"main-content"},[e.user?t("SearchSection"):e._e(),e._v(" "),e.user?t("AddRecipeSection"):e._e()],1)])}),[],!1,null,"22c4dbd8",null);t.default=component.exports;installComponents(component,{AuthSection:r(326).default,SearchSection:r(327).default,AddRecipeSection:r(328).default})}}]);