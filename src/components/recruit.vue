<template>
  <div flag="recruit" class="main">
    <banner v-bind:message="list"></banner>
    <div class="recruit">
      <div class="title">
        <p class="zh-title">招聘信息</p>
        <p class="en-title">JOB&nbsp;OFFERS</p>
      </div>
      <div class="job-box">
        <select name="" id="job">
          <option value="">职位类别</option>
          <option value="">职业1</option>
          <option value="">职业2</option>
        </select>
        <input type="text" placeholder="请输入关键字" class="input"/>
        <div class="search1">搜索</div>
      </div>
      <ul class="recruit-list">
        <li>
          <div class="post">招聘岗位</div>
          <div class="department">招聘部门</div>
          <div class="time" v="v">发布时间</div>
        </li>
        <li>
          <div class="post">招聘财务房型管理人员</div>
          <div class="department">财务部门</div>
          <div class="time">2018-02-28</div>
        </li>
        <li>
          <div class="post">招聘财务房型管理人员</div>
          <div class="department">财务部门</div>
          <div class="time">2018-02-28</div>
        </li>
        <li>
          <div class="post">招聘财务房型管理人员</div>
          <div class="department">财务部门</div>
          <div class="time">2018-02-28</div>
        </li>
        <li>
          <div class="post">招聘财务房型管理人员</div>
          <div class="department">财务部门</div>
          <div class="time">2018-02-28</div>
        </li>
        <li>
          <div class="post">招聘财务房型管理人员</div>
          <div class="department">财务部门</div>
          <div class="time">2018-02-28</div>
        </li>
        <li>
          <div class="post">招聘财务房型管理人员</div>
          <div class="department">财务部门</div>
          <div class="time">2018-02-28</div>
        </li>
        <li>
          <div class="post">招聘财务房型管理人员</div>
          <div class="department">财务部门</div>
          <div class="time">2018-02-28</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import banner from './banner'
export default {
  name: 'recruit',
  components: {
    banner
  },
  data() {
    return {
      list:{
        list1:"人才理念",
        list2:"招聘信息",
        list3:"简历投递",
        list4:"招贤纳士"
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
  @import '../assets/css/recruit.css'
</style>
