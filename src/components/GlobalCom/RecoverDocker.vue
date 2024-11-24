<template>
   <div class="recover" v-if="!flag">
    <button class="recoverbutton"  @click="recover">显示导航</button>
  </div>
</template>

<script setup>
import {showdocker} from '@/stores/showdocker'
import { watch,ref } from 'vue';

const store = showdocker();
const flag=ref(store.flag)
const recover = () => {
  store.showdocker();
};
watch(
  () =>store.flag, // 监听 showdocker 状态变化
  (newValue) => {
    console.log("re",newValue)
    flag.value = newValue;
  }
);
</script>

<style>
.recoverbutton{
  background-color: rgb(174, 243, 243);
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
}
.recover{
  color: white;
  position: absolute;
  top: 5vw;
  right: 5vw;
}
</style>