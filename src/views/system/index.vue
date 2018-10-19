<template>
    <div class="system-body">
        <headerCom :title="name"></headerCom>
        <div class="system-news">
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
        headerCom,
        newsItem
    },
    data(){
        return{
            name:'制度建设',
            data:[]
        }
    },
    methods:{
        getdata(){
         xhr.get('/news/newsList.do?page=1&rows=10&type=4').then(res=>{
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
.system-news{
    margin-top: 44px;
}
</style>
