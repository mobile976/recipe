(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{323:function(t,e,o){var content=o(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(124).default)("a59ee5ce",content,!0,{sourceMap:!1})},326:function(t,e,o){"use strict";o.r(e);var n=o(10),r=(o(44),o(125)),c=o(126),l={data:function(){return{user:null}},mounted:function(){var t=this;Object(c.c)(r.a,(function(e){t.user=e}))},methods:{loginWithFacebook:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.d)(r.a,r.d);case 3:o=e.sent,t.user=o.user,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),"auth/popup-closed-by-user"===e.t0.code?console.log("User closed the popup before completing the login."):console.error("Facebook login failed:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.e)(r.a);case 3:t.user=null,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("Logout failed:",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}},d=(o(329),o(58)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth-section",attrs:{id:"auth-section"}},[t.user?t._e():e("button",{staticClass:"auth-section button",on:{click:t.loginWithFacebook}},[t._v("Login with Facebook")]),t._v(" "),t.user?e("button",{staticClass:"auth-section button",on:{click:t.logout}},[t._v("Logout")]):t._e(),t._v(" "),t.user?e("span",[t._v("Logged in as: "+t._s(t.user.displayName))]):t._e()])}),[],!1,null,"6dc14710",null);e.default=component.exports},329:function(t,e,o){"use strict";o(323)},330:function(t,e,o){var n=o(123)((function(i){return i[1]}));n.push([t.i,".auth-section span[data-v-6dc14710]{font-weight:700}.auth-section button[data-v-6dc14710]{background-color:#007bff;border:none;border-radius:8px;color:#fff;cursor:pointer;font-size:16px;margin-top:15px;max-width:400px;padding:12px 16px;transition:background-color .3s ease;width:100%}.auth-section button[data-v-6dc14710]:hover{color:#0056b3}",""]),n.locals={},t.exports=n}}]);