<template>
    <div class="anywhere-photo-body">
        <headerCom :title="name"></headerCom>
        <div class="news-photo-both" >
            <div class="news-item" v-for="item in data" :key="item.value" :value="item.newsId" @click="gostudy(item.newsId)">
                <img :src="item.pic">
                <p>{{item.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import headerCom from '@/components/header-com';
import xhr from '@/utils/index.js';
    export default {
        components:{
            headerCom
        },
        data(){
            return{
                name:'随时随地拍',
                data:[]
            }
        },
        methods:{
         getdata(){
                xhr.get('/news/newsList.do?page=1&rows=10&type=7').then(res=>{
                    if(res.data.code==1){
                        this.data=res.data.rows
                    }
                })
         },
         gostudy(value){
             this.$router.push(`/mystudy/${value}`)
         }
        },
        created(){
            this.getdata()
        }
    }
</script>
<style lang="scss" scoped>
.news-photo-both{
    margin-top: 44px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

}
.news-item{
    img{
        width: 2.98077rem;
        height: 2.23077rem;
    }
font-size: 13px;
color:#666;
margin: 16px;
width:155px;
height: 157px;
box-sizing: border-box;
    text-align: center;

}
</style>
