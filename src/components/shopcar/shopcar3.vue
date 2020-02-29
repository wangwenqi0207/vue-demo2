<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-lg-1 col-md-1"  @change="checked">
          <!-- 用 v-model 指令在表单 <input> 及 <textarea> 元素上创建双向数据绑定 -->
          <input type="checkbox" id="none" value="false" ref="checkBox_"  >
          <label for="none">全选</label>
        </div>
        <div class="col-lg-1 col-md-1">序号</div>
        <div class="col-lg-3 col-md-3">图片</div>
        <div class="col-lg-3 col-md-3">价格</div>
        <div class="col-lg-2 col-md-2">数量</div>
        <div class="col-lg-2 col-md-2">金额</div>
      </div>
      <!-- v-for循环 -->
      <div class="row" v-for="(good,index) in data_">
        <div class="col-lg-1 col-md-1" @change="check_isAll">
          <input type="checkbox" v-model="good.checked">
        </div>
        <div class="col-lg-1 col-md-1">{{index+1}}</div>
        <div class="col-lg-3 col-md-3">
          <img :src="good.img" alt="">
        </div>
        <div class="col-lg-3 col-md-3">{{good.price}}</div>
        <div class="col-lg-2 col-md-2">
          <span @click="good.num<1?0:good.num--">-</span>
          <span class="num" contenteditable="true">{{good.num}}</span>
          <span @click="good.num++">+</span>
        </div>
        <!-- 计算出当前选项总金额 -->
        <div class="col-lg-2 col-md-2">{{good.price * good.num}}</div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6"></div>
        <!-- 使用calc()进行选择件数和进行总价的计算 -->
        <div class="col-lg-3 col-md-3">
          共选择了<span>{{calc().cnt}}</span>件商品
        </div>
        <div class="col-lg-3 col-md-3">
          总计<span>{{calc().totalPrice}}</span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  // $(function () {
  //   alert(123);
  // });
  export default {
      name: "shopcar3",
      data() {
        return {
          data_: [{
            id: 1,
            name: '小吃1',
            img: 'img/0.jpg',
            price: '26.00',
            num: 0,
            checked: false
          }, {
            id: 2,
            name: '小吃2',
            img: 'img/1.jpg',
            price: '25.00',
            num: 0,
            checked: false
          }, {
            id: 3,
            name: '小吃3',
            img: 'img/2.jpg',
            price: '20.00',
            num: 0,
            checked: false
          }, {
            id: 4,
            name: '小吃4',
            img: 'img/3.jpg',
            price: '18.00',
            num: 0,
            checked: false
          }, {
            id: 5,
            name: '小吃5',
            img: 'img/4.jpg',
            price: '16.00',
            num: 1,
            checked: false
          }]
        }
      },
      mounted(){
        var goodObj=localStorage.goods?JSON.parse(localStorage.goods):goods;
        this.check_isAll();
      },
      methods:{
        update:function(){
          localStorage.setItem('goods',JSON.stringify(this.$data));//更新函数，在每次有变化都需要调用并修改localstroage
        },
        // 判断是否页面所有单选按钮是不是被选中，如果均选中则全选按钮默认被选中
        check_isAll(){
          var check_el=document.getElementById('none');
          if(this.isAllselect()){
            check_el.checked=true;
          }else{
            check_el.checked=false;
          }
          this.update();
        },
        //全选
        checked(){
          // 获取当前全选按钮状态，并给单选按钮赋相对应的值
          var el=event.target;
          var check_=el.checked;
          // debugger;
          for(var i = 0;i < this.data_.length;i++){
            this.data_[i].checked=check_;
          }
          this.update();
        }
        ,
        // 使用数组every方法判断是否全选中单选按钮
        isAllselect:function(){
          return this.data_.every(function(item){
            // console.log(index);
            return item.checked==true;
          })
        },
        // 计算相关的总数量个总金额
        calc:function(){
          var pro=this.data_.filter(function(item){
            return item.checked==true;
          });
          var totalPrice=0;
          for(var i = 0; i < pro.length;i++){
            totalPrice+=pro[i].price*pro[i].num;
          }
          return {cnt:pro.length,totalPrice:totalPrice}
        }
      }

    }
</script>

<style scoped>
  .container{
    text-align: center;
  }
  .container .row{
    /*height: 100px;*/
    border: 1px solid #eee;
  }
  img{
    width: 100px;
    height: 100px;
    vertical-align: middle;
  }
  span{
    width: 20px;
    height: 20px;
    border: 1px solid #999;
    background:#eee;
    display:inline-block;
  }
  .num{
    background:transparent;
    border-left: none;
    border-right: none;
  }
</style>
