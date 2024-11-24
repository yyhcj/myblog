<template>
    <LoginCom v-if="!isloginflag"></LoginCom>
  <div v-if="isloginflag">
    <InforWindow ref="Infor" :list="list" :api="api"></InforWindow>
    <el-button type="primary" @click="show">添加记录</el-button>
  </div>
</template>

<script setup>
import InforWindow from '../components/GlobalCom/InforWindow.vue';
import LoginCom from '../components/admin/LoginCom.vue';
import { ref,watch } from 'vue';
  //判断有没有权限访问
  import {islogin} from '@/stores/islogin'
const store = islogin();
const isloginflag=ref(store.isloginvalue)
watch(() => store.isloginvalue, () => {
  isloginflag.value = store.isloginvalue;
  console.log(isloginflag.value)
});
//获取子组件
const list=ref(["img","type","title"])
const api='http://120.46.52.202:3000/addcjnb'
const Infor = ref(null)
const show=()=>{
  Infor.value.isvisible=true
}
</script>

<style>

</style>