// 城市级联选择
<template>
    <div>
    <li>
    <div class="right r">
        <div class="city" @click="toAddress">{{city}}</div>
        <i class="arrow-r"> </i>
    </div>
    </li>
    <v-distpicker type="mobile" @selected='selected' v-show="addInp">
    </v-distpicker>
    <div class="mask" v-show="mask"></div>
    </div>
</template>


<script>
import VDistpicker from 'v-distpicker'
export default {
    name:"citychoose",
    components: { VDistpicker },
        data() {
            return {
              city:'点击我选择',
              addInp :false,
              mask:false
  
            }
        },
        
        methods: {
            // 点击弹出三级联动
    toAddress(){
        this.mask = true;
        this.addInp = true;
},
 // 省市区三级联动
    selected(data){
        this.mask =false;
        this.addInp = false;
        this.city = data.province.value + ' ' + data.city.value +' ' + data.area.value
      },
        },
        mounted(){
      
    }
}
</script>

<style>
li{
    list-style: none;
}
.left{
    width: 100%;
    height: 40px;
} 
</style>
