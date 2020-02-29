<template>
    <div id="add-blog">
      <h2>添加博客</h2>
      <form v-if="!submmited">
        <label for="" class="">博客标题</label>
        <input class="" type="text" v-model="blog.title" required/>
        <br/>
        <label for="" class="">博客内容</label>
        <textarea class="" v-model="blog.content"></textarea>
        <div id="checkboxs">
          <label for="">Vue.js</label>
          <input type="checkbox" value="vue.js" v-model="blog.categories"/>
          <label for="">react.js</label>
          <input type="checkbox" value="react.js" v-model="blog.categories"/>
          <label for="">javasript</label>
          <input type="checkbox" value="javasript.js" v-model="blog.categories"/>
          <label for="">css</label>
          <input type="checkbox" value="css" v-model="blog.categories"/>
        </div>
        <label for="">作者：</label>
        <select v-model="blog.author">
          <option v-for="(i,index) in authors" v-bind:value="authors[index]" :key='index'>
            {{i}}
          </option>
        </select>
        <button v-on:click.prevent="post">添加博客</button>
      </form>
      <div v-if="submmited">
        <h3>您的博客发布成功</h3>
      </div>
      <hr/>
      <div id="preview">
        <h3>博客总览</h3>
        <p>博客标题：</p>
        <p class="color">{{blog.title}}</p>
        <p>博客内容：</p>
        <p class="color">{{blog.content}}</p>
        <p>博客分类</p>
        <ul>
          <li v-for="(categories,index) in blog.categories" class="color" :key='index'>
            {{categories}}
          </li>
        </ul>
        <p>作者：</p>
        <p class="color">{{blog.author}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "addblog",
      data(){
          return{
            blog:{
              title:"",
              content:"",
              categories:[],
              author:""
            },
            authors:[
              "张三","李四","王五"
            ],
            submmited:false
          }
      },
      methods:{
          post:function () {
            this.$http.post("https://jsonplaceholder.typicode.com/posts/",this.blog)
              // title:this.blog.title,
              // body:this.blog.content,
              // userId:1,
            .then(function (data) {
              console.log(data);
              this.submmited=true
            })
          }
      },
    
    }
</script>

<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding:20px;
}
  label{
    display: block;
    margin:20px 0 10px;
  }
  input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }
  textarea{
    height: 200px;
  }
  #checkboxs label{
    display: inline-block;
    margin-top: 0;
  }
  #checkboxs input{
    display: inline-block;
    margin-right: 10px;
  }
  button{
    display: block;
    margin:20px 0;
    background: crimson;
    border:0;
    padding:14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    color: white;
  }
  #preview{
    padding:10px 20px;
    border: 1px dotted #ccc;
    margin:30px 0;
  }
  .color{
    color: blue;
  }
</style>
