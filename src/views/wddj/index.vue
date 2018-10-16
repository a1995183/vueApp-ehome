<template>
    <div class="wddj-body">
        <div class="header">
            <div class="header-top">我的党建</div>
        </div>
        <div class="header-img">
            <div class="img">
                <img src="">
            </div>
                <a href=""><p class="plase-login" >你还没有登录，请登录</p></a>
        </div>
        <div class="list">
            <div class="list-item">
            <a  href=""><img src="../../img/wddj/个人信息.png"><div class="list-text">个人信息</div></a>
            </div>
            <div class="list-item">
            <a  href=""><img src="../../img/wddj/量化积分icon.png"><div class="list-text">个人量化积分</div></a>
            </div>
            <div class="list-item">
            <a  href=""><img src="../../img/wddj/修改密码icon.png"><div class="list-text">修改密码</div></a>
            </div>
            <div class="list-item">
            <a  href=""><img src="../../img/wddj/个人信息.png"><div class="list-text">党费缴纳</div></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
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
         width:1.333333rem;
         margin-left: 50%;
         transform: translateX(-50%);
         height:1.3333333rem;
         border-radius: 50%;
         background:url('../../img/home/bt_bg.png');
     }
     .plase-login{
         color:#fff;
         font-size: 12px;
         width: 120px;
        margin-left: 50%;
        transform: translateX(-50%);
     }
     
}
.list{
    .list-item{
        
        font-size: 16px;
        width: 100%;
        height: 54px;
        line-height: 54px;
        margin:10px;
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
</style>
