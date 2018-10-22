<template>
    <div>
        <headerCom :title="name"></headerCom>
        <div class="html" v-html="data"></div>
    </div>
</template>
<script>
    import HeaderCom from '@/components/header-Com'
    export default {
        components:{
            HeaderCom
        },
        data(){
            return{
                name:'党史上的今天',
                data:''
            }
        },
        methods:{
            getdata(){
                this.xhr.get('/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70503%2Findex.html')
                .then(res=>{
                    var p='ghkmgh<div class="p1_02 clearfix width884">q122  wdqwd'+
'qwdwd<div>hgjhj';
let str=res.replace(/\ +/g,""); 
str =str.replace(/[\r\n]+/g,"");      
                            this.data=a.exec(str) 
                        console.log(a.exec(res))
                        this.data=res
                })
            }
        },
        created(){
            this.getdata()
        }
    }
</script>
<style lang="scss" scoped>
.html{
    font-size: 14px;
    margin-top:-585px;
    html{
       /deep/ img{
        display: none !important;
        width: 0;
        height: 0;
    }
    /deep/ .copyright {
        display: none;
    }
    }
}
</style>
