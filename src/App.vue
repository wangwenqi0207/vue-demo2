<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  // import blogheader from './components/AddBlog/bolgheader'
  // import vuenav from './components/vuenav'
  export default {
  name: 'App',
  components:{
    //blogheader
    // vuenav
  }
}
</script>

<style>
body,div,dl,dt,dd,ul,li,h1,h2,h3,h4,h5,h6,code,form,input,textarea,p,th,td,fieldset,legend,figure{
  margin:0;
  padding:0;
}

body{
  font-family:"微软雅黑",Arial;
  /*text-align: center;*/
}
ul,ol{
  list-style:none;
}
a{
  text-decoration:none;
}
img{
  border:0;
}
</style>
