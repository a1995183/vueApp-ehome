import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '../views/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
  component:home,
  redirect:'/login',
  children:[
        {
          path:'home',
          meta:{
            title:'首页'
          },
        component:HelloWorld
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
      path:'/newseye',
      meta:{
        title:'信工新闻眼',
      },
      component:()=>import('@/views/newseye')
    },
    {
      path:'/login',
      meta:{
        title:'登录页'
      },
      component:()=>import('@/views/login')
    }
   
  ]
})
