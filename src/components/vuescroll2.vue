<template>
  <!--on-refresh：下拉刷新-->
  <!--on-infinite：上拉加载-->
  <scroller class="scroller" ref="my_scroller" :on-infinite="infinite" :on-refresh ="refresh" :noDataText="noDataText" ></scroller>

</template>

<script>
    export default {
        name: "vuescroll2",
      data(){
        return{
          p:0,
          list:[],
          loading:true,
          noDataText:"没有更多了"
        }
      },
      methods: {
        getList(done){
          let url = "http://www.baidu.com";
          let p = this.p;
          let that = this;

          if(this.loading == true){
            this.loading = false;

            //你的ajax
            this.$ajax({url: url, params: {p: p}
            }).then(response =>{
              let list = response.data;

              if (list.length) {
                if(that.p == 0) that.list = [];     //下拉刷新时重置数组

                list.forEach((v, k) => {
                  that.list.push(v);
                })

                that.p++;

                that.loading = true;

                //                        that.$refs.my_scroller.finishInfinite(true);   //有数据停止无限加载,可用done代替
                done(true);
              }else{
                //                        that.$refs.my_scroller.finishInfinite(2);     //无数据停止无限加载,可用done代替
                done(2);
              }
            });
          }else{
            done(2);
          }
        },
        //上拉加载
        infinite: function (done) {
          console.log('infinite')
          this.getList(done);
          this.$refs.my_scroller.finishPullToRefresh();
        },
        //下拉刷新
        refresh: function (done) {
          console.log('refresh');
          this.p = 0;
          this.loading = true;
          this.getList(done);
        },
      },

    }
</script>

<style scoped>
  .scroller{ padding-top:50px;}
</style>
