<template>
<div class="title">俊哥严选</div>
<div class="item-container">
  <div class="item" v-for="(item,index) in list" :key="index" @click="godetail(item.musicid,item.musicpath,item.gecipath)">
    <img :src=item.img alt="">
  </div>
</div>
</template>



<script setup>
import {scpage} from '@/stores/scpage_store'
import {musicdata} from '@/stores/music_play_store'

import {ref, watch} from 'vue'
const store = scpage();
const list = ref([])
list.value = store.now_likebest_list
watch(() => store.now_likebest_list, () => {
  list.value = store.now_likebest_list
  console.log(list.value)
})
//存储musicid用于查询
const storeid=(id)=>{
  const store = musicdata();
  store.update_id(id)
}
const godetail = (id)  => {
if(id){
  storeid(id)
    location.href='/#/music'
}
else{
  return
}

}

</script>

<style scoped>
.title{
  font-size: 30px;
  font-weight: bold;
  color: #333;
  text-align: left;
  margin-left: 3vw;
  margin-top: 20px;
}
.item-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-left: 3vw;
  margin-top: 20px;
}
img{
  width: 15vw;
}
.item{
  height: 20vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>