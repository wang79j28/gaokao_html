(window.webpackJsonp=window.webpackJsonp||[]).push([[4],[,,,,function(n,o,t){"use strict";(function(n){t.d(o,"a",function(){return i});var e=t(0);function i(){"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)?(n("body").attr("style","display: none"),function(){if(sessionStorage.Authorization)n("body").removeAttr("style");else{var o=location.pathname;o=o.substring(0,o.lastIndexOf("/")),Object(e.httpGet)("/wechat/portal/oauth/url",{url:location.protocol+"//"+location.host+o+"/code.html#"+location.pathname+location.search},function(n){window.location.replace(n)},function(n,o){var t=sessionStorage.GetOauthUrlNumber;(t=t?parseInt(t)+1:1)>3?window.stop?window.stop():document.execCommand("Stop"):(sessionStorage.GetOauthUrlNumber=t,window.location.reload())})}}()):(console.log("Not Weixin!"),window.stop?window.stop():document.execCommand("Stop"))}}).call(this,t(1))},function(n,o,t){"use strict";var e;function i(n,o,t,i){null!==n&&(n.paused?(o.src=t,n.play(),null!=e&&(window.clearInterval(e),e=null),e=window.setInterval(function(){!function(n,o,t){null!==n&&n.paused&&(o.src=t)}(n,o,i)},10)):(o.src=i,n.pause()))}t.d(o,"a",function(){return i})},function(n,o,t){n.exports=t.p+"images/laba-a4be88ca.png"},function(n,o,t){n.exports=t.p+"images/laba-da365adb.gif"},,,,,function(n,o){},,,function(n,o,t){"use strict";t.r(o),function(n){t(12),t(11),t(10);var o=t(7),e=t.n(o),i=t(6),a=t.n(i),c=t(5),s=t(0),r=t(4);Object(r.a)(),n(function(){n("#audio_img").on("click",function(o){Object(c.a)(n("audio")[0],this,e.a,a.a)}),n("#formSubmitBtn").on("click",function(n){Object(s.b)("/postgreeting",'{ "content": "payload", "id": 999 }',function(n){alert(n.body.id)})})})}.call(this,t(1))}],[[15,0,2,1]]]);
//# sourceMappingURL=register-c6e18e.bundle.js.map