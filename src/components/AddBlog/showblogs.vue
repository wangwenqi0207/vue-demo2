<template>
    <div class="show-blogs" v-theme:column="'narrow'">
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索"/>
      <div class="single-blog" v-for="(b,index) in filteredBlogs" :key='index'>
        <router-link  v-bind:to="'/blog/'+ b.id">
          <h2 v-rainbow>{{b.title}}</h2>
        </router-link>
        <article>
          {{b.body | snippet}}
        </article>
      </div>
    </div>
</template>

<script>
    export default {
      name: "showblogs",
      data() {
        return {
          blogs: [],
          search: ""
        }
      },
      created() {
        this.$http.get("https://jsonplaceholder.typicode.com/posts")
          .then(function (data) {
            //console.log(data);
            //只获取10条信息
            this.blogs = data.body.slice(0, 10);
            //console.log(this.blogs)
          })
      },
      computed: {
        filteredBlogs: function () {
          return this.blogs.filter((blog) => {
            return blog.title.match(this.search);
          })
        }
      },
      filters: {
        // "to-uppercase": function (value) {
        //   return value.toUpperCase()
        // },
        "snippet":function (value) {
          return value.slice(0,100)+"..."  //选取0-100的字然后后面是。。。
        }
      },
      //指令，将文字变为红色
      directives: {
        rainbow: {
          bind: function (el) {
            el.style.color = "red";
          }
        }
      }
    }
</script>

<style scoped>
.show-blogs{
  max-width: 800px;
  margin:0 auto;
}
.show-blogs h1{
  margin-bottom: 20px;
}
  .single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing: border-box;
    background: #eee;
    border:1px dotted #aaa;
  }
.single-blog article{
  margin-top: 20px;
}
.show-blogs a{
  color: #444;
  text-decoration: none;
}
  input[type="text"]{
    padding:8px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
