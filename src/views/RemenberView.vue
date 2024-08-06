<template>
  <img src="../assets/back.jpg" alt="">
  <div class="mai">
  <RemView></RemView>

  </div>
</template>

<script>
import RemView from '../components/RemCom.vue'
export default {
components:{
  RemView
}
}
</script>

<style scoped>
img{
  position: relative;
  opacity: 0.7;
}
.mai{
position: absolute;
top: 50px;
left: 50px;
}
</style>