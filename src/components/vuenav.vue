<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="py-2" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
        </a>
        <router-link to="/Baidusearch" class="navbar-brand">百度搜索</router-link>
        <ul class="navbar-nav">
          <li><router-link to="/game" class="nav-link">游戏</router-link></li>
          <li><router-link to="/Tab" class="nav-link">选项卡</router-link></li>
          <li><router-link to="/shopcar3" class="nav-link">购物车</router-link></li>
          <li><router-link to="/about" class="nav-link">about</router-link></li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li><router-link to="/linklogin" class="nav-link">登陆</router-link></li>
          <li><router-link to="/register" class="nav-link">注册</router-link></li>
        </ul>
      </nav>
      <!--<button @click="gotolink" class="btn btn-success">点击跳转页面</button>-->
    </header>
</template>

<script>
    export default {
        name: "vuenav",
      methods:{
        gotolink(){
          //点击跳转至上次浏览页面
         // this.$router.go(-1)
          //指定跳转地址
          this.$router.replace('/login')
        }
      }
    }
</script>

<style scoped>

</style>
