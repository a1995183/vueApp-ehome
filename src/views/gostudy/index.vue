<template>
 <div class="news-body"> 
      <headerCom :title="name"></headerCom>
     <div class="header-title">
         {{data.title}}
     </div>
     <div class="news-content" v-html="data.content">
      
     </div>
 </div>
</template>
<script>
import headerCom from '@/components/header-Com';
export default {
components:{
    headerCom
},
data(){
    return{
        data:[],
        name:'随时随地学'
    }
},
methods:{
    getData(){
        console.log(this.$route.params)
        let id=this.$route.params.id
        this.xhr.get(`/news/newsContent.do?newsId=${id}`).then(
            res=>{
                if(res.code==1){
                    this.data=res.data
                console.log(this.data)
                }else{
                    console.log(res)
                }
            }
        )
    }
},
created(){
        this.getData()
    }
}
</script>
<style lang="scss" scoped>
.header-title{
    margin:44px auto 10px;
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
