(window.webpackJsonp=window.webpackJsonp||[]).push([[5],[,,,,function(o,n,t){"use strict";var e;function a(o,n,t,a){null!==o&&(o.paused?(n.src=t,o.play(),null!=e&&(window.clearInterval(e),e=null),e=window.setInterval(function(){!function(o,n,t){null!==o&&o.paused&&(n.src=t)}(o,n,a)},10)):(n.src=a,o.pause()))}t.d(n,"a",function(){return a})},function(o,n,t){o.exports=t.p+"images/laba-a4be88ca.png"},function(o,n,t){o.exports=t.p+"images/laba-da365adb.gif"},,,,function(o,n,t){"use strict";(function(o){var n=t(0);"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)?(o("body").attr("style","display: none"),function(){if(sessionStorage.Authorization)o("body").removeAttr("style");else{var t=location.pathname;t=t.substring(0,t.lastIndexOf("/")),Object(n.a)("/wechat/portal/oauth/url",{url:location.protocol+"//"+location.host+t+"/code.html#"+location.pathname+location.search},function(o){window.location.replace(o)},function(o,n){var t=sessionStorage.GetOauthUrlNumber;(t=t?parseInt(t)+1:1)>3?window.stop?window.stop():document.execCommand("Stop"):(sessionStorage.GetOauthUrlNumber=t,window.location.reload())})}}()):(console.log("Not Weixin!"),window.stop?window.stop():document.execCommand("Stop"))}).call(this,t(1))},,,function(o,n){},,,function(o,n,t){"use strict";t.r(n),function(o){t(13),t(12),t(11);var n=t(6),e=t.n(n),a=t(5),i=t.n(a),c=t(4),s=t(0);t(10),o(function(){o("#audio_img").on("click",function(n){Object(c.a)(o("audio")[0],this,e.a,i.a)}),o("#formSubmitBtn").on("click",function(o){Object(s.b)("/postgreeting",'{ "content": "payload", "id": 999 }',function(o){alert(o.body.id)})})})}.call(this,t(1))}],[[16,0,2,1]]]);
//# sourceMappingURL=register-81ab07.bundle.js.map