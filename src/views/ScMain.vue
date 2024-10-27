<template>
  <div class="body">
    <ScDocker class="docker" @change="changefn"></ScDocker>
    <RoundPhoto></RoundPhoto>
    <ItemContainer></ItemContainer>
  </div>
</template>

<script setup>
import axios from 'axios';
import ItemContainer from '../components/收藏界面/ItemContainer.vue';
import RoundPhoto from '../components/收藏界面/RoundPhoto.vue';
import ScDocker from '../components/收藏界面/ScDocker.vue';
import {ref} from 'vue'
import {scpage} from '@/stores/scpage_store'
const changefn=(a)=>{
nowflag.value=a
headerdocker()
getdatalist()
}
const nowflag=ref(1)
const headerdocker=()=>{
}
//获取当前页的数据存到pinia仓库中
const getdatalist=()=>{
  const store = scpage();
  const keyword=ref('')

  if(nowflag.value==1){
     keyword.value='movie'
  }else if(nowflag.value==2){
    keyword.value='game'
  }
  else if(nowflag.value==3){
    keyword.value='music'
  }

  axios.post('http://120.46.52.202:3000/get_sc_miandata',{keyword:keyword.value,type:'round'}).then(response => {
    store.update_round(response.data)
  })
  axios.post('http://120.46.52.202:3000/get_sc_miandata',{keyword:keyword.value,type:'lovebest'}).then(response => {
    store.update_like(response.data)
  })
  axios.post('http://120.46.52.202:3000/get_sc_miandata',{keyword:keyword.value,type:'lovebast'}).then(response => {
    store.update_normal(response.data)
  })
}
getdatalist()

</script>

<style scoped>
.body{
    background-color: black;
    width: 100vw;
    height: 975px;
    
}
.docker{
  float: top;
}
.text{
  height: 500px;
  width: 100%;
  background-color: white;
}

</style>