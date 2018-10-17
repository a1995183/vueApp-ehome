<template>
    <div class="choice-body">
      <div class="header-top">
            <router-link class="link" to="/home"><img src="../../img/gostudy/返回 (1).svg" alt=""></router-link>
            <p>{{name}}</p>
        </div>
        <div class="botton-both">
            <van-button type="warning">个人总结</van-button>
            <van-button type="warning">民主评议</van-button>
        </div>
    </div>
</template>

<script>
import { Button } from 'vant';
    export default {
        data(){
            return{
                name:'民主评议'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header-top
{
    border-bottom:1px solid #ccc;
    position: fixed;
    z-index:22222;
    top:18px;
    background: #c50206;
    margin-top:-18px;
    width:100%;
    height:44px;
    font-size: 18px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
    color:#fff;
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
}
.botton-both{
    width: 100%;
    margin:50%;
    text-align: center;
    transform: translate(-50%);
    .van-button{
        width: 3.78846rem;
        height:57px;
        background: #ef473a;

    }
}
</style>