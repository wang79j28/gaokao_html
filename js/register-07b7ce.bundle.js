(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{17:function(n,o,a){"use strict";a.r(o),function(n){a(4),a(3);var o=a(1),i=a.n(o),c=a(8),e=a.n(c),r=a(7),t=a.n(r),u=a(6),f=a(0);a(10),n(function(){n("#audio_img").on("click",function(o){Object(u.a)(n("audio")[0],this,e.a,t.a)}),n("#formSubmitBtn").on("click",function(o){i.a.form.validate("#reg_form",function(o){if(!o){i.a.loading("提交中...");var a=n("#userName").val(),c=n("#userSchool").val(),e={userName:a,mobile:n("#userPhone").val(),mschName:c};Object(f.d)("/user",JSON.stringify(e),function(n){var o=Object(f.b)("/pay.html");window.location.replace(o)})}})}),i.a.form.checkIfBlur("#reg_form")})}.call(this,a(2))}},[[17,0,2,1]]]);
//# sourceMappingURL=register-07b7ce.bundle.js.map