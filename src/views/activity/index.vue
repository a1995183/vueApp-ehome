
<template>
    <div class="activity-body">
        <headerCom :title="name"></headerCom>
        <div class="activity-news">
            <newsItem v-for="item in data" :key="item.newsId" :item="item"></newsItem>
        </div>
    </div>
</template>

<script>
import headerCom from '@/components/header-Com';
import newsItem from '@/components/news-item';
import xhr from '@/utils/index.js';
export default {
    components:{
        headerCom
        ,newsItem
    },
    data(){
        return{
            name:'特色活动',
            data:[]
        }
    },
    methods:{
        getdata(){
            xhr.get('/news/newsList.do?page=1&rows=10&type=1').then(res=>{
                if(res.code==1){
                    this.data=res.rows
                }
         })
        }
    },
    created(){
        this.getdata()
    }
    
}
</script>
<style lang="scss" scoped>
.activity-news{
    margin-top: 44px;
}
</style>
