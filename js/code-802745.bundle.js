(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{9:function(o,t,n){"use strict";n.r(t),function(o){var t=n(0),e=function(){var o=location.search;o||(o=(o=location.hash).substr(o.indexOf("?")));for(var t=o.substr(1),n={},e=t.length?t.split("&"):[],a=null,s=e.length,i=0;i<s;i++){a=e[i].split("=");var c=decodeURIComponent(a[0]),r=decodeURIComponent(a[1]);c&&(n[c]=r)}return n}();e.code&&Object(t.a)("/wechat/portal/oauth/accesstoken",{code:e.code},function(t){sessionStorage.Authorization=t,delete e.code;var n=location.hash.substr(1);n.indexOf("?")>=0&&(n=n.substring(0,n.indexOf("?"))),n=n+"?"+o.param(e),window.location.replace(n)},function(o,t,n){if(401==o.status){sessionStorage.Authorization=o.responseText;var e=location.pathname;e=e.substring(0,e.lastIndexOf("/"));var a=location.protocol+"//"+location.host+e+"/index.html";window.location.replace(a)}})}.call(this,n(1))}},[[9,0,2,1]]]);
//# sourceMappingURL=code-802745.bundle.js.map