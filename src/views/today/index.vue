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
                        // const a=/<div\sclass="p1_02\sclearfix\swidth884">[\d|\D|\s|\S|\r|\n]{1,}<div>/g;
                        //     this.data=a.exec(res) 
                        // console.log(a.exec(res))
                        this.data=res
                        console.log(this.data)
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
