<template>
<div class="news-both">
     <div class="header-top">
         <router-link class="link" to="/home"><img src="../../img/gostudy/返回 (1).svg" alt=""></router-link>
        <p>信工新闻眼</p>
     </div>
       <div v-for="item in data" :value="item.newsId" :key="item.newsId" class="notice-news">
           <div class="new-item"  :value="item.newsId"  @click="gostudy(item.newsId)">
               <router-link to="" >
                   <img :src="item.pic">
                   <div class="img-right">
                    <p>{{item.title}}</p>
                   <span class="news-item-time">{{item.currentTime}}</span>
                   <span class="news-item-look">{{item.count}}</span>
                    <img class="icon-img-look" src="../../img/newseye/eye.svg">
                   </div>
               </router-link>
           </div>
       </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            data:[],
        }
    },
    methods:{
        getData(){
          axios.get('http://211.67.177.56:8080/hhdj/news/newsList.do?page=1&rows=10&type=0').then(
              res=>{
                    if(res.data.code==1){
                        this.data=res.data.rows
                    }
              }
          )  
        },gostudy(value){
        this.$router.push(`/mystudy/${value}`)
      }
    },
    created(){
        this.getData()
    }    
}
</script>
<style lang="scss" scoped>
.header-top
{
    .link{
        position: absolute;
        top: 5px;
        left: 5px;
        width: 30px;
        height: 30px;
    img{
            width: 30px;
        height: 30px;
    }
    }
    background: #c50206;
    margin-top:-18px;
    width:100%;
    height:44px;
    font-size: 18px;
    font-weight: 500;
    line-height: 44px;
    text-align: center;
    color:#fff;

}
.notice-news{
    .new-item{
        box-sizing: border-box;
        padding:10px 5px;
        height:100px;
        border-bottom: 1px solid #fac;
        img{
            box-sizing: border-box;
            margin:0px 10px 0;
            float: left;
            width: 80px;
            height: 80px;
        }
        .img-right{
            float: left;
            width: 72%;
        }  
        p{
            margin-top:10px;
            float: left;
            font-size: 15px;
            color:#333;
        }
        .news-item-time{
            color:#666;
            line-height: 20px;
            float: left;
            font-size: 12px;
        }
            .icon-img-look{
                width: 13px;
                height: 18px;
                float: right;
            }
        .news-item-look{
            color:#666;
            line-height: 20px;
            float: right;
            width: 32px;
            height: 13px;
            font-size: 12px;
        }
    }
}
</style>
