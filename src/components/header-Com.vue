<template>
   <div class="header-top">
            <i class="link"   @click="go"><img src="../img/gostudy/返回 (1).svg" alt=""></i>
            <p>{{title}}</p>
        </div>
</template>

<script>
export default {
  name:'',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
    }
  },
  components: {
  },
  methods: {
    go(){
      history.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
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
    line-height: 10px;
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

</style>