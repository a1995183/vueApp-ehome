<template>
    <div class="user-info">
    <headerCom :title="name"></headerCom>
    <div class="upload" @click="updataUserInfo">保存</div>
    <div class="table-userinfo">
        <div class="item-userinfo">
            <div class="item-right xdbj">
                <!-- <input class="file" @change="uploadImg(file)" value="file" type="file"> -->
                <van-uploader class="file" :after-read="onRead">
                <van-icon name="photograph" />
                </van-uploader>
                <img width="40"  height="100%" class="flr item-header-img"  :src="userInfo.header" alt="">
            </div>
            <div class="item-left">头像</div>
        </div>
        <div class="item-userinfo">
            <div class="item-right">
                <input type="text" :value="userInfo.username">
            </div>
            <div class="item-left">姓名</div>
        </div>
        <div class="item-userinfo">
            <div class="item-right">
                <input type="text" :value="userInfo.idCard" readonly="readonly">
            </div>
            <div class="item-left">身份证</div>
        </div>
        <div class="item-userinfo">
            <div class="item-right">
                <input :value="userInfo.hometown" type="text">
            </div>
            <div class="item-left">家庭住址</div>
        </div>
        <div class="item-userinfo">
            <div class="item-right">
                <input :value="userInfo.address" type="text">
            </div>
            <div class="item-left">工作住址</div>
        </div>
        <div class="item-userinfo">
            <div class="item-right">
                <input :value="userInfo.nation" type="text">
            </div>
            <div class="item-left">民族</div>
        </div>
        <div class="item-userinfo">
            <div class="item-right">
                <input :value="userInfo.wxNum" type="text">
            </div>
            <div class="item-left">微信号</div>
        </div>
        <div class="item-userinfo">
            <div class="item-right">
                <input :value="userInfo.qqNum" type="text">
            </div>
            <div class="item-left">QQ号</div>
        </div>
        <!-- <div class="item-userinfo">
            <div class="item-right">
                <input  type="text">
            </div>
            <div class="item-left">头像</div>
        </div> -->
        <div class="item-userinfo">
            <div class="item-right ">
                <div class="sex-item" >
                     <input type="radio" class="radio" name="sex" v-model="userInfo.sex"  value="1">男
                     <input type="radio" class="radio" name="sex" v-model="userInfo.sex" value="0">女
                </div>
               
            </div>
            <div class="item-left ">性别</div>
        </div>
        <div class="item-userinfo">
            <div class="item-right">
                <input type="text" :value="userInfo.education">
            </div>
            <div class="item-left">最高学历</div>
        </div>
        <div class="item-userinfo">
            <div class="item-right">
                <input type="text" :value="userInfo.jobRank" >
            </div>
            <div class="item-left">职称</div>
        </div>
        <div class="item-userinfo">
            <div class="item-right">
                <input type="text" :value="userInfo.salary">
            </div>
            <div class="item-left">薪资水平</div>
        </div>
        <div class="item-userinfo">
            <div class="item-right">
                <van-button @click="changeFist"  type="">{{this.userInfo.joinPartyTime}}</van-button>
                <van-popup v-model="showFirst" position="bottom" :overlay="true">
                    <van-datetime-picker
                    v-model="currentDate"
                    :visible-item-count='5'
                    @confirm="confirmFist"
                    confirm=''
                    type="date"
                    />
                </van-popup>
            </div>
            <div class="item-left">入党时间</div>
        </div>
        <div class="item-userinfo">
            <div class="item-right">
                <van-button @click="changeLast"  type="">{{userInfo.lastPayTime}}</van-button>
                <van-popup v-model="show" position="bottom" :overlay="true">
                    <van-datetime-picker
                    v-model="currentDate"
                    :visible-item-count='5'
                    @confirm="confirm"
                    confirm=''
                    type="date"
                    />
                </van-popup>
              
            </div>
            <div class="item-left">党费最后缴纳时间</div>
        </div>
        <div class="item-userinfo">
            <div class="item-right">
                <van-button v-show="!partyid" @click="changepartyid"  type="">{{userInfo.partyIdentity}}</van-button>
                <div  v-show="partyid" class="sclect">
                    <van-button  @click="changeParty('党员')">党员</van-button>
                    <van-button @click="changeParty('预备党员')">预备党员</van-button>
                    <van-button @click="changeParty('积极分子')">积极分子</van-button>
                </div>
                <!-- <select v-show="partyid" class="sclect" @submit.prevent name="">
                    <option value="0" @click="changeParty(0)">党员</option>
                    <option value="1" @click="changeParty(1)">预备党员</option>
                    <option value="2" @click="changeParty(2)">积极分子</option>
                </select> -->
            </div>
            <div class="item-left">当前身份</div>
        </div>
    </div>
    </div>
</template>

