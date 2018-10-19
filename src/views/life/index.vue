<template>
    <div>
        <div class="header-top">
            <router-link class="link" to="/home"><img src="../../img/gostudy/返回 (1).svg" alt=""></router-link>
            <p>掌上组织生活</p>
        </div>
        <div class="life-swiper"> 
            <img src="../../img/life/timg.jpg" alt="">
        </div>
        <div class="menu-body">
            <router-link to="/mystudy" class="menu-item">
                <img src="../../img/life/下载.png" alt="">
                <p>政治学习</p>
            </router-link>
            <router-link to="/study" class="menu-item">
                <img src="../../img/life/下载 (1).png" alt="">
                <p>思想汇报</p>
            </router-link>
            <router-link to="/study" class="menu-item">
                <img src="../../img/life/下载 (2).png" alt="">
                <p>心得体会</p>
            </router-link>
            <router-link to="/choice" class="menu-item">
                <img src="../../img/life/下载 (3).png" alt="">
                <p>民主评议</p>
            </router-link>
            <router-link to="/study" class="menu-item">
                <img src="../../img/life/下载 (4).png" alt="">
                <p>流动党员找组织</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
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
.life-swiper{
    width: 100%;
    height:3.576920rem;
    margin-top:44px;
    img{
        width: 100%;
        height: 100%;
    }
}
.menu-body{
    display: flex;
     flex-wrap:wrap;
    .menu-item{
        display: flex;
        width: 1.6192rem;
        height: 2.0915rem;
        padding: 15px 20px;
         flex-direction:column;
         img{
             width:1.6346rem;
             height:1.6346rem;

         }
         p{
             color: #666;
            font-size: 14px;
            width: 100%;
            text-align: center;
         }
    }
}
</style>
