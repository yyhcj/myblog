<template>
  <div class="outer">
    <div class="card" v-for="(item) in list" :key="item.id">{{ item.title }}</div>
   
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref,watch } from 'vue';
import { Cjnbstore } from '../../stores/cjnb_store';
const store = Cjnbstore();
const nowtag = ref(store.nowtag);
const list=ref([])
watch(() => store.nowtag, () => {
  nowtag.value = store.nowtag;
  getdata();
});
const getdata=()=>{
    axios.post('http://120.46.52.202:3000/getcjnb',{type:nowtag.value}).then((res)=>{
    list.value=res.data
    })
}
getdata()
</script>
<style scoped>
.img1{
    width: 100%;
    height: 100%;
}
.body{
    transform-style: preserve-3d;
    width: 100px;
    height: 200px;
    background-color: rgb(187, 21, 57);
}
.hiden{
    width: 1000px;
    height: 500px;
    background-color: brown;
}
.outer{
    height: 100%;
    display: flex;
    border-radius: 30px;
    justify-content: space-around;
    align-items: center;
   
}

.test{
    position: absolute;
    top: 270px;
    left: 95px;
    width: 1700px;
    height: 640px;
    background-color: rgb(187, 21, 57);
    z-index: 0;
    opacity: 0;
}
.card{
    width: 15%;
    height: 60%;
    height: 60%;
    background-color: aqua;
    overflow: hidden;
    transition:3s;
    transform-origin: 5% 50%;
    
}
</style>