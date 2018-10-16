<template>
   <div class="notice-body">
       <div class="notice-headher">
           <div class="notice-header-title">通知早知道</div>
       </div>
       <div v-for="item in data" :value="item.newId" :key="item.newsId" class="notice-news">
           <div class="new-item" >
               <a  href="">
                   <img src="../../img/notice/iconfont_gonggaotongzhi.png">
                   <div class="img-right">
                       <p>{{item.title}}</p>
                                          <!-- <p>关于我院党总支近期将举办党的十九大知识竞赛的通知</p> -->
                   <span class="news-item-time">{{item.currentTime}}</span>
                   </div>
               </a>
           </div>
       </div>
     </div> 
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            data:[]
        }
    },
    methods:{
        getdata(){
            axios.get('http://211.67.177.56:8080/hhdj/news/newsList.do?page=1&rows=10&type=2').then(
                res=>{
                    if(res.data.code==1){
                        this.data=res.data.rows
                    }else{
                        console.log(res)
                    }
                }
            )
        }
    },
    created(){
        this.getdata()
    },
}
</script>
<style  lang="scss" scoped >
.notice-body{
    .notice-headher{
        background:#c50205;
        width:100%;
        height:44px;
        .notice-header-title{
                font-size:18px;
                color:white;
                line-height: 43px;
                text-align: center;
            }
    }
    .notice-news{
        .new-item{
            box-sizing: border-box;
            padding:10px;
            height:80px;
            border-bottom: 1px solid #fac;
          img{
                box-sizing: border-box;
                margin:12px 22px 0;
              float: left;
              width: 32px;
              height: 32px;
          }
          .img-right{
              float: left;
              width: 72%;
          }  
          p{
              margin:0;
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
        }
    }
}
</style>
