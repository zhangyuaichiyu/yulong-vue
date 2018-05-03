<template>
  <div flag="news" id="news" class="main">
    <banner v-bind:message="list"></banner>
    <div class="news">
      <div class="title">
        <p class="zh-title">企业新闻</p>
        <p class="en-title">CORPORATE&nbsp;NEWS</p>
      </div>
      <!-- 数据展示 -->
      <ul id="news-dataShow" class="new-list"></ul>
      <!-- json数据 -->
      <div id="jsonData" class="hidden">{ "status": true, "data": [{ "img": "/static/news/new.jpg", "time": "2017-05-05", "title": "公司坚持“以质量求生存，以信誉谋发展”的品牌经营理念", "detail":
        "深圳市清洁行业协会甲级资格服务企业，创办于2002年4月12日，注册资金5500万元，主营业务涵盖“市政环卫、物业清洁、园林绿化、深圳市清洁行业协会甲级资格服务企业，创办于2002年4月12日，注册资金5500万元，主营业务涵盖“市政环卫、物业清洁、园林绿化、PCO有害生物防制和垃圾无害化处理”等方面。公司经过了12年的发展，目前已成为具有全国影响力的环境综合管理服务优秀运营商。公司现有员工5000余人，职业管理团队200余人，在全国范围有：浙江分公司、南昌分公、郑州分公司、合肥分公司、重庆分公司、南宁分公司等几大区域。"
        }, { "img": "/static/news/new2.jpg", "time": "2017-05-05", "title": "清洁行业要闻：伪造或使用高空作业证等特种作业证罚万元", "detail":
        "2010年7月1日起，如有企业伪造“蜘蛛人”等特种作业人员的上岗证，或使用伪证让没有特种作业资质的人员“蒙混”上岗，将被处不低于1万、最高3万的罚款。国家安监总局昨天公布经审议通过的《特种作业人员安全技术培训考核管理规定》，将于7月1日起施行。特种作业人员涵盖电工、焊工、高处作业人员即“蜘蛛人”、制冷与空调作业人员等。规定明确“持证上岗”，即取得“特种作业操作证”后，方可上岗作业。" }, { "img": "/static/news/new3.jpg", "time":
        "2017-05-05", "title": "关于发布我市清洁行业2010年最低收费标准的通知", "detail": "我市2010年最低工资标准日前已公布，并将于7月1日起开始实施。为应对行业用工成本提高及物价通胀给行业造成的冲击，维护行业的整体利益，经研究，现将我市清洁行业2010年最低收费标准调整为：1760元/人•月（不含垃圾清运）。 最低收费标准是各会员单位与客户单位洽谈业务时的报价底线，低于最低收费标准报价即为低于成本报价，可视为恶性竞争，请各会员单位共同遵照执行。" }, {
        "img": "/static/news/new.jpg", "time": "2017-05-05", "title": "公司坚持“以质量求生存，以信誉谋发展”的品牌经营理念4", "detail":
        "深圳市清洁行业协会甲级资格服务企业，创办于2002年4月12日，注册资金5500万元，主营业务涵盖“市政环卫、物业清洁、园林绿化、深圳市清洁行业协会甲级资格服务企业，创办于2002年4月12日，注册资金5500万元，主营业务涵盖“市政环卫、物业清洁、园林绿化、PCO有害生物防制和垃圾无害化处理”等方面。公司经过了12年的发展，目前已成为具有全国影响力的环境综合管理服务优秀运营商。公司现有员工5000余人，职业管理团队200余人，在全国范围有：浙江分公司、南昌分公、郑州分公司、合肥分公司、重庆分公司、南宁分公司等几大区域。"
        }, { "img": "/static/news/new2.jpg", "time": "2017-05-05", "title": "清洁行业要闻：伪造或使用高空作业证等特种作业证罚万元", "detail":
        "2010年7月1日起，如有企业伪造“蜘蛛人”等特种作业人员的上岗证，或使用伪证让没有特种作业资质的人员“蒙混”上岗，将被处不低于1万、最高3万的罚款。国家安监总局昨天公布经审议通过的《特种作业人员安全技术培训考核管理规定》，将于7月1日起施行。特种作业人员涵盖电工、焊工、高处作业人员即“蜘蛛人”、制冷与空调作业人员等。规定明确“持证上岗”，即取得“特种作业操作证”后，方可上岗作业。" }] }</div>
      <!-- 分页 -->
      <div id="pagination"></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import "../assets/css/news.css"
import "../dep/laypage/laypage.css"
import "../dep/laypage/laypage.js"
import banner from './banner'
export default {
  name: 'news',
  components: {
    banner
  },
  data() {
    return {
      list:{
        list1:"企业新闻",
        list2:"企业公告",
        list3:"企业资讯",
        list4:"新闻中心"
      }
    }
  },
  mounted(){
    var flag = $(".main").attr("flag");
    $(".menu li").each(function() {
      var type = $(this).attr("type");
      if (flag == type) {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
      }
    })

  var jsonData = $.parseJSON($('#jsonData').html());
  var data = jsonData.data;
  var nums = 3; //每页出现的数量
  var pages = Math.ceil(data.length / nums); //得到总页数
  var thisDate = function (curr) {
    var str = '',
      last = curr * nums - 1;
    last = last >= data.length
      ? (data.length - 1)
      : last;
    for (var i = (curr * nums - nums); i <= last; i++) {
      console.log(i)
      str += '<li>';
      str += '<img src="' + data[i].img + '" alt="" class="img-new">';
      str += '<div class="content">';
      str += '<p class="title7">' + data[i].title + '</p>';
      var n=data[i].detail.substr(0,150);
          n+="...";
      str += '<p class="detile">' + n + '</p>';
      str += '<p class="time">' + data[i].time + '</p>';
      str += '<a href="#/index/details/'+i+'" class="more">MORE></a>';
      str += '</div>';
      str += '</li>';
    }
    return str;
  };
  //调用分页
  laypage({
    cont: 'pagination',
    pages: pages,
    groups: 3,
    skin: '#00ac43',
    jump: function (obj) {
      document.getElementById('news-dataShow').innerHTML = thisDate(obj.curr);
    }
  })
  }
}
</script>
