webpackJsonp([7],{ef76:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("7t+N"),a=i.n(e),c=(i("kbK3"),i("6ke6"),i("72FE"),{name:"classic",components:{banner:i("YV7O").a},data:function(){return{list:{list1:"市政环卫项目",list2:"综合物业项目",list3:"环保事业项目",list4:"经典案例"}}},mounted:function(){var t=a()(".main").attr("flag");a()(".menu li").each(function(){var s=a()(this).attr("type");t==s&&(a()(this).addClass("active"),a()(this).siblings().removeClass("active"))});var s=a.a.parseJSON(a()("#jsonData").html()).data,i=Math.ceil(s.length/6);laypage({cont:"pagination",pages:i,groups:3,skin:"#00ac43",jump:function(t){document.getElementById("dataShow").innerHTML=function(t){var i="",e=6*t-1;e=e>=s.length?s.length-1:e;for(var a=6*t-6;a<=e;a++)i+="<li>",i+='<img src="'+s[a].img+'" alt="">',i+='<div class="box">',i+='<p class="time">'+s[a].time+"</p>",i+='<p class="img-title">'+s[a].title+"</p>",i+='<p class="detail">'+s[a].detail+"</p>",i+="</div>",i+="</li>";return i}(t.curr)}})}}),l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"main",attrs:{flag:"classic"}},[s("banner",{attrs:{message:this.list}}),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"classic"},[s("div",{staticClass:"title"},[s("p",{staticClass:"zh-title"},[this._v("市政环卫项目")]),this._v(" "),s("p",{staticClass:"en-title"},[this._v("MUNICIPAL SANITATION")])]),this._v(" "),s("ul",{attrs:{id:"dataShow"}}),this._v(" "),s("div",{staticClass:"hidden",attrs:{id:"jsonData"}},[this._v('\n      { "status": true, "data": [{ "img": "/static/classic-case/business2.jpg", "time": "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business3.jpg", "time": "2017.03.09", "title":\n      "优质的全方位服务为保障", "detail": "玉龙以市场为导向，以客户的满意为出发点，以持续稳健发展为目标，不断创新机制， " }, { "img": "/static/classic-case/business1.jpg", "time": "2017.03.09", "title": "石材是一种非常高贵的天然建材", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img":\n      "/static/classic-case/business4.jpg", "time": "2017.03.09", "title": "清洗石材请选用适合石材专用的清洗剂", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business5.jpg", "time": "2017.03.09", "title": "驻场项目管理专业素质", "detail":\n      "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business6.jpg", "time": "2017.03.09", "title": "驻场项目管理专业素质", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business2.jpg", "time":\n      "2017.03.09", "title": "驻场项目管理专业素质", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business2.jpg", "time": "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img":\n      "/static/classic-case/business3.jpg", "time": "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business4.jpg", "time": "2017.03.09", "title": "道路清洁", "detail":\n      "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business5.jpg", "time": "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business6.jpg", "time":\n      "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business1.jpg", "time": "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img":\n      "/static/classic-case/business4.jpg", "time": "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business5.jpg", "time": "2017.03.09", "title": "道路清洁", "detail":\n      "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business2.jpg", "time": "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business3.jpg", "time":\n      "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }], "msg": "市政环卫项目" }\n    ')]),this._v(" "),s("div",{attrs:{id:"pagination"}})])}]},n=i("VU/8")(c,l,!1,null,null,null);s.default=n.exports},kbK3:function(t,s){}});
//# sourceMappingURL=7.d74bc6fc65cbfe654144.js.map