(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{12:function(t,o,i){"use strict";i.r(o),function(t){i(3);var o=i(1),e=i.n(o),n=(i(4),i(7),i(0));i(6),i(5),window.doReady=function(){t(".weui-navbar__item").each(function(o){console.log("%d is: %o",o,this),t(this).on("click",function(o){t(".weui-navbar__item").each(function(o){t(this).removeClass("weui-bar__item_on"),t("."+t(this).attr("id")).attr("style","display:none")}),t(this).addClass("weui-bar__item_on"),t("."+t(this).attr("id")).removeAttr("style")})});var o=Object(n.a)(),i=o.fillId,a=o.schId,l=o.schedId,s=o.schName;t("#school-name").text(s),function(t,o){Object(n.c)("/school/professional",{schId:t,fillId:o},function(t){t.body&&(t.body.sprintList.forEach(function(t,o,i){c("sprint-item-template","sprint-item",t,10)}),t.body.rationalList.forEach(function(t,o,i){c("rational-item-template","rational-item",t,11)}),t.body.endList.forEach(function(t,o,i){c("end-item-template","end-item",t,12)}))},function(t,o){setTimeout(function(){window.location.reload()},5e3)})}(a,i),t("#formSubmitBtn").on("click",function(t){var o=e.a.loading("提交中..."),c=r("sprint-checkbox"),s=r("rational-checkbox"),d=r("end-checkbox"),p=c.concat(s).concat(d);Object(n.d)("/fill/professional/"+i+"/"+l+"/"+a,JSON.stringify(p),function(t){o.hide(),window.location.replace("fillschoollist.html?fillId="+i)},function(t,o,i){401==t.status&&window.location.replace("pay.html")})})};var a=0;function c(o,i,e,n){var c=t("#"+o).html(),r=a++;c=(c=c.replace(new RegExp("#id","igm"),r)).replace(new RegExp("#name","igm"),e.proName),t("."+i).last().after(c),t("#"+r).attr({proId:e.proId,proName:e.proName,selType:n})}function r(o){var i=[];return t("."+o).forEach(function(o,e,n){if(t(o).prop("checked")){var a=t(o).attr("proId"),c=t(o).attr("proName"),r=t(o).attr("selType"),l=t(o).attr("id"),s=t("#s"+l).prop("checked")?"1":"0";null!=a&&null!=c&&i.push({adjust:s,proId:a,proName:c,selType:r})}}),i}}.call(this,i(2))}},[[12,0,2,1]]]);
//# sourceMappingURL=fillprofessionallist-554a72.bundle.js.map