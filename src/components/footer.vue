<template>
  <div>
    <footer>
      <div class="footer-top middle">
        <div class="box">
          <i class="icon icon-phone"></i>
          <span class="phone">07555-82400160</span>
        </div>
      </div>
      <div class="footer-main middle">
        <ul class="footer-main-list">
          <li>
            <router-link to="/index/about"">关于玉龙</router-link>
            <a href="javascript:void(0);">组织架构</a>
            <a href="javascript:void(0);">成长足迹</a>
            <a href="javascript:void(0);">资质荣誉</a>
          </li>
          <li>
            <router-link to="/index/business">业务范围</router-link>
            <a href="javascript:void(0);">市政环卫</a>
            <a href="javascript:void(0);">综合业务</a>
            <a href="javascript:void(0);">环保事业</a>
          </li>
          <li>
            <router-link to="/index/classic">经典案例</router-link>
            <a href="javascript:void(0);">市政环卫项目</a>
            <a href="javascript:void(0);">综合业务项目</a>
            <a href="javascript:void(0);">环保事业项目</a>
          </li>
          <li>
            <router-link to="/index/corporate">企业文化</router-link>
            <a href="javascript:void(0);">员工培训</a>
            <a href="javascript:void(0);">员工风采</a>
            <a href="javascript:void(0);">员工心声</a>
          </li>
          <li>
            <router-link to="/index/news">新闻中心</router-link>
            <a href="javascript:void(0);">企业新闻</a>
            <a href="javascript:void(0);">企业公告</a>
            <a href="javascript:void(0);">行业资讯</a>
          </li>
          <li>
            <router-link to="/index/recruit">招贤纳士</router-link>
            <a href="javascript:void(0);">人才理念</a>
            <a href="javascript:void(0);">招聘信息</a>
            <a href="javascript:void(0);">简历投递</a>
          </li>
          <li>
            <router-link to="/index/cooperation">业务合作</router-link>
            <a href="javascript:void(0);">联系方式</a>
            <a href="javascript:void(0);">相关链接</a>
          </li>
          <li class="qrcode">
            <img src="../assets/img/code.png">
            <p>微信扫一扫&nbsp;关注一下</p>
          </li>
        </ul>
        <ul class="footer-main-list1">
          <li>
            <div class="footer-main-title">
              <router-link class="title" to="/index/about">关于玉龙</router-link>
              <i class="icon icon-shu"></i>
              <i class="icon icon-heng"></i>
            </div>
            <div class="footer-desc">
              <a href="javascript:void(0);">组织架构</a>
              <a href="javascript:void(0);">成长足迹</a>
              <a href="javascript:void(0);">资质荣誉</a>
            </div>
          </li>
          <li>
            <div class="footer-main-title">
              <router-link class="title" to="/index/business">业务范围</router-link>
              <i class="icon icon-shu"></i>
              <i class="icon icon-heng"></i>
            </div>
            <div class="footer-desc">
              <a href="javascript:void(0);">市政环卫</a>
              <a href="javascript:void(0);">综合业务</a>
              <a href="javascript:void(0);">环保事业</a>
            </div>
          </li>
          <li>
            <div class="footer-main-title">
              <router-link class="title" to="/index/classic">经典案例</router-link>
              <i class="icon icon-shu"></i>
              <i class="icon icon-heng"></i>
            </div>
            <div class="footer-desc">
              <a href="javascript:void(0);">市政环卫项目</a>
              <a href="javascript:void(0);">综合业务项目</a>
              <a href="javascript:void(0);">环保事业项目</a>
            </div>
          </li>
          <li>
            <div class="footer-main-title">
              <router-link class="title" to="/index/corporate">企业文化</router-link>
              <i class="icon icon-shu"></i>
              <i class="icon icon-heng"></i>
            </div>
            <div class="footer-desc">
              <a href="javascript:void(0);">员工培训</a>
              <a href="javascript:void(0);">员工风采</a>
              <a href="javascript:void(0);">员工心声</a>
            </div>
          </li>
          <li>
            <div class="footer-main-title">
              <router-link class="title" to="/index/news">新闻中心</router-link>
              <i class="icon icon-shu"></i>
              <i class="icon icon-heng"></i>
            </div>
            <div class="footer-desc">
              <a href="javascript:void(0);">企业新闻</a>
              <a href="javascript:void(0);">企业公告</a>
              <a href="javascript:void(0);">行业资讯</a>
            </div>
          </li>
          <li>
            <div class="footer-main-title">
              <router-link class="title" to="/index/recruit">招贤纳士</router-link>
              <i class="icon icon-shu"></i>
              <i class="icon icon-heng"></i>
            </div>
            <div class="footer-desc">
              <a href="javascript:void(0);">人才理念</a>
              <a href="javascript:void(0);">招聘信息</a>
              <a href="javascript:void(0);">简历投递</a>
            </div>
          </li>
          <li>
            <div class="footer-main-title">
              <router-link class="title" to="/index/cooperation">业务合作</router-link>
              <i class="icon icon-shu"></i>
              <i class="icon icon-heng"></i>
            </div>
            <div class="footer-desc">
              <a href="javascript:void(0);">联系方式</a>
              <a href="javascript:void(0);">相关链接</a>
            </div>
          </li>
          <li>
            <div class="footer-main-title">
              <router-link to="/index/weixin">
                <i class="icon icon-weixin"></i>
                <span class="title">关注企业</span>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer-bottom bg-green color-white">
        <div class="middle">
          <p class="fl">
            深圳市玉龙环保产业有限公司&nbsp;版权所有&nbsp;[后台管理]&nbsp;粤ICP备123456号
          </p>
          <div class="to-top">
            <span>TOP</span>
            <i class="icon icon-arrow"></i>
          </div>
        </div>
      </div>
    </footer>
    <div id="overflow"></div>
    <div id="overflow-box">
      <i class="icon icon-close"></i>
      <div class="overflow-box">
        <input type="text" placeholder="Search">
        <i class="icon icon-search-n"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
