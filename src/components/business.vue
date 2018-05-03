<template lang="html">
  <div flag="business" class="main">
    <banner v-bind:message="list"></banner>
    <div class="business">
      <div class="title">
        <p class="zh-title">市政环卫</p>
        <p class="en-title">MUNICIPAL&nbsp;SANITATION</p>
      </div>
      <div class="detial">
        公司致力于市政道路清洁、垃圾清运处理，城市绿化造景园林施工保养，河道清淤保洁，污水处理处置，物业清洁维护，固体废物治理，餐厨垃圾处置，智慧环卫管理等领域的研究与实践，成为全国大型的城市环境管理综合运营服务商
      </div>
      <ul>
        <li>
          <img src="../assets/img/classic-case/business2.jpg" alt="">
          <p class="business-title">道路清洁</p>
        </li>
        <li>
          <img src="../assets/img/classic-case/business1.jpg" alt="">
          <p class="business-title">垃圾清运及公厕</p>
        </li>
        <li>
          <img src="../assets/img/classic-case/business7.png" alt="">
          <p class="business-title">污水处理及其再生利用</p>
        </li>
        <li>
          <img src="../assets/img/classic-case/business8.png" alt="">
          <p class="business-title">城市绿化造景</p>
        </li>
        <li>
          <img src="../assets/img/classic-case/business9.png" alt="">
          <p class="business-title">市政道路清洁</p>
        </li>
        <li>
          <img src="../assets/img/classic-case/business3.jpg" alt="">
          <p class="business-title">智慧环卫管理</p>
        </li>
        <li>
          <img src="../assets/img/classic-case/business10.png" alt="">
          <p class="business-title">道路清洁</p>
        </li>
        <li>
          <img src="../assets/img/classic-case/business6.jpg" alt="">
          <p class="business-title">垃圾清运及公厕</p>
        </li>
        <li>
          <img src="../assets/img/classic-case/business4.jpg" alt="">
          <p class="business-title">污水处理及其再生利用</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import banner from './banner'
export default {
  name: 'business',
  components: {
    banner
  },
  data() {
    return {
      list:{
        list1:"市政环卫",
        list2:"综合业务",
        list3:"环保事业",
        list4:"业务范围"
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
  }
}
</script>

<style scoped lang="css">
  @import '../assets/css/business.css'
</style>
