<template>
  <div flag="corporate" class="main">
    <banner v-bind:message="list"></banner>
    <div class="corporate-culture">
      <div class="title">
        <p class="zh-title">员工风采</p>
        <p class="en-title">STAFF&nbsp;MIEN</p>
      </div>
    </div>
    <ul class="corporate-culture1">
      <li>
        <img src="../assets/img/corporate-culture/culture.jpg" alt="">
        <p class="img-title">道路清洁</p>
      </li>
      <li>
        <img src="../assets/img/corporate-culture/culture2.jpg" alt="">
        <p class="img-title">垃圾清运及公厕</p>
      </li>
      <li>
        <img src="../assets/img/corporate-culture/culture3.jpg" alt="">
        <p class="img-title">污水处理及其再生利用</p>
      </li>
      <li>
        <img src="../assets/img/corporate-culture/culture4.jpg" alt="">
        <p class="img-title">城市绿化造景</p>
      </li>
    </ul>
  </div>
</template>

<script>
import banner from './banner'
export default {
  name: 'corporate',
  components: {
    banner
  },
  data() {
    return {
      list:{
        list1:"员工培训",
        list2:"员工风采",
        list3:"员工心声",
        list4:"企业文化"
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
  @import '../assets/css/corporate-culture.css'
</style>
