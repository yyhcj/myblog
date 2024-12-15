<template>
  <div class="outer">
  <div class="card" v-for="(item) in list" :key="item.id">
    <div class="side1">{{ item.title }}</div>
    <div class="side2"><img :src="item.img" alt=""></div>
  </div>
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
/*包含所有卡片的容器*/
.outer{
    height: 100%;
    display: flex;
    border-radius: 30px;
    justify-content: space-around;
    align-items: center;
   
}
/*卡片整体*/
.card{
    position: relative;
    width: 15%;
    height: 60%;
    height: 60%;
    perspective: 500px;
    transition:2s;
    transform-origin: 5% 50%; 
}
/* side1是正面，side2是反面 */
.side1,.side2{
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: 2s;
    position: absolute;
    border-radius: 10%;

}
.side1{
    display: flex;
    font-size: 32px;
    align-items: center;
    justify-content: center;
    background-color: aquamarine;
    z-index: 2;
}
.side2{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: beige;
    z-index: -1;
    transform: rotateY(180deg);
}
/* 鼠标悬停时翻转 */
.card:hover .side1{
    transform: rotateY(-180deg);
}
.card:hover .side2{
    transform: rotateY(0deg);
}
img{
    width: 100%;
}
</style>