// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import axios from 'axios'
axios.defaults.headers.common['token']="f4c902c9ae5a2a9d8f8486ad064e706"
axios.defaults.headers.post["Content-type"]="application/json"
Vue.prototype.$axios = axios
import VueResource from 'vue-resource'
Vue.use(VueResource)
import { Area } from 'vant';
Vue.use(Area);
import VDistpicker from 'v-distpicker'
Vue.component('v-distpicker', VDistpicker);
// Vue.directive('rainbow',{
//   bind(el,binding){
//     el.style.color = "red";
//   }
// })
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == "wide"){
      el.style.maxWidth = "1260px";
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = "560px"
    }
    if(binding.arg =='column'){
      el.style.background ='#6677cc';
      el.style.padding = "20px";
    }
  }
})
// Vue.filter("to-uppercase",function (value) {
//   return value.toUpperCase()
// })
// Vue.filter("snippet",function (value) {
//   return value.slice(0,100)+"..."
// })
Vue.config.productionTip = false

//全局守卫
// router.beforeEach((to,from,next)=>{
//   //alert("还没有登陆，请先登陆")
//   //判断store.gettes.isLogin ===false
//   if(to.path == '/linklogin'|| to.path =='/register'){
//     next();
//   }else{
//     alert("还没有登陆，请先登陆")
//     next('./linklogin');
//   }
// })

//后置钩子
// router.afterEach((to,from)=>{
//   alert("after each");
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
