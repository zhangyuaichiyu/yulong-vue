<template>
  <div>
    <header>
      <div class="middle">
        <div class="top">
          <img src="../assets/img/logo.png" class="logo" alt="">
          <img src="../assets/img/title.png" class="img-title" alt="">
          <div class="search fr">
            <i class="icon icon-search"></i>
            <input type="text" placeholder="请输入关键字">
          </div>
        </div>
        <div class="search-menu">
          <i class="icon icon-search"></i>
          <span class="index-line"></span>
          <i class="icon icon-menu"></i>
        </div>
        <ul class="menu-list bg-green">
          <li>
            <div class="menu-list-title">
              <router-link to="/">首页</router-link>
              <i class="icon icon-arrow-t"></i>
            </div>
          </li>
          <li>
            <div class="menu-list-title">
              <router-link to="/index/about">关于玉龙</router-link>
              <i class="icon icon-arrow-t"></i>
            </div>
            <div class="menu-desc">
              <a href="view/about-us.html">公司介绍</a>
              <a href="view/about-us.html">成长足迹</a>
              <a href="view/about-us.html">资质荣誉</a>
            </div>
          </li>
          <li>
            <div class="menu-list-title">
              <router-link to="/index/business">业务范围</router-link>
              <i class="icon icon-arrow-t"></i>
            </div>
            <div class="menu-desc">
              <a href="view/business.html">市政环卫</a>
              <a href="view/business.html">综合物业</a>
              <a href="view/business.html">环保事业</a>
            </div>
          </li>
          <li>
            <div class="menu-list-title">
              <router-link to="/index/classic">经典案例</router-link>
              <i class="icon icon-arrow-t"></i>
            </div>
            <div class="menu-desc">
              <a href="view/classic-case.html">市政环卫项目</a>
              <a href="view/classic-case.html">综合物业项目</a>
              <a href="view/classic-case.html">环保事业项目</a>
            </div>
          </li>
          <li>
            <div class="menu-list-title">
              <router-link to="/index/corporate">企业文化</router-link>
              <i class="icon icon-arrow-t"></i>
            </div>
            <div class="menu-desc">
              <a href="view/corporate-culture.html">员工培训</a>
              <a href="view/corporate-culture.html">员工风采</a>
              <a href="view/corporate-culture.html">员工心声</a>
            </div>
          </li>
          <li>
            <div class="menu-list-title">
              <router-link to="/index/news">新闻中心</router-link>
              <i class="icon icon-arrow-t"></i>
            </div>
            <div class="menu-desc">
              <a href="view/news.html">企业新闻</a>
              <a href="view/news.html">企业公告</a>
              <a href="view/news.html">企业资讯</a>
            </div>
          </li>
          <li>
            <div class="menu-list-title">
              <router-link to="/index/recruit">招贤纳士</router-link>
              <i class="icon icon-arrow-t"></i>
            </div>
            <div class="menu-desc">
              <a href="view/recruit.html">人才理念</a>
              <a href="view/recruit.html">招聘信息</a>
              <a href="view/recruit.html">简历投递</a>
            </div>
          </li>
          <li>
            <div class="menu-list-title">
              <router-link to="/index/cooperation">业务合作</router-link>
              <i class="icon icon-arrow-t"></i>
            </div>
            <div class="menu-desc">
              <a href="view/cooperation.html">联系我们</a>
              <a href="view/cooperation.html">相关链接</a>
            </div>
          </li>
        </ul>
        <ul class="menu">
          <li type="index" class="active">
            <router-link to="/index/home">首页</router-link>
          </li>
          <li type="about">
            <router-link to="/index/about">关于玉龙</router-link>
          </li>
          <li type="business">
            <router-link to="/index/business">业务范围</router-link>
          </li>
          <li type="classic">
            <router-link to="/index/classic">经典案例</router-link>
          </li>
          <li type="corporate">
            <router-link to="/index/corporate">企业文化</router-link>
          </li>
          <li type="news">
            <router-link to="/index/news">新闻中心</router-link>
          </li>
          <li type="recruit">
            <router-link to="/index/recruit">招贤纳士</router-link>
          </li>
          <li type="cooperation">
            <router-link to="/index/cooperation">业务合作</router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css">
  @import '../assets/css/base.css'
  @import '../assets/css/public.css'
  @import '../assets/css/public_response.css'
</style>
