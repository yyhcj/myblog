<template>
<div class="all">
  <div class="main"></div>
  <div class="beside"></div>
  <WelcomeTitle class="welcome"></WelcomeTitle>
</div>
</template>

<script setup>
import WelcomeTitle from '../components/indexpage/WelcomeTitle.vue';

</script>

<style scoped>
 :root {
         --vh: 100vh;
         --vw: 100vw;
       }
.main{
  width: 100vw;
  height: 50vw;
  background-image: url('http://abc.cjnb.site/blog/back/back.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.beside{
  width: 100vw;
  height: 100vh;
  background-color: black;
}
.all{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.welcome{
  position: absolute;
  top: 0%;
  left: 80%;
}
</style>