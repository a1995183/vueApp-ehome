
<template>
    <div>
        <headerCom :title="name"></headerCom>
        <div class="header-swiper">
            <img src="../../img/life/下载 (5).png" class="header-swiper-img" width="100%" height="100%">
            <span class="header-swiper-title">67.1</span>
        </div>
        <router-link to="/mylhjf">
            <div class="jfmx" >
                <div class="jfmx-left">
                    <img class="jfmx-left-img" src="../../img/wddj/量化积分icon@2x.png" width="33" height="33">
                    <span class="jfmx-left-title">积分明细</span>
                </div>
                <div class="jfmx-right">
                    <img src="../../img/wddj/xiangyou.svg" width="20" height="33">
                </div>
            </div>
        </router-link>
        <div class="jfgz clearfloat">
            <div class="jfgz-right"><img src="../../img/wddj/问号.svg" width="100%" height="100%"></div>
            <div class="jfgz-left">积分规则</div>
        </div>
        <div class="rule-item">
            <van-cell-group>
                <van-cell title="登录app" value="5" />
                <van-cell title="完善个人信息" value="2" />
                <van-cell title="查看积分" value="1" />
                <van-cell title="按时交纳党费" value="10" />
                <van-cell title="查看通知" value="2" />
                <van-cell title="了解学院工作动态" value="5" />
                <van-cell title="上交思想汇报经审核通过" value="5" />
                <van-cell title="主动学习相关文件" value="10" />
                <van-cell title="认真撰写心得总结，并参与评论" value="5" />
                <van-cell title="提交个人总结，并参与评论" value="2" />
                <van-cell title="积极参与互动" value="5" />
                <van-cell title="学习党建知识" value="5" />
                <van-cell title="学习党史" value="10" />
                <van-cell title="创先争优事迹" value="10" />
                <van-cell title="学党章，学习习近平总书记系列讲话" value="10" />
                <van-cell title="用镜头记录两学一做过程中令人感动的人和事" value="3" />
                <van-cell title="关注并积极参与特色活动" value="5" />
                <van-cell title="制度化，常态化建设" value="5" />
            </van-cell-group>
        </div>
  
    </div>
</template>

<script>
import { Cell, CellGroup } from 'vant';
import headerCom from '@/components/header-Com'
    export default {
        components:{
            headerCom
        },
        data(){
            return{
                name:'个人量化积分'
            }
        }
        ,methods:{
            tojfmx(){
                this.$router.push('/login')
            }
        }
        
    }
</script>
<style lang="scss" scoped>
.header-swiper{
    margin-top: 44px;
    width: 100%;
    position: relative;
    height: 2.769rem;
    background: #000;
    .header-swiper{
        position: absolute;
    }
    .header-swiper-title{
        font-size: 16px;
        color: #ddd;
        font-weight: 500;
        position: absolute;
        top:50%;
        transform: translate(-50%);
        left:50%;
    }
}
.jfmx{
height:54px;
border-bottom: 1px solid #ddd;
box-sizing: border-box;
padding: 10px;
}
.jfmx-left{
    height:34px;
    width: 110px;
    float: left;
    .jfmx-left-img{
        float: left;
        margin-top:5px;
        margin-left:5px;
    }
    .jfmx-left-title{
        float: right;
        color:#666;
        line-height: 44px;
        font-size:16px;
    }
    
}
.jfmx-right{
        text-align: center;
        margin-top: 4px;
        float: right;
        width: 23px;
        line-height: 20px;
    }
    .jfgz{
        background: rgb(238, 238, 238);
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        height:33px;
        .jfgz-left{
        font-size:14px;
        line-height: 14px;
        width: 90px;
        }
        .jfgz-right{
            font-size:14px;
            float: right;
            width: 18px;
            height:18px;
        }
    }
 /deep/ .rule-item{
   /deep/ .van-cell{
       border-bottom:1px solid #ddd;
        /deep/ .van-cell__title{
            flex:2;
            color:#999;
        }
        .van-cell__value{
            color:#999;
        }
    }
    
}
</style>
