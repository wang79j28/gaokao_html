(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{16:function(n,o,i){"use strict";i.r(o),function(n){i(4),i(3);var o=i(1),t=i.n(o),e=i(0);i(6),i(5),window.doReady=function(){n("#formSubmitBtn").on("click",function(n){var o=t.a.loading("提交中...");setTimeout(function(){o.hide(function(){console.log("`loading` has been hidden")}),Object(e.d)("/pay",null,function(n){if(n.body&&n.body.fillCount){var o=n.body.fillCount;sessionStorage.FillCount=o;var i=Object(e.b)("/success.html?timestamp="+(new Date).getTime());window.location.replace(i)}})},666)})}}.call(this,i(2))}},[[16,0,2,1]]]);
//# sourceMappingURL=pay-272bde.bundle.js.map