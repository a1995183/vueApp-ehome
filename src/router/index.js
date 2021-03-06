import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
  component:home,
  redirect:'/home',
  children:[
        {
          path:'home',
          meta:{
            title:'首页'
          },
        component:()=>import('@/views/home/home.vue')
        },
        {
          path:'notice',
          meta:{
            title:'notice',
          },
          component:()=>import('@/views/notice')
        },{
          path:'wddj',
          meta:{
            title:'我的党建'
          },
          component:()=>import('@/views/wddj')
        }

  ]
    },
    {
      path:'/mystudy/:id',
      meta:{
        title:'随时随地学'
      },
      component:()=>import('@/views/gostudy')
    },
    {
      path:'/login',
      meta:{
        title:'登录页'
      },
      component:()=>import('@/views/login')
    },
    {
      path:'/life',
      meta:{
        title:'掌上组织生活'
      },
      component:()=>import('@/views/life')
    },
    {
      path:'/choice',
      meta:{
        title:'思想总结'
      },
      component:()=>import('@/views/choice')
    },
    {
      path:'/today',
      meta:{
        title:'党史上的今天'
      },
      component:()=>import('@/views/today/index.vue')
    },
    {
      path:'/anywhere',
      meta:{
        title:'随时随地学'
      },
      component:()=>import('@/views/anywhere')
    },
    {
      path:'/anywherephoto',
      meta:{
        title:'随时随地拍'
      },
      component:()=>import('@/views/anywherephoto')
    },
    {
      path:'/system',
      meta:{
        title:'制度建设'
      },
      component:()=>import('@/views/system')
    },
    {
      path:'/activity',
      meta:{
        title:'特色活动'
      },
      component:()=>import('@/views/activity')
    },
    {
      path:'/Interaction',
      meta:{
        title:'党员云互动'
      },
      component:()=>import('@/views/Interaction')
    },
    {
      path:'/user',
      meta:{
        title:'修改个人信息'
      },
      component:()=>import('@/views/user')
    },
    {
      path:'/score',
      meta:{
        title:'个人量化积分'
      },
      component:()=>import('@/views/score')
    },
    {
      path:'/upPsw',
      meta:{
        title:'修改密码'
      },
      component:()=>import('@/views/upPsw')
    },
    {
      path:'/pay',
      meta:{
        title:'缴费党费'
      },
      component:()=>import('@/views/pay')
    },
    {
      path:'/newsList/:url/:name',
      meta:{
        title:'缴费党费'
      },
      component:()=>import('@/components/newsList')
    },
    {
      path:'/map',
      meta:{
        title:'流动党员找组织'
      },
      component:()=>import('@/views/map')
    },
    
   
  ]
})
