<template>
  <div flag="classic" class="main">
    <banner v-bind:message="list"></banner>
    <div class="classic">
      <div class="title">
        <p class="zh-title">市政环卫项目</p>
        <p class="en-title">MUNICIPAL&nbsp;SANITATION</p>
      </div>
      <!-- 数据展示 -->
      <ul id="dataShow"></ul>
      <!-- json数据 -->
      <div id="jsonData" class="hidden">
        { "status": true, "data": [{ "img": "/static/classic-case/business2.jpg", "time": "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business3.jpg", "time": "2017.03.09", "title":
        "优质的全方位服务为保障", "detail": "玉龙以市场为导向，以客户的满意为出发点，以持续稳健发展为目标，不断创新机制， " }, { "img": "/static/classic-case/business1.jpg", "time": "2017.03.09", "title": "石材是一种非常高贵的天然建材", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img":
        "/static/classic-case/business4.jpg", "time": "2017.03.09", "title": "清洗石材请选用适合石材专用的清洗剂", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business5.jpg", "time": "2017.03.09", "title": "驻场项目管理专业素质", "detail":
        "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business6.jpg", "time": "2017.03.09", "title": "驻场项目管理专业素质", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business2.jpg", "time":
        "2017.03.09", "title": "驻场项目管理专业素质", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business2.jpg", "time": "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img":
        "/static/classic-case/business3.jpg", "time": "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business4.jpg", "time": "2017.03.09", "title": "道路清洁", "detail":
        "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business5.jpg", "time": "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business6.jpg", "time":
        "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business1.jpg", "time": "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img":
        "/static/classic-case/business4.jpg", "time": "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business5.jpg", "time": "2017.03.09", "title": "道路清洁", "detail":
        "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business2.jpg", "time": "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }, { "img": "/static/classic-case/business3.jpg", "time":
        "2017.03.09", "title": "道路清洁", "detail": "一方面加强员工的定期培训工作，不断提高员工的工作技能，尤其是服务意识的提升、" }], "msg": "市政环卫项目" }
      </div>
      <!-- 分页按钮 -->
      <div id="pagination"></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import '../assets/css/classic-case.css'
import '../dep/laypage/laypage.css'
import "../dep/laypage/laypage.js"
import banner from './banner'
export default {
  name: 'classic',
  components: {
    banner
  },
  data() {
    return {
      list:{
        list1:"市政环卫项目",
        list2:"综合物业项目",
        list3:"环保事业项目",
        list4:"经典案例"
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
    var nums = 6; //每页出现的数量
    var pages = Math.ceil(data.length / nums); //得到总页数
    var thisDate = function (curr) {
      var str = '',
        last = curr * nums - 1;
      last = last >= data.length
        ? (data.length - 1)
        : last;
      for (var i = (curr * nums - nums); i <= last; i++) {
        str += '<li>';
        str += '<img src="' + data[i].img + '" alt="">';
        str += '<div class="box">';
        str += '<p class="time">' + data[i].time + '</p>';
        str += '<p class="img-title">' + data[i].title + '</p>';
        str += '<p class="detail">' + data[i].detail + '</p>';
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
        document.getElementById('dataShow').innerHTML = thisDate(obj.curr);
      }
    })
  }
}
</script>
