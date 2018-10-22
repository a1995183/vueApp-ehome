<template>
    <div class="wddj-body">
        <div class="header">
            <div class="header-top">我的党建</div>
        </div>
        <div class="header-img">
            <div class="img">
                <img class="img-header" width="100%" height="100%" :src="userInfo.header">
            </div>
            <p class="plase-login name-user" v-if="userInfo.idCard"> {{userInfo.username}}</p>
                <a v-else href="/login"><p class="plase-login" >你还没有登录，请登录</p></a>
        </div>
        <div class="list">
            <div class="list-item">
            <router-link :to="userInfo.idCard?'/user':'/login'">
            <div  class="item-xy">
                <img class="item-xy-img" src="../../img/wddj/xiangyou.svg" width="20" height="23">
            </div>
            <img src="../../img/wddj/个人信息.png"><div class="list-text">个人信息</div></router-link>
            </div>
            <div class="list-item">
            <router-link :to="userInfo.idCard?'/score':'/login'">
            <div  class="item-xy">
                <img class="item-xy-img" src="../../img/wddj/xiangyou.svg" width="20" height="23">
            </div>
            <img src="../../img/wddj/量化积分icon.png"><div class="list-text">个人量化积分</div></router-link>
            </div>
            <div class="list-item">
            <router-link :to="userInfo.idCard?'/upPsw':'/login'">
            <div  class="item-xy">
                <img class="item-xy-img" src="../../img/wddj/xiangyou.svg" width="20" height="23">
            </div>
            <img src="../../img/wddj/修改密码icon.png"><div class="list-text">修改密码</div></router-link>
            </div>
            <div class="list-item">
            <router-link :to="userInfo.idCard?'/pay':'/login'">
            <div  class="item-xy">
                <img class="item-xy-img" src="../../img/wddj/xiangyou.svg" width="20" height="23">
            </div>
            <img src="../../img/wddj/个人信息.png"><div class="list-text">党费缴纳</div></router-link>
            </div>
        </div>
        <div class="clear-login">
            <van-button v-show="userInfo.idCard" type="primary" @click="clearLogin">退出登录</van-button>
        </div>
    </div>
</template>
<script>
import { Button } from 'vant';

import {mapState} from 'vuex';
export default {
    data(){
        return{

        }
    },
    methods:{
        clearLogin(){
            this.$store.commit('CHANGE_userInfo','')
        }
    },
    created(){

    },
    computed:{
        ...mapState(['userInfo'])
    },
    
}
</script>
<style lang="scss" scoped>
.header{
    width: 100%;
    height: 43px;
    background: #c50206;
    border-bottom: 1px solid #ccc;
    .header-top{
        color:#fff;
        margin-left: 50%;
        transform: translateX(-50%);
        line-height: 44px;
        text-align: center;
        font-size:17px;
    }
}
.header-img{
    height:2.75rem;
    width:100%;
    box-sizing: border-box;
    padding-top:30px;
     background: #c50206;
     .img{
         width:1.1923rem;
         margin-left: 50%;
         transform: translateX(-50%);
         height:1.1923rem;
         border-radius: 50%;
         background:url('../../img/home/bt_bg.png');
         .img-header{
             border-radius: 50%;
         }
     }
     .plase-login{
    color:#fff;
    font-size: 12px;
    width: 120px;
    margin-left: 50%;
    transform: translateX(-50%);
     }
     .name-user{
    text-align: center;
     }
}
.list{
    .list-item{
        
        font-size: 16px;
        width: 100%;
        height: 54px;
        line-height: 54px;
        padding:10px;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        .item-xy{
        text-align: center;
        margin-top: 4px;
        float: right;
        width: 23px;
        line-height: 20px;
        .item-xy-img{
            width: 18px;
            height:18px;
            float: right;
            margin-right: 0;
        }
        }
        img{
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 14px;
        }
       .list-text{
        color:#666;
        float: left;
        height: 54px;
        margin:0;
        line-height: 34px;
       }
    }
}
.clear-login{
    width: 100%;
    height: 47px;
    box-sizing: border-box;
    padding: 0 10px;
    button{
        background: #ef473a;
        width: 100%;
        height: 100%;
        /deep/ .van-button__text{
        font-size: 16px;
        line-height: 44px;
        }
    }
}
</style>
