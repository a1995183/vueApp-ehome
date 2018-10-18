<template>
<div class="new-item"  :value="item.newsId"  @click="gostudy(item.newsId)">
    <router-link to="" >
        <img :src="item.pic">
        <div class="img-right">
            <p>{{item.title}}</p>
            <span class="news-item-time">{{item.currentTime}}</span>
            <span class="news-item-look">{{item.count}}</span>
            <img class="icon-img-look" src="../img/newseye/eye.svg">
        </div>
    </router-link>
</div>
</template>
<script>
    export default {
        props:{
            item:{
                type:Object
            },
        },
        data(){
          return{
                news:[]
          }
        },
        methods:{
            getNews(){
                if(this.data)
                {
                    this.news=this.data
                }
            },
            gostudy(value){
                this.$router.push(`/mystudy/${value}`)
            }
        },
        created(){
            this.getNews()
        }
    }
</script>
<style lang="scss" scoped>


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

</style>
