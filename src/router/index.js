import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Tab from '@/components/tab/Tab'
import shopcar from '@/components/shopcar/shopcar'
import todolist from '@/components/todolist/todolist'
import shopcar2 from '@/components/shopcar/shopcar2'
import shopcar3 from '@/components/shopcar/shopcar3'
import Baidusearch from '@/components/Baidusearch/Baidusearch'
import login from '@/components/login/login'
import game from '@/components/game/game'
import login2 from '@/components/login/login2'
import login3 from '@/components/login/login3'
import about from '@/components/twolink/about'
import linklogin from '@/components/twolink/linklogin'
import register from '@/components/twolink/register'
import vuerequest from '@/components/vuerequest'
import AddBlog from '@/components/AddBlog/addblog'
import showblogs from '@/components/AddBlog/showblogs'
import singleblogs from '@/components/AddBlog/singleblogs'
import todolist2 from '@/components/todolist2'
import topscroll from '@/components/topscroll'
import vuescroll2 from '@/components/vuescroll2'
import upfile from '@/components/upfile/upfile'
import citychoose from '@/components/citychoose/citychoose'
//二级路由
import home from '@/components/twolink/home'
import news from '@/components/twolink/news'
import project from '@/components/twolink/project'
import user from '@/components/twolink/user'

//三级路由
import myname from '@/components/twolink/myname'
import myphone from '@/components/twolink/myphone'

Vue.use(Router)

const router = new Router({
  mode:"history",
  routes: [
    {
      path: '/citychoose',
      name: 'citychoose',
      component: citychoose
    },
    {
      path: '/upfile',
      name: 'upfile',
      component: upfile
    },
    {
      path: '/vuescroll2',
      name: 'vuescroll2',
      component: vuescroll2
    },
    {
      path: '/topscroll',
      name: 'topscroll',
      component: topscroll
    },
    {
      path: '/todolist2',
      name: 'todolist2',
      component: todolist2
    },
    {
      path: '/showblogs',
      name: 'showblogs',
      component: showblogs
    },
    {
      path: '/blog/:id',
      name: 'singleblogs',
      component: singleblogs
    },
    {
      path: '/AddBlog',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/linklogin',
      name: 'linklogin',
      component: linklogin
    },
    {
      path: '/vuerequest',
      name: 'vuerequest',
      component: vuerequest
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login3',
      name: 'login3',
      component: login3
    },
    {
      path: '/login2',
      name: 'login2',
      component: login2
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      redirect: '/about/home',
      children: [
        {
          path: '/about/home',
          name: 'home',
          component: home,
        },
        {
          path: '/about/news',
          name: 'news',
          component: news
        },
        {
          path: '/about/project',
          name: 'project',
          component: project
        },
        {
          path: '/about/user',
          name: 'user',
          component: user,
          children: [
            {
              path: '/myphone', name: myphone, component: myphone
            },
            {
              path: '/myname', name: myname, component: myname
            },
          ]
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Tab',
      name: 'Tab',
      component: Tab,
      // beforeEnter: (to, from, next) => {
      //   //路由独享守卫
      //   // alert("非登陆状态，不能访问此页面");
      //   // next(false)
      //   if (to.path == '/linklogin' || to.path == '/register') {
      //     next();
      //   } else {
      //     alert("还没有登陆，请先登陆")
      //     next('./linklogin');
      //   }
      // }
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: todolist
    },
    {
      path: '/shopcar2',
      name: 'shopcar2',
      component: shopcar2
    },
    {
      path: '/shopcar3',
      name: 'shopcar3',
      component: shopcar3
    },
    {
      path: '/Baidusearch',
      name: 'Baidusearch',
      component: Baidusearch
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    //用户路径输入错误时，跳转至哪个页面
    {
      path: '*',
      redirect: '/'
    }
  ]
})
export default router
