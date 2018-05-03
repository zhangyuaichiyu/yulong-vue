<template>
  <div flag="index" class="main">
    <div id="a" style="width:100px;height:100px;background-color:#000;color:#fff;display:none">1</div>
    <div class="banner-home">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="../assets/img/banner.png"/>
          <div class="banner-item">
            <p class="item-title">玉龙<span>,</span>让天空更蓝</p>
            <p class="item-tip">城市越洁净,天空越蓝,玉龙环保为城市洁净而努力</p>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/img/banner.png"/>
          <div class="banner-item">
            <p class="item-title">玉龙<span>,</span>让天空更蓝</p>
            <p class="item-tip">城市越洁净,天空越蓝,玉龙环保为城市洁净而努力</p>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/img/banner.png"/>
          <div class="banner-item">
            <p class="item-title">玉龙<span>,</span>让天空更蓝</p>
            <p class="item-tip">城市越洁净,天空越蓝,玉龙环保为城市洁净而努力</p>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 业务范围开始 -->
    <div class="business-scope section">
      <div class="middle">
        <div class="section-header">
          <h1 class="header-title">业务范围</h1>
          <p class="header-desc">经营范围是指国家允许企业生产和经营的商品类别</p>
          <div class="line-bar">
            <i class="bar"></i>
            <i class="icon-home"></i>
            <i class="bar"></i>
          </div>
        </div>
        <div class="section-main">
          <ul>
            <li>
              <div class="rect">
                <img src="../assets/img/index/business-bg1.png" class="item-img" alt="">
                <img src="../assets/img/index/business-icon1.png" class="item-middle business-icon1" alt="">
              </div>
              <h1 class="index-title">市政环卫</h1>
              <p class="line"></p>
              <p class="desc">市政道路清扫保洁，生活垃圾收集清运转运站及公厕管理，河道江滩清淤保洁，四害生物 消杀防制，城乡环卫数字化管理， 城乡环卫PPP项目</p>
            </li>
            <li>
              <div class="rect">
                <img src="../assets/img/index/business-bg2.png" class="item-img" alt="">
                <img src="../assets/img/index/business-icon2.png" class="item-middle  business-icon2" alt="">
              </div>
              <h1 class="index-title">综合物业</h1>
              <p class="line"></p>
              <p class="desc">写字楼、商贸广场、住宅小区、交通枢纽、工厂等物业的开荒、保洁、石材护理、四害消杀绿化养护、外墙清洗、地毯清洗等作业服务</p>
            </li>
            <li>
              <div class="rect">
                <img src="../assets/img/index/business-bg3.png" class="item-img" alt="">
                <img src="../assets/img/index/business-icon3.png" class="item-middle  business-icon3" alt="">
              </div>
              <h1 class="index-title">环保事业</h1>
              <p class="line"></p>
              <p class="desc">固废垃圾处理服务，化粪池无害化处理，餐厨垃圾无害化处理，市政工程施工养护，环保工程施工养护，垃圾分类宣传推 广及运营管理服务。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 业务范围结束 -->
    <!-- 综合实力开始 -->
    <div class="c-example section">
      <div class="middle">
        <div class="section-header">
          <h1 class="header-title">综合实力</h1>
          <p class="header-desc">倾力为广大客户提供专业、规范、高效、绿色的环境服务</p>
          <div class="line-bar">
            <i class="bar"></i>
            <i class="icon-home"></i>
            <i class="bar"></i>
          </div>
        </div>
        <div class="section-main">
          <ul>
            <li>
              <img src="../assets/img/index/c-example1.png" class="item-img" alt="">
              <div class="desc-box">
                <h1 class="index-title">品牌保障</h1>
                <p class="desc">清洁服务行业百强环境卫生协会一级企业深圳市环卫协会甲级企业</p>
              </div>
            </li>
            <li>
              <img src="../assets/img/index/c-example2.png" class="item-img" alt="">
              <div class="desc-box">
                <h1 class="index-title">服务沉淀</h1>
                <p class="desc">十五年专业清洁服务经验市政清洁服务常年合作单位</p>
              </div>
            </li>
            <li>
              <img src="../assets/img/index/c-example3.png" class="item-img" alt="">
              <div class="desc-box">
                <h1 class="index-title">全国服务</h1>
                <p class="desc">8座城市、50多家分公司、8000名优质员工</p>
              </div>
            </li>
            <li>
              <img src="../assets/img/index/c-example4.png" class="item-img" alt="">
              <div class="desc-box">
                <h1 class="index-title">专业设备</h1>
                <p class="desc">实现机械化清扫率达95% 多功能清洗车</p>
              </div>
            </li>
            <li>
              <img src="../assets/img/index/c-example5.png" class="item-img" alt="">
              <div class="desc-box">
                <h1 class="index-title">专业团队</h1>
                <p class="desc">专项服务员工100%持证上岗</p>
              </div>
            </li>
            <li>
              <img src="../assets/img/index/c-example6.png" class="item-img" alt="">
              <div class="desc-box">
                <h1 class="index-title">专业技术</h1>
                <p class="desc">玉龙服务十大标准技术管理</p>
              </div>
            </li>
          </ul>
          <a href="view/details.html" class="more1">
            MORE
          </a>
        </div>
      </div>
    </div>
    <!-- 综合实力结束 -->
    <!-- 宣传视频开始 -->
    <div class="p-video section">
      <div class="middle">
        <div class="section-header">
          <h1 class="header-title">宣传视频</h1>
          <p class="header-desc">公司始终以“创新驱动发展、科技成就未来”为企业发展理念</p>
          <div class="line-bar">
            <i class="bar"></i>
            <i class="icon-home"></i>
            <i class="bar"></i>
          </div>
        </div>
        <div class="section-main">
          <video id="my-video" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" preload="auto" width="1200" height="520" poster="../assets/img/index/video-bg.png" data-setup="{}">
            <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
            <source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm">
            <source src="http://vjs.zencdn.net/v/oceans.ogv" type="video/ogg">
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a web browser that
              <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
            </p>
          </video>
        </div>
      </div>
    </div>
    <!-- 宣传视频结束 -->
    <!-- 新闻中心开始 -->
    <div class="news-center section">
      <div class="middle">
        <div class="section-header">
          <h1 class="header-title">新闻中心</h1>
          <p class="header-desc">公司以“先进、专业、环保、艺术、享受”为服务宗旨</p>
          <div class="line-bar">
            <i class="bar"></i>
            <i class="icon-home"></i>
            <i class="bar"></i>
          </div>
        </div>
        <div class="section-main">
          <ul>
            <li>
              <div class="index-title">
                <i class="icons icon-news"></i>
                <span>新闻中心</span>
              </div>
              <p class="desc">长期以来致力于引进欧美先进的清洁服务理念，应用先进的清洁保养技术，倾力为广大客户提供专业、规范、</p>
              <a href="view/details.html" class="more">MORE</a>
            </li>
            <li>
              <img src="../assets/img/index/news1.jpg" class="item-img" alt="">
            </li>
            <li>
              <div class="index-title">
                <i class="icons icon-notice"></i>
                <span>媒体报道</span>
              </div>
              <p class="desc">长期以来致力于引进欧美先进的清洁服务理念，应用先进的清洁保养技术，倾力为广大客户提供专业、规范、</p>
              <a href="view/details.html" class="more">MORE</a>
            </li>
            <li><img src="../assets/img/index/news2.png" class="item-img" alt=""></li>
            <li class="status">
              <div class="index-title">
                <i class="icons icon-status"></i>
                <span>行业动态</span>
              </div>
              <p class="desc">长期以来致力于引进欧美先进的清洁服务理念，应用先进的清洁保养技术，倾力为广大客户提供专业、规范、</p>
              <a href="view/details.html" class="more">MORE</a>
            </li>
            <li><img src="../assets/img/index/news3.png" class="item-img" alt=""></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 新闻中心结束 -->
  </div>
</template>

<script>
export default {
  name: 'home',
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
