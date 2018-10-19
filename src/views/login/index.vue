    <template>
        <div class="login-body">
            <div class="header-top">
                <router-link class="link" to="/home"><img src="../../img/gostudy/返回 (1).svg" alt=""></router-link>
                <p>登录</p>
            </div>
            <div class="login-center">
                <div class="logo-img">
                    <img src="../../img/login/下载.png" alt="">
                </div>
            </div>
            <div class="login-bottom" >
              <form action="" @submit.prevent>
                    <input type="text" v-model="formData.id_card" placeholder="身份证号">
                    <input type="password" v-model="formData.password" placeholder="密码">
                    <van-button  type="warning" @click="login"> 登录</van-button>
              </form>
            </div>
        </div>
    </template>
    
    <script>
    import { Button } from 'vant';
    import { Dialog } from 'vant';
    import axios from 'axios';
        export default {
            data(){
                return{
                    formData:{
                        id_card:'1001',
                        password:'123456'
                    }
                }
            },methods:{
                login(){ 
                    this.xhr.fetch('post','/user/userLogin.do',this.formData).then(res=>{
                    // axios.post('/api/login',this.formData).then(res=>{
                        if(res.code==1){
                             let token = res.token
                        localStorage.setItem('token',token)
                        console.log(res)
                            this.$store.commit('CHANGE_userInfo',res.data)
                            this.$store.commit('CHANGE_token',res.token)
                            history.go(-1)
                        }
                        else{
                         Dialog.alert({
                            message: res.msg
                            }).then(() => {
                            });
                        }
                    })
                }
            }
        }
    </script>
    
    <style  lang="scss" scoped>
    .login-body{
        background: #c50206;
       
    }
    .header-top
{
    border-bottom:1px solid #ccc;
    position: fixed;
    z-index:22222;
    top:18px;
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
    line-height: 16px;
    text-align: center;
    color:#fff;

}
.login-center{
    height:100%;
    width: 100%;
     background: #c50206;
      position: absolute;
        top: 0;
        left:0;
        right: 0;
        bottom: 0;
     .logo-img{
         margin:74px auto 30px;
        width: 3.92rem;
        img{
            width: 100%;
        }
     }
}
.login-bottom{
  margin-top: 20px;
  position: relative;
  top:120px;
    input{
        width:5.8rem ;
        color:#fff;
        background: #c50206;
        font-size: 14px;
        border:1px solid #ff0;
        border-radius: 4px;
        position: relative;
        left: 50%;
        transform:translateX(-50%);
        margin:0 -14px 0 0;
        line-height: 0.729rem;
    }
    button{
        font-size: 14px;
        width: 5.8rem;
        position: relative;
        border-radius: 4px;
        text-align: center;
        left: 50%;
        transform:translateX(-50%)
    }
    .van-button--warning{
        background: #e3574f;
    }
}
    </style>