<template>
 <div class="home">
    <div class="home-Header">
     <img class="home-header-img" src="../img/home/logo.png">
       <a href="#">登录</a>
    </div>
    <div class="home-swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in dataswiper" :key="item.newsId"><img width="375px" class="swiper-item"  :src="item.imgUrl" :value="item.url"  @click="gostudy(item.url)"></swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
    </div>
   <div class="center-menu">
     <router-link to="/newseye" class="menu-item">
       <img class="icon-img" src="../img/home/icon_01.png">
       <p class="icon-text">信工新闻眼</p>
     </router-link>
     <router-link to="/life" class="menu-item">
       <img class="icon-img" src="../img/home/icon_02.png">
       <p class="icon-text">掌上组织生活</p>
     </router-link>
     <router-link to="/Interaction" class="menu-item">
       <img class="icon-img" src="../img/home/icon_03.png">
       <p class="icon-text">党员云互动</p>
     </router-link>
   <div style="height:110px"></div>
     <router-link to="/parthbuild" class="menu-item">
       <img class="icon-img" src="../img/home/icon_04.png">
       <p class="icon-text">党建一点通</p>
     </router-link>
     <router-link to="/showidentify" class="menu-item">
       <img class="icon-img" src="../img/home/icon_05.png">
       <p class="icon-text">党员亮身份</p>
     </router-link>
     <router-link to="/today" class="menu-item clearflow">
       <img class="icon-img" src="../img/home/icon_06.png">
       <p class="icon-text">党史上的今天</p>
     </router-link>
   </div>
   <div class="img-banner">
     <img class="img-1" src="../img/home/banner01.png">
     <div class="img-2">
       <div class="img-link"></div>
       <div class="img-link1">
        <router-link class="img-link-item" to="/anywhere"></router-link>
        <router-link class="img-link-item" to="/system"></router-link>
       </div>
       <div class="img-link1">
        <router-link class="img-link-item" to="/anywherephoto"></router-link>
        <router-link class="img-link-item" to="/activity"></router-link>
       </div>
       <img src="../img/home/专栏.png" alt="">
     </div>
   </div>
   <div class="table"></div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios';
export default {
   components: {
                    swiper,
                    swiperSlide
            },
  name: 'HelloWorld',
  data () {
    return {
  dataswiper:[],
        swiperOption:{
                //显示分页
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true
                },
                //切换模式  横屏或者竖屏
                // direction : 'vertical',
                //设置自动播放速度
                autoplay: {
                    disableOnInteraction: false,
                    delay:4000
                },
                //开启无限循环
                loop:true,
                //设置点击箭头
                paginationClickable :true,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
                //设置同屏显示的数量，默认为1，使用auto是随意的意思。
                slidesPerView:1,
                //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
                mousewheel:true ,
                //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
                // freeMode:true
            }
        }
    },methods:{
      getSwiper(){
        this.xhr.get('/carousel/carouselList.do?type=0').then(
          res=>{
            if(res.code==1){
              this.dataswiper=res.rows
                    }else{
                    }
          }
        )
      },gostudy(value){
        this.$router.push(`/mystudy/${value}`)
      }
    },
      created(){
        this.getSwiper()
      }
}
</script>
<style lang="scss" scoped>
.clearflow:after{
  display:block;
  clear:both;
  content:"";
  visibility:
  hidden;
  height:0
}
.swiper-box{
  width: 375px;
  height: 100%;
}

.home-Header{
        box-sizing: border-box;
        padding:5px;
         width: 100%;
         height:44px;
        background:#c50206;
        font-size: 50px;
        .home-header-img{
            width:130px;
            float:left;
            }
        a{
            float:right;
            color:#fff;
            font-size:17px;
            line-height: 34px;
            margin-left: 5px;
            text-decoration: none;
        }
    }
    
    .home-swiper{
        /deep/.swiper-container{
        width:100%;
      }
      .swiper-item{
        width:100%;
        height:80%;
        position: relative;
      }
      .swiper-pagination{
        top:172px;
        left:50%;
        transform: translateX(-50%)
      }
      /deep/ .swiper-pagination-bullet{
          margin-left:5px;
        }
    
    }
    .center-menu{
      .menu-item{
        width:33%;
        height:1.88rem;
        float: left;
          text-align: center;
        .icon-img{
          width:50px;
          height:50px;
        }
        .icon-text{
          width: 100%;
          height: 0.25rem;
          color:#666;
          font-size: 0.25rem;
        }
      }
    }
    .img-banner{
      margin-top:110px;
      margin-bottom: 36px;
     .img-1{
        width:100%;
     }
     .img-2{
       height: 3.17307rem;
       margin-top:-15px;
       width:100%;
       position: relative;
       img{
         position: absolute;
         z-index: -111;
          width: 100%;
          top:0;
          left: 0;
          right:0;
          height: 100%;
       }
      .img-link{
        z-index: 0;
        Width:2.403846rem;
        height: 3.173077rem;
        float: left;
      }
       .img-link1{
        z-index: 0;
        Width:2.3846rem;
        height: 3.173077rem;
        float: left;
        .img-link-item{
          width: 100%;
          display: block;
          height: 50%;
        }
      }

     }
     
    }
</style>


