<template>
    <div class="anywhere-body">
        <HeaderCom :title="name"></HeaderCom>
        <div class="news-both">
            <newsItem v-for="item in data" :key="item.newsId" :value="item.newsId" :item="item"></newsItem>
        </div>
    </div>
</template>

<script>
import HeaderCom from '@/components/header-Com';
import newsItem from '@/components/news-item';
import xhr from '@/utils/index.js';
    export default {
    components:{
        HeaderCom,
        newsItem
    },
    data(){
        return{
            name:'随时随地学',
            data:[]
        }
    },
    methods:{
        getdata(){
            xhr.get('/news/newsList.do?page=1&rows=10&type=6').then(res=>{
                if(res.code==1){
                    this.data=res.rows
                    console.log(this.data)
                }
            })
        }
    },
    created(){
        this.getdata();
    }        
}
</script>
<style lang="scss" scoped>
.news-both{
    margin-top:44px;
}
</style>
