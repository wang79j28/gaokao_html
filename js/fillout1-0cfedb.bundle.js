(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{12:function(e,t,n){"use strict";n.r(t),function(e){n(4),n(3);var t=n(1),a=n.n(t),i=(n(8),n(7),n(6),n(0));n(5),sessionStorage.Authorization="eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJvSU9xczBkNldTXzYtLTQxczhoYjlXMS1jaTZFIiwiaWF0IjoxODI2NTc4MDExNzYzLCJzdWIiOiI5X2FhQW1pT3FxY0R5SDBVd0loOXZCc3RadnNiZG5LaExoN3YxX0RvcXY4cHhneDFDUFpoUFNNdHJ6QU1xUnp4LWJtYmR4OGVpLTJHVlppOHRuRjlGZ21KZVhIYTJWVURiNU5DT3FlSGNqT000IiwiaXNzIjoiZ2Fva2FvenkifQ.zUkbaj36tNIhtto1ihHkwpOMU6VUs7_S61Sr1-WpHJ7bDEqqUPRqytmEWi21rmbaCtnSSMGE-OBpzLbHlZay_g";var o=[],l=[];function c(t,n){e("."+t).each(function(t){e(this).on("click",function(t){var a,i;e(this).hasClass("area-btn")?(console.log("area btn!!!!!"),function(e,t,n,a){var i=function(e,t){for(let t=0;t<o.length;t++){if(o[t].value==e)return t}return-1}(e);i>-1?o[i].children.push({label:a,value:n}):o.push({label:t,value:e,children:[{label:a,value:n}]})}(e(this).attr("pid"),e(this).attr("pname"),e(this).attr("cid"),e(this).attr("cname"))):e(this).hasClass("professional-btn")&&(console.log("professional btn!!!!!"),a=e(this).attr("cid"),i=e(this).attr("cname"),l.push({label:i,onClick:function(){m(a,i)}})),e(this).closest("div").remove(),n()})})}function s(){e("#area_number").text(e(".select-area-item").size()-2)}function r(){e("#professional_number").text(e(".select-professional-item").size()-2)}function f(t,n,a,i,l,s){var r=e("#"+n).html();if(l.forEach(function(e,t,n){r=r.replace(new RegExp(t,"igm"),e)}),e("."+i).last().after(r),c(l.get("#class"),s),"professional"==t)e("."+l.get("#class")).attr({cid:l.get("#id"),cname:l.get("#name")});else if("area"==t){var f=l.get("#pid"),p=l.get("#cid"),m=l.get("#cname"),d=l.get("#pname");e("."+l.get("#class")).attr({pid:f,cid:p,cname:m,pname:d}),function(e,t,n,a){for(let t=0;t<o.length;t++){const a=o[t];if(a.value==e){var i=a.children,l=u(i,n);return l>-1&&i.splice(l,1),void(i.length<1&&o.splice(t,1))}}}(f,0,p)}s()}function u(e,t){for(let n=0;n<e.length;n++)if(e[n].value==t)return n;return-1}function p(t,n){Object(i.c)("/common",{typeId:t},function(t){t.body&&t.body.typeVals&&t.body.typeVals.forEach(function(t,a,i){e("<option />",{text:t.valVal,value:t.valId}).appendTo(n)})},function(e,t){})}function m(e,t){!function(e,t){var n=new Map;n.set("#name",t),n.set("#class",(new Date).getTime()),n.set("#id",e),f("professional","professional-item-template",0,"select-professional-item",n,r)}(e,t);var n=function(e){for(var t=0;t<l.length;t++)if(l[t].label==e)return t;return-1}(t);n>-1&&l.splice(n,1)}e(function(){c("area-btn",s),c("professional-btn",r),Object(i.c)("/region",null,function(e){e.body&&(o=e.body)},function(e,t){}),Object(i.c)("/common",{typeId:"2003"},function(e){e.body&&e.body.typeVals&&e.body.typeVals.forEach(function(e,t,n){l.push({label:e.valVal,onClick:function(){m(e.valId,e.valVal)}})})},function(e,t){}),e("#area-list").on("click",function(t){e(".select-area-item").size()-2>=6||a.a.picker(o,{className:"custom-classname",container:"body",defaultValue:[1,3],onChange:function(e){console.log(e)},onConfirm:function(e){var t,n,a,i,o;console.log(e),t=e[0].value,n=e[0].label,a=e[1].value,i=e[1].label,(o=new Map).set("#name",n+" "+i),o.set("#pname",n),o.set("#cname",i),o.set("#class",(new Date).getTime()),o.set("#pid",t),o.set("#cid",a),f("area","area-item-template",0,"select-area-item",o,s)},id:"doubleLinePicker"})}),e("#professional-list").on("click",function(t){e(".select-professional-item").size()-2>=6||a.a.actionSheet(l,[{label:"取消",onClick:function(){console.log("取消")}}],{className:"custom-classname",onClose:function(){console.log("关闭")}})}),e("#formSubmitBtn").on("click",function(e){a.a.form.validate("#fillout1-form",function(e){if(!e){var t=a.a.loading("提交中...");setTimeout(function(){t.hide(),a.a.toast("提交成功",3e3),window.location.replace("4.html")},1500)}})}),a.a.form.checkIfBlur("#fillout1-form"),p("2002",e("#sch-kind")),p("2001",e("#batch"))}),self.setInterval(function(){Object(i.c)("/refresh/jwt",null,function(e){},function(e,t){})},1e4)}.call(this,n(2))}},[[12,0,2,1]]]);
//# sourceMappingURL=fillout1-0cfedb.bundle.js.map