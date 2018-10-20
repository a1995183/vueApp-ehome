<template>
    <div>
        <headerCom :title="name"></headerCom>
    </div>
</template>

<script>
    import headerCom from '@/components/header-Com'

    export default {
    components:{
        headerCom
    },
    data(){
        return{
            name:'修改密码'
        }
    }    
    }
</script>
<style lang="scss" scoped>

</style>
