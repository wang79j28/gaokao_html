(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{12:function(e,n,t){"use strict";t.r(n),function(e){t(4),t(3);var n,a,o=t(1),i=t.n(o),l=(t(9),t(8),t(7),t(0)),c=(t(6),t(5),[]),s=[];function r(n,t){e("."+n).each(function(n){e(this).on("click",function(n){var a,o;e(this).hasClass("area-btn")?(console.log("area btn!!!!!"),function(e,n,t,a){var o=function(e,n){for(let n=0;n<c.length;n++){if(c[n].value==e)return n}return-1}(e);o>-1?c[o].children.push({label:a,value:t}):c.push({label:n,value:e,children:[{label:a,value:t}]})}(e(this).attr("pid"),e(this).attr("pname"),e(this).attr("cid"),e(this).attr("cname"))):e(this).hasClass("professional-btn")&&(console.log("professional btn!!!!!"),a=e(this).attr("cid"),o=e(this).attr("cname"),s.push({label:o,onClick:function(){d(a,o)}})),e(this).closest("div").remove(),t()})})}function n(){e("#area_number").text(e(".select-area-item").size()-2)}function a(){e("#professional_number").text(e(".select-professional-item").size()-2)}function f(){return e(".select-area-item").size()-2}function u(){return e(".select-professional-item").size()-2}function m(n,t,a,o,i,l){var s=e("#"+t).html();if(i.forEach(function(e,n,t){s=s.replace(new RegExp(n,"igm"),e)}),e("."+o).last().after(s),r(i.get("#class"),l),"professional"==n)e("."+i.get("#class")).attr({cid:i.get("#id"),cname:i.get("#name")});else if("area"==n){var f=i.get("#pid"),u=i.get("#cid"),m=i.get("#cname"),h=i.get("#pname");e("."+i.get("#class")).attr({pid:f,cid:u,cname:m,pname:h}),function(e,n,t,a){for(let n=0;n<c.length;n++){const a=c[n];if(a.value==e){var o=a.children,i=p(o,t);return i>-1&&o.splice(i,1),void(o.length<1&&c.splice(n,1))}}}(f,0,u)}l()}function p(e,n){for(let t=0;t<e.length;t++)if(e[t].value==n)return t;return-1}function h(n,t){Object(l.c)("/common",{typeId:n},function(n){n.body&&n.body.typeVals&&n.body.typeVals.forEach(function(n,a,o){e("<option />",{text:n.valVal,value:n.valId}).appendTo(t)})},function(e,n){})}function d(e,n){!function(e,n){var t=new Map;t.set("#name",n),t.set("#class",(new Date).getTime()),t.set("#id",e),m("professional","professional-item-template",0,"select-professional-item",t,a)}(e,n);var t=function(e){for(var n=0;n<s.length;n++)if(s[n].label==e)return n;return-1}(n);t>-1&&s.splice(t,1)}e(function(){r("area-btn",n),r("professional-btn",a),Object(l.c)("/region",null,function(e){e.body&&(c=e.body)},function(e,n){}),Object(l.c)("/common",{typeId:"2003"},function(e){e.body&&e.body.typeVals&&e.body.typeVals.forEach(function(e,n,t){s.push({label:e.valVal,onClick:function(){d(e.valId,e.valVal)}})})},function(e,n){}),e("#area-list").on("click",function(e){f()>=6||i.a.picker(c,{className:"custom-classname",container:"body",defaultValue:[1,3],onChange:function(e){console.log(e)},onConfirm:function(e){var t,a,o,i,l;console.log(e),t=e[0].value,a=e[0].label,o=e[1].value,i=e[1].label,(l=new Map).set("#name",a+" "+i),l.set("#pname",a),l.set("#cname",i),l.set("#class",(new Date).getTime()),l.set("#pid",t),l.set("#cid",o),m("area","area-item-template",0,"select-area-item",l,n)},id:"doubleLinePicker"})}),e("#professional-list").on("click",function(e){u()>=6||i.a.actionSheet(s,[{label:"取消",onClick:function(){console.log("取消")}}],{className:"custom-classname",onClose:function(){console.log("关闭")}})}),e("#formSubmitBtn").on("click",function(n){i.a.form.validate("#fillout1-form",function(n){n||(f()<1?i.a.form.showErrorTips({ele:e("#areas"),msg:"empty"}):u()<1&&i.a.form.showErrorTips({ele:e("#professionals"),msg:"empty"}))})}),i.a.form.checkIfBlur("#fillout1-form"),h("2002",e("#sch-kind")),h("2001",e("#batch"))}),self.setInterval(function(){Object(l.c)("/refresh/jwt",null,function(e){},function(e,n){})},1e4)}.call(this,t(2))}},[[12,0,2,1]]]);
//# sourceMappingURL=fillout1-43ce4e.bundle.js.map