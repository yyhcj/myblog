<template>
<div class="back">
  <div class="button-container">
    <bt v-for="(item) in List" :key="item.id"  :text="item.name" @click="store(item.tag)"></bt>
  </div>
  <div class="detail-container">
    <detail></detail>
  </div>
</div>
</template>

<script setup>
import {ref} from 'vue'
import bt from "@/components/cjnb/LightButton.vue";
import detail from "@/components/cjnb/DetailCom.vue";
import {Cjnbstore} from '@/stores/cjnb_store'
const List = ref([
  { id: 1, name: '运动' ,tag:'sport'},
  { id: 2, name: '旅行' ,tag:'travel'},
  { id: 3, name: '学校' ,tag:'school'},
  { id: 4, name: '交友' ,tag:'friend'},
  { id: 5, name: '技能' ,tag:'skill'}
]);
const store = (tag)=>{
  const store = Cjnbstore()
  store.updatenowtag(tag)
  console.log(store.nowtag)
}
</script>

<style scoped>
.detail-container{
  width: 90vw;
  height: 32vw;
  margin-left:4% ;
  margin-top:50px ;
  border: 3px solid #fff;
  border-radius: 30px;
}
.button-container{
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vw;
}
.bt{
  margin-top: 100px;
}
.back{
  width: 100%;
  height: 975px;
  background: #000;
}
</style>