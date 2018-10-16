    <template>
        <div class="login-body">
            <div class="header-top">
                <router-link class="link" to="/home"><img src="../../img/gostudy/返回 (1).svg" alt=""></router-link>
                <p>登录</p>
            </div>
            <div class="logo-img">
                <img src="" alt="">
            </div>
        </div>
    </template>
    
    <script>
        export default {
            
        }
    </script>
    
    <style  lang="scss" scoped>
    .login-body{
        background: #c50206;
    }
    .header-top
{
    border-bottom:1px solid #ccc;
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
    background: #c50206;
    margin-top:-18px;
    width:100%;
    height:44px;
    font-size: 18px;
    font-weight: 500;
    line-height: 44px;
    text-align: center;
    color:#fff;

}
    </style>