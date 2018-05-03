<template>
<div class="banner">
  <div class="banner-item">
    <p class="item-title">玉龙<span>,</span>让天空更蓝</p>
    <p class="item-tip">城市越洁净,天空越蓝,玉龙环保为城市洁净而努力</p>
  </div>
  <img src="../assets/img/banner.png">
  <div class="bottom-box">
    <div class="title1 bg-green">{{message.list4}}</div>
    <div class="title2 fl">
      <i class="icon icon-location"></i>
      <span class="dx">当前位置</span>
      <span>:</span>
      <span>
        <a href="../index.html">玉龙首页</a>
      </span>
      <span>></span>
      <span>{{message.list4}}</span>
    </div>
    <div class="title3">
      <div class="active1">{{message.list1}}</div>
      <div>{{message.list2}}</div>
      <div>{{message.list3}}</div>
    </div>
  </div>
  <div class="bottom"></div>
</div>
</template>

<script>
export default {
  name: 'banner',
  props: ['message']
}
</script>
