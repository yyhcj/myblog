<template>
<div class="all">
  <div class="main"></div>
  <div class="beside"></div>
</div>
</template>

<script>

export default {
components:{
  
}
}
</script>

<style scoped>
 :root {
         --vh: 100vh;
         --vw: 100vw;
       }
.main{
  width: 100vw;
  height: 50vw;
  background-image: url('http://sm2n4r5ma.hn-bkt.clouddn.com/blog/back/back.jpg?scale=0.1');
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
</style>