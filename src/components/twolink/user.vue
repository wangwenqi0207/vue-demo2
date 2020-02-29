<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">个人信息</div>
    <div class="card-body">
      <h4 class="card-title">个人信息</h4>
      <p class="card-text">个人信息</p>
    </div>
    <router-link to="/myphone">我的电话</router-link>
    <router-link to="/myname">我的名字</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "user"
    }
</script>

<style scoped>

</style>
