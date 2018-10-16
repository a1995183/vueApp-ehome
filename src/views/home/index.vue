<template>
    <div class="home_body">
           <div class="table">
        <van-tabbar v-model="active">
    <!-- <van-tabbar-item to="/home">
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active : icon.normal"
        >
      </van-tabbar-item> -->
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="chat" to="/notice">通知早知道</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/wddj">我的党建</van-tabbar-item>
</van-tabbar>
   </div>
   <div>
         <router-view></router-view>
   </div>
    </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
     data () {
    return {
        active: 0,
          icon: {
        normal: '../../img/home/党务公开.svg',
        active: '../../img/home/党务公开 (2).svg'
      },
}
}
}
</script>
 <style  scoped lang="scss">
/deep/ .van-tabbar-item--active{
color:#ef473a;
}
.van-tabbar-item--active{
    border-top: 2px solid #ef473a;
}
</style>
