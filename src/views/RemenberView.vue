<template>
 
  <div class="mai">
  <RemView></RemView>
  <LoginCom class="login"></LoginCom>
  </div>
</template>

<script>
import RemView from '../components/WePage/BackphotosCom.vue'
import LoginCom from '@/components/WePage/LoginCom.vue'
export default {
components:{
  RemView,
LoginCom
}
}
</script>

<style scoped>
.login{
  position: fixed;
  top: 35%;
  left: 25vw;

}
</style>