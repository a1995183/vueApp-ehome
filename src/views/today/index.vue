<template>
    <div>
        <headerCom :title="name"></headerCom>
    </div>
</template>
<script>
    import HeaderCom from '@/components/header-Com'
    import xhr from '@/utils/index.js'
    export default {
        components:{
            HeaderCom
        },
        data(){
            return{
                name:'党史上的今天'
            }
        },
        methods:{
            getdata(){
//                 xhr.get('/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70503%2Findex.html')
//                 .then(res=>{
//                     // const p=/^(<div class="p1_02 clearfix width884">){1,1}\d+(<div>)$/gm;
//                     // const p=/<div[^>/]*class="p1_02 clearfix width884">(.*?)<\/div>/g;
// const a=/<div\sclass="p1_02\sclearfix\swidth884">[\d|\D|\s|\r|\n]{1,}<div>/g;
//                     this.data=a.exec(res.data) 
//                 console.log(res.data)
//                 console.log(this.data)
//                 })
            }
        },
        created(){
            this.getdata()
        }
    }
</script>
<style lang="scss" scoped>

</style>
