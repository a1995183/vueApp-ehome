<template>
    <div class="party-study">
        <headerCom :title="name"></headerCom>
            <div class="freach">
                <van-pull-refresh v-model="dnloading" @refresh="onRefresh" Slot='loading'>
                    <div class="fresh-up">
                    <!-- 上拉加载 -->
                        <van-list
                        v-model="isloading"
                        :finished="finished"
                        @load="onLoad"
                        >
                            <div v-show="!loading||!dnloading"  class="news-body">
                                <newsItem v-for="item in data" :key="item.id" :item='item'></newsItem>
                            </div>
                        </van-list>
                    </div>
                    
                <!-- 下拉刷新 -->
                </van-pull-refresh>
            </div>
        <div v-show="loading" class="loading">
            <van-loading  color="#333"/>
        </div>
      
    </div>
</template>

<script>
import headerCom from '@/components/header-Com'
import newsItem from '@/components/news-item'
import { Loading ,List  } from 'vant'
import { PullRefresh } from 'vant'
    export default {
        components:{
            headerCom,
            newsItem
        },
        data(){
            return{
                name:"随时随地学",
                data:[],
                loading:true,
                count:1,
                finished: false,
                list: [],
                isloading:false,
                dnloading:true,
                total:'',
                page:0
            }
        },
        methods:{
            getData(page=1,rows=10,type){
                let data=this.$route.params
                this.name=data.name
                this.xhr.get(`/news/newsList.do?page=${page}&rows=${rows}&type=${data.url}`).then(res=>{
                    this.total=res.total/10
                    if(type=='jz'){
                        this.data=this.data.concat(res.rows)
                    }else{
                        this.data=res.rows
                    }
                  
                    this.loading=false
                })
        
            },
              onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.dnloading = false;
                    this.getData()
                }, 500);
            },
                onLoad() {
                // 异步更新数据
                    setTimeout(() => {
                    this.page=this.page+1
                        // 加载状态结束
                        this.getData(this.page,10,'jz')
                        this.isloading = false;
                        // 数据全部加载完成
                        if (this.page>= this.total+1) {
                        this.finished = true;
                        }
                    }, 500);
                }
        },
        created(){
            this.getData()
        }
        
    }
</script>

<style lang="scss" scoped>
.loading{
    width: 80px;
    height: 80px;
    position: fixed;
    left: 50%;
    top:50%;
    transform: translate(-50%);
    /deep/ .van-loading{
        width: 100%;
        height: 100%;
    }
}
.news-body{
    margin-top:44px;
}
</style>
