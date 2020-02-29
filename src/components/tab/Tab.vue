<template>
    <div>
      <div id="tab">
        <div class="tab-tit">
          <!--点击设置curId的值  如果curId等于0，第一个a添加cur类名，如果curId等于1，第二个a添加cur类名，以此类推。添加了cur类名，a就会改变样式 @click,:class ,v-show这三个是vue常用的指令或添加事件的方式-->
          <a href="javascript:;" @click="curId=0" :class="{'cur':curId===0}">html</a>
          <a href="javascript:;" @click="curId=1" :class="{'cur':curId===1}">css</a>
          <a href="javascript:;" @click="curId=2" :class="{'cur':curId===2}">javascript</a>
          <a href="javascript:;" @click="curId=3" :class="{'cur':curId===3}">vue</a>
        </div>
        <div class="tab-con">
          <!--根据curId的值显示div,如果curId等于0，第一个div显示，其它三个div不显示。如果curId等于1，第二个div显示，其它三个div不显示。以此类推-->
          <div v-show="curId===0">
            html<br/>
          </div>
          <div v-show="curId===1">
            css
          </div>
          <div v-show="curId===2">
            javascript
          </div>
          <div v-show="curId===3">
            vue
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Tab",
        data() {
          return{
            curId: 0,
            name:'小羽'
          }
        },
      //进入时获取用户名
      //   beforeRouteEnter:(to,from,next)=>{
      //       //alert('hello'+this.name);
      //     next(vm=>{
      //       alert("Hello " +vm.name);
      //     })
      //   },
      //询问是否要离开
      // beforeRouteLeave(to,form,next){
      //     if(confirm("确定离开吗？")==true) {
      //       next()
      //     }else{
      //       next(false)
      //     }
      // },
        computed: {},
        methods: {},
        mounted: function () {
        }
    }
</script>

<style scoped>
  #tab{
    width: 600px;
    margin: 0 auto;
  }
  .tab-tit{
    font-size: 0;
    width: 600px;
  }
  .tab-tit a{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    width: 25%;
    text-align: center;
    background: #ccc;
    color: midnightblue;
    text-decoration: none;
  }
  .tab-tit .cur{
    background: yellowgreen;
    color: #fff;
  }
  .tab-con div{
    border: 1px solid #ccc;
    height: 400px;
    padding-top: 20px;
  }
</style>
