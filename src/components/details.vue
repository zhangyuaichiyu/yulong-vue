<template>
  <div class="main">
    <banner v-bind:message="list"></banner>
    <div class="details">
      <div class="details-title">{{newArr.title}}</div>
      <div class="details-middle">
        <span>发布时间<span>:</span>{{newArr.time}}</span>
        <span class="line"></span>
        <div class="bdsharebuttonbox">
          <a href="#" class="bds_more" data-cmd="more"></a>
          <a href="#" class="bds_qzone" data-cmd="qzone"></a>
          <a href="#" class="bds_tsina" data-cmd="tsina"></a>
          <a href="#" class="bds_tqq" data-cmd="tqq"></a>
          <a href="#" class="bds_renren" data-cmd="renren"></a>
          <a href="#" class="bds_weixin" data-cmd="weixin"></a>
        </div>
        <span class="line"></span>
        <!-- JiaThis Button END -->
        <span class="wzbj">网站责任编辑<span>:</span>玉龙环保</span>
        <span class="line"></span>
        <span class="wzbj">人气<span>:</span>{{newArr.rq}}</span>
      </div>
      <div class="details-details">
      </div>
      <a onclick="javascript :history.back(-1);">
        <div class="to-back">
          <i class="icon icon-arrow-l"></i>
          <span>返回</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import banner from './banner'
export default {
  name: 'details',
  components: {
    banner
  },
  data() {
    return {
      list:{
        list1:"员工培训",
        list2:"员工风采",
        list3:"员工心声",
        list4:"详情"
      },
      newArr: []
    }
  },
  mounted () {
    this.init();
    //console.log(this.$route.params.id)
    var id=this.$route.params.id
    this.axios.get('https://www.easy-mock.com/mock/59bb5ad8e0dc663341ab2cd7/example/newdesc')
    .then((response) => {
      //console.log(response.data.data[id])
      this.newArr = response.data.data[id]
      var desc=this.newArr.desc;
      $(".details-details").html(desc)
      $(".details-details p").css({
        "font-size":"18px",
        "line-height":"42px",
        "text-indent":"2em"
      })
    })
    .catch((error) => {
      console.log(error)
    })
  },
  methods:{
    init: function () {
      window._bd_share_config = {
        "common": {
          "bdSnsKey": {},
          "bdText": "",
          "bdMini": "2",
          "bdPic": "",
          "bdStyle": "0",
          "bdSize": "16"
        },
        "share": {},
        "image": {
          "viewList": [
            "qzone", "tsina", "tqq", "renren", "weixin"
          ],
          "viewText": "分享到：",
          "viewSize": "16"
        },
        "selectShare": {
          "bdContainerClass": null,
          "bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "weixin"]
        }
      };
      var url = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js'
      var script = document.createElement('script')
      script.setAttribute('src', url)
      document.getElementsByTagName('head')[0].appendChild(script)
    }
  }
}
</script>

<style scoped lang="css">
  @import '../assets/css/details.css'
</style>
