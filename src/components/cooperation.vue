<template>
  <div flag="cooperation" class="main">
    <banner v-bind:message="list"></banner>
    <div class="cooperation1" id="cooperation1" name="cooperation1">
      <div class="title">
        <p class="zh-title">联系我们</p>
        <p class="en-title">CONTACT&nbsp;US</p>
      </div>
      <div>
        <div class="info">
          <p class="info-title">深圳市玉龙环保产业有限公司</p>
          <p>地址：深圳市罗湖区桃园路183号B201室</p>
          <p>电话：0755-82058226</p>
          <p>手机：13602635327</p>
          <p>传真：075</p>
          <p>邮编：310005</p>
          <p>E-mail:yl-0001.@qq.com</p>
        </div>
        <b-map-component></b-map-component>
      </div>
    </div>
    <div class="line"></div>
    <div class="cooperation" id="cooperation2" name="cooperation2">
      <div class="title">
        <p class="zh-title">相关链接</p>
        <p class="en-title">RELATED&nbsp;LINKS</p>
      </div>
      <ul class="cooperation-list">
        <li>
          <a href="javascript:void(0)">
            <img src="../assets/img/cooperation/cooperation.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <img src="../assets/img/cooperation/cooperation1.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <img src="../assets/img/cooperation/cooperation2.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <img src="../assets/img/cooperation/cooperation3.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <img src="../assets/img/cooperation/cooperation4.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <img src="../assets/img/cooperation/cooperation5.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <img src="../assets/img/cooperation/cooperation6.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <img src="../assets/img/cooperation/cooperation7.jpg" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BMapComponent from './map'
import banner from './banner'
export default {
  name: 'cooperation',
  components: {
    banner,
    BMapComponent
  },
  data() {
    return {
      list:{
        list1:"联系我们",
        list2:"相关链接",
        list3:"",
        list4:"业务合作"
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
  @import '../assets/css/cooperation.css'
</style>
