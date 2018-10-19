<template>
    <div>
        <headerCom :title="name"></headerCom>
        <div class="content-all" v-for="item in data" :key="item.userId">
            <div class="user-content-item"  >
                <div class="user-img">
                    <img :src='item.header'>
                </div>
                <div class="user-content">
                        <span class="username">{{item.username}}</span>
                       <p> <i class="dy-btn"><img width="100%" height="100%" src="../../img/interaction/单选 .svg"></i>{{item.currentTime}}  
                       <i class="dy-btn"><img width="100%" height="100%" src="../../img/interaction/喇叭.svg"></i>
                       <span class="type">{{item.type?'公开':'私密'}}</span></p>
                </div>
                <div class="user-hd">
                    党员互动
                </div>
            </div>
            <div class="content-ly">
                {{item.content}}
            </div>
            <div class="hf-buttom">
                <i class="dy-btn"><img width="100%" height="100%" src="../../img/interaction/回复.svg"></i>
                回复</div>
        </div>
        <div class="btn-addtock">
            <img width="100%" height="100%" src="../../img/interaction/添加.svg">
        </div>
    </div>
</template>

<script>
import headerCom from '@/components/header-Com';
import xhr from '@/utils/index.js';
export default {
        components:{
            headerCom
        },
        data(){
            return{
                name:'党员云互动',
                data:[]
            }
        },
        methods:{
            getdata(){
                xhr.get('/forum/forumList.do?page=1&rows=10&type=0&cates=0').then(
                    res=>{
                       if(res.data.code==1){
                           this.data=res.data.rows
                           console.log(this.data)
                       }
                    }
                )
            }
        },
        created(){
            this.getdata()
        }

}
</script>
<style lang="scss" scoped>
.user-content-item{
    padding: 16px;
    margin-top:44px;
    width: 6.596REM;;
    height: 0.8654rem;
    .user-img{
    margin-right: 10px;
    float: left;
    width: 43px;
    height:43px;
        img{
            float: left;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        }
}
.user-content{
    width: 178px;
    height: 43px;
    float: left;
        .username{
        font-size: 16px;
        color:#333;
        float: left;
        width: 2.2654rem;
        height: 41px;
        }
        p{
        float: left;
        font-size: 12px;
        margin:-13px 0;
        color:#333;
        .dy-btn{
            width: 12px;
            height: 14px;
            display: inline-block;
        }
        }
        .type{
            font-size: 12px;
            color:#666;
        }
}
    .user-hd{
    float: right;
    font-size: 12px;
    margin-top: 10px;
    width: 66px;
    height: 26px;
    color:#333;
    text-align: center;
    line-height: 26px;
    border:1px solid red;
    border-radius: 15%/50%;
    }
}
.content-ly{
    width: 100%;
    height: 20px;
    font-size: 16px;
    margin-left: 20px;
    color:#333;
}
.hf-buttom{
    float: right;
    font-size: 15px;
    color:#666;
    width:54px;
    height: 20px;
    margin-right: 15px;
 .dy-btn{
            width: 18px;
            height: 16px;
            display: inline-block;
        }
}
.btn-addtock{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: red;
    position: fixed;
    bottom:80px;
    right:20px;
}
  


</style>
