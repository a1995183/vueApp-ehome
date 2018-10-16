<template>
 <div class="news-body"> 
     <div class="header-top">
         <router-link class="link" to="/home"><img src="../../img/gostudy/返回 (1).svg" alt=""></router-link>
        <p>随时随地学</p>
     </div>
     <div class="header-title">
         {{data.title}}
     </div>
     <div class="news-content" v-html="data.content">
      
     </div>
 </div>
</template>
<script>
    import axios from 'axios';
export default {
    data(){
        return{
            data:[]
        }
    },methods:{
        getData(){
          let id=this.$route.params.id
            axios.get(`http://211.67.177.56:8080/hhdj/news/newsContent.do?newsId=${id}`).then(
                res=>{
                    if(res.data.code==1){
                        this.data=res.data.data
                    console.log(this.data)
                    }
                }
            )
        }
    },created(){
        this.getData()
    }
}
</script>
<style lang="scss" scoped>
.header-top{
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
.header-title{
    margin:10 auto;
    font-size: 24px;
}
.news-content{
    font-size: 18px;
    text-align: center;
    /deep/ h4{
        margin:10px 0;
    }
  /deep/ span{
        font-weight: 500;
        line-height: 2;
  }
  /deep/ img{
      display: block;
      margin:0 auto;
      max-width: 100%;
    
  }
}
</style>
