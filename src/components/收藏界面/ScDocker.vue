<template>
  <div class="outer">
    <div class="docker-item" @click="move(1)">电影区</div>
    <div class="docker-item" @click="move(2)">游戏区</div>
    <div class="docker-item" @click="move(3)">音乐区</div>
  </div>
  <div class="moveblock"></div>
</template>
<script setup>
import { defineEmits } from 'vue';
import { reactive } from 'vue';

const data=reactive({
nowitem:1
})
const emit = defineEmits(['change'])
const move=(a)=>{
  const block=document.getElementsByClassName("moveblock")
  block[0].style.transform = `translateX(${(a-1) * (100+4)}px)`;
data.nowitem=a
console.log("a",a)
console.log("now",data.nowitem)
emit('change',a)
}
</script>
<style scoped>
.docker-item{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:20px ;
    width: 100px;
    height: 100%;
    background-color: gray;
    border: 2px solid black;
    transform: translateX(0px);
}
.outer{
    display: flex;
    margin-left: 20px;
    width: 500px;
    height: 50px;
    color: white;
    display: flex;
}
.moveblock{
    width: 100px;
    height: 50px;
    background-color: rgba(83, 172, 172, 0.8);
    position: absolute;
    top: 30px;
    left: 30px;
    transition:transform 0.5s;
}



</style>
