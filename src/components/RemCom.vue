<template>
  <router-link to="/rem/review"><div class="main-item">翻旧账</div></router-link>
  <router-link to="/rem/mark"><div class="main-item">记新账</div></router-link>
  <router-link to="/rem/review"><div class="main-item">数据统计</div></router-link>
  <div class="main-item">其他功能</div>
  <router-view />
</template>

<script>
export default {
methods:{
   
}
}
</script>

<style>
.main-item{
  display: inline-block;
  width: 200px;
  height: 100px;
  margin: 50px;
  background-color: bisque;
}
</style>