<template>
    <nav>
      <ul>
        <li>
          <router-link to="/" exact>博客</router-link>
          <router-link to="/AddBlog" exact>写博客</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "bolgheader"
    }
</script>

<style scoped>
  ul{
    list-style-type: none;
    text-align: center;
    margin:0;
  }
  li{
    display: inline-block;
    margin:0 10px;
  }
  a{
    color:rgb(102, 119, 204);
    text-decoration: none;
    padding:12px;
    border-radius: 5px;
    font-size:20px;
  }
  nav{
    background: #eee;
    padding: 30px 0;
    margin-bottom: 40px;
  }
  .router-link-active{
    background: rgba(255,255,255,0.8);
    color: gray;
  }
</style>
