<template>
    <div>
      <div class="row mb-5">
        <div class="col-4">
          <div class="list-group mb-5">
            <router-link tag="li" class="nav-link" to="/about/home">
              <a class="list-group-item list-group-item-action">爱的小屋</a>
            </router-link>
            <router-link tag="li" class="nav-link" to="/about/news">
              <a class="list-group-item list-group-item-action">个人新闻</a>
            </router-link>
            <router-link tag="li" class="nav-link" to="/about/project">
              <a class="list-group-item list-group-item-action">我的项目</a>
            </router-link>
            <router-link tag="li" class="nav-link" to="/about/user">
              <a class="list-group-item list-group-item-action">个人信息</a>
            </router-link>
          </div>
        </div>
        <div class="col-8">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "about",
    }
</script>

<style scoped>

</style>