<script>
import { Popup } from 'vant';
import headerCom from '@/components/header-Com';
import { Uploader } from 'vant';
import {mapState} from 'vuex';
    export default {
        components:{
            headerCom
        },
        data(){
            return{
                name:'修改个人信息',
                 currentDate: new Date(),
                  show: false,
                  showFirst:false,
                  partyid:false,
                 userInfo:{
                      address:"sdgvsdgsdg",
                        age:18,
                        birthday:"--",
                        branchId:"",
                        count:0,
                        disabled:0,
                        education:"",
                        header:""
                        ,hometown:""
                        ,id:2,
                        idCard:"",
                        jobRank:"",
                        joinPartyTime:"1995-10-19",
                        lastPayTime:"2018-10-19",
                        leadPerson:"",
                        nation:"",
                        partyStatus:1,
                        password:"",
                        phone:"",
                        qqNum:"",
                        salary:'',
                        sex:1,
                        special:"",
                        totalScore:'',
                        username:"",
                        wxNum:"",
                 }
            }
        },
        methods:{
            getdata(){
                this.xhr.get('user/userInfo.do','',{headers:{token:this.token}}).then(res=>{
                    if(res.code==1){
                        this.userInfo={...res.data}
                        console.log(this.userInfo)
                    }
                })
            },
            changeLast(){
                this.show=!this.show
            },
            changeFist(){
                  this.showFirst=!this.showFirst
            },
            changepartyid(){
                  this.partyid=!this.partyid
            },
            updataUserInfo(){
            //    let data= delete this.userInfo['idCard']; 
            let data={
                username:this.userInfo.username,
                address:this.userInfo.header,
                hometown:this.userInfo.hometown,
                nation:this.userInfo.nation,
                wxNum:this.userInfo.wxNum,
                qqNum:this.userInfo.qqNum,
                sex:this.userInfo.sex,
                education:this.userInfo.education,
                jobRank:this.userInfo.jobRank,
                salary:this.userInfo.salary,
                joinPartyTime:this.userInfo.joinPartyTime,
                lastPayTime:this.userInfo.lastPayTime,
                partyStatus:this.userInfo.partyStatus
            }
                 console.log(data)
                this.xhr.fetch('post','/user/modifyInfo.do',data).then(
                    res=>{
                        console.log(res)
                    }
                ).catch(err=>console.log(err))
            },
            changeParty(value){
                  this.partyid=!this.partyid
                  this.userInfo.partyIdentity=value
            },
            confirm(){
                let data=this.currentDate
                var date = new Date(this.currentDate);  
                 let date_value=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
                 this.userInfo.lastPayTime=date_value
                this.show=!this.show
            },
            confirmFist(){
                let data=this.currentDate
                var date = new Date(this.currentDate);  
                 let date_value=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
                 this.userInfo.joinPartyTime=date_value
                this.showFirst=!this.showFirst
            },
            onRead(myFile){
                
                this.xhr.fetch('post',`/image/uploadBase64.do`,myFile).then(res=>{
                    console.log(res)
                })
            }
        },
        created(){
            this.getdata()
            },
        computed:{
               ...mapState(['token'])
        }
        
    }
</script>
<style lang="scss" scoped>
.upload{
    position: absolute;
    font-size: 16px;
    z-index: 3343433433;
    width: 55px;
    height: 44px;
    right: 0px;
    color:#fff;
    text-align: center;
    line-height: 44px;
    top:0;
}
.table-userinfo{
    margin-top: 44px;
    .item-userinfo{
        box-sizing: border-box;
        padding: 10px;
        font-size: 14px;
        color: #666;
        width: 100%;
        height: 48px;
        border-bottom: 1px solid #ddd;
    .item-right{
        height: 33px;
        margin-bottom: 4px;
        width: 141px;
        line-height: 0;
        float: right;
        .file{
            font-size: 0;
            position: absolute;
            width: 40px;
            z-index:1111;
            right: 0;
        }
        .radio{
            width:13px;
            height: 13px;
        }
        /deep/ .sex-item{
            width: 80px;
            float: right;
            line-height: 30px;
            height: 33px;

        }
        .item-header-img{
            border:1px solid #ddd;
        }
        .van-button{
            float: right;
            border:none;
            height: 70%;
            line-height:0;
            background: #fff;
        }
        .sclect{
            color:#333;
            width: 130px;
            position: relative;
            top: -80px;
            font-size: 14px;
            height: 48px;
            float: right;
            /deep/.van-button{
                width: 100%;
                border:1px solid #333;
            }
        }
        input{
            height: 90%;
            width: 99%;
            border:0;
            font-size: 14px;
            text-align: right;
            color:#666;
        }
    }
    .item-left{
        float: left;
        font-size: 14px;
        color: #666;
        height: 48px;
        line-height: 27px;
    }
}
}
.xdbj{
    position: relative;
}
.flr{
    float: right;
}
</style>
