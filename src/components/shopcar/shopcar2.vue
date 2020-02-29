<template>
    <div>
      <div id="app" v-cloak>
        <template v-if="list.length">
          <table>
            <thead>
            <tr>
              <th></th>
              <th>商品名称</th>
              <th>商品单价</th>
              <th>购买数量</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <!--注意v-for有可选参数键名和索引(value,key,index)-->
            <tr v-for='(item,index) in list'>
              <td>
                {{index+1}}
              </td>
              <td>
                {{item.name}}
              </td>
              <td>
                {{item.price}}
              </td>
              <td>
                <button @click="handleReduce(index)" :disabled="item.count === 1">-</button>
                {{item.count}}
                <button @click="handleAdd(index)">+</button>
              </td>
              <td>
                <button @click="handleRemove(index)">移除</button>
              </td>
            </tr>
            </tbody>
          </table>
          <div>总价：¥{{totalPrice}}</div>
        </template>
        <div v-else>
          购物车为空
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "shopcar2",
      data() {
        return {
          list: [{
            id: 1,
            name: 'iphone 7',
            price: 6188,
            count: 1
          },
            {
              id: 2,
              name: 'iphone 8',
              price: 7188,
              count: 1
            },
            {
              id: 3,
              name: 'iphone X',
              price: 8188,
              count: 1
            },
          ]
        }
      },

      methods: {
        handleReduce: function(index) {
          if(this.list[index].count === 1) return;
          this.list[index].count--;
        },
        handleAdd: function(index) {
          this.list[index].count++;
        },
        handleRemove: function(index) {
          this.list.splice(index, 1);
        }
      },

      computed: {
        totalPrice: function() {
          var total = 0;
          for(var i = 0, len = this.list.length; i < len; i++) {
            total += this.list[i].price * this.list[i].count;
          }
          //每隔三位加一个逗号
          return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
      }
    }
</script>

<style scoped>
  [v-cloak]{
    display: none;
  }
  table{
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
  }
  th,td{
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }
  th{
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
  }
</style>
