<template>
  <div id="app">
    <p>
      <input @change="checkname" type="text" v-model="name" placeholder="用户名">
      <span>{{msgame}}</span>
    </p>
    <p>
      <input @change="checkemail" type="text" v-model="email" placeholder="邮箱">
      <span>{{msgmail}}</span>
    </p>
    <p>
      <input @change ="checkphone" type="text" v-model = "phone" placeholder="手机" id="phone">
      <span>{{msgphone}}</span>
    </p>
    <p>
      <input @change="checkpassword" type="password" v-model="password" placeholder="密码" id="test">
      <span>{{msgpassword}}</span>
    </p>
    <p>
      <input @change="checkpwd" type="password" v-model="pwd" placeholder="重复密码" id="test1">
      <span>{{msgpwd}}</span>
    </p>
    <p>
        <span v-for="item,index in sex">
            <input type="radio" name="sex" :value="index">{{item}}
        </span>
    </p>
    <p>
      <input @change="checkage" type="number" v-model="age" placeholder="年龄">
      <span>{{msgage}}</span>
    </p>
    <p>
      <textarea v-model="desc"></textarea>
    </p>
    <p>
      <input type="datetime-local" v-model="birthday">
    </p>
    <p>
      <select >
        <option :value="index" v-for="item,index in city">{{item}}</option>
      </select>
    </p>
  </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return{
            msgame:"",
            msgmail:"",
            msgpassword:"",
            msgpwd:"",
            msgage:"",
            msgphone:"",
            name:"",
            email:"",
            password:"",
            pwd:"",
            phone:"",
            age:"",
            desc:"hello",
            birthday:"",
            sex:{
              girl:"女",
              boy:"男",
            },
            city:{
              "sz":"宿州",
              "cz":"滁州",
              "la":"六安",
              "hn":"淮南",
            }
          }
      },
      methods:{
        checkname:function(){
          if(this.name=""){
            this.msgame = "用户名不能为空";
          }else{
            this.msgame ="";
          }
        },
        checkemail:function(){
          var regEmail=/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
          if(this.email==''){
            this.msgmail="请输入邮箱";
          }else if(!regEmail.test(this.email)){
            this.msgmail="邮箱格式不正确";
          }
        },
        checkpassword:function(){
          var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;//
          var value = $('#test').val();
          if(this.password==""){
            this.msgpassword = "密码不能为空"
          }else if(!pwdReg.test(value)){
            this.msgpassword = "密码不合法";
          }else{
            this.msgpassword = "密码合法";
          }
        },

        checkpwd:function(){
          if(this.pwd==""){
            this.msgpassword ="密码不能为空"
          }else if(this.pwd !=this.password){
            this.msgpwd = "输入密码保持一致"
          }else{
            this.msgpwd ="输入密码正确"
          }
        },
        checkphone:function(){
          var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
          if(this.phone==""){
            this.msgphone="手机号不能为空";
          }else if(!myreg.test($("#phone").val())){
            this.msgphone="请输入有效的手机号码";
          }else{
            this.msgphone="输入正确"
          }
        },
        checkage:function(){
          if(this.age==""){
            this.msgage = "年龄不能为空"
          }else{
            this.msgage="输入正确"
          }
        },
      }
    }
</script>

<style scoped>

</style>
