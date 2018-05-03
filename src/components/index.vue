<template lang="html">
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import "../assets/css/index.css"
import "../assets/css/index_response.css"
import Header from './header'
import Footer from './footer'
export default {
  name: 'index',
  components: {
    Header,
    Footer
  },
  mounted(){
    // 返回顶部
    $('.to-top').click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
    });
    //手机端底部点击事件
    $(".footer-main-title").click(function() {
      $(this).siblings(".footer-desc").slideToggle();
      $(this).find("i:eq(0)").toggleClass("display");
    })
    //手机端顶部点击事件
    $(".icon-arrow-t").click(function() {
      $(this).parent().siblings(".menu-desc").slideToggle();
      $(this).toggleClass("flipy");
    })
    $(".icon-menu").click(function() {
      $(".menu-list").slideToggle();
    })
    $(".menu-list li a").click(function() {
      $(".menu-list").slideToggle();
    })
    //手机端顶部搜索事件
    $(".search-menu .icon-search").click(function() {
      $("#overflow,#overflow-box").show();
    })
    $("#overflow-box .icon-close").click(function() {
      $("#overflow,#overflow-box").hide();
    })
  }
}
</script>
