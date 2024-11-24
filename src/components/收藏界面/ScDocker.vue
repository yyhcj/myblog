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
  block[0].style.transform = `translateX(${(a-1) * (5.3)}vw)`;
data.nowitem=a
emit('change',a)
}
</script>
<style scoped>
.docker-item{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 1.7vw;
    width:5.13vw;
    height:100%;
    background-color:gray;
    border:0.10vw solid black;
    transform:translateX(0px);
}
.docker-item:hover{
  cursor: pointer;
}
.outer{
    display:flex;
    margin-left:1.7vw;
    width:25.64vw;
    height:2.56vw;
    color:white;
    display:flex;
}
.moveblock{
    width:5.13vw;
    height:2.56vw;
    background-color:rgba(83,172,172,0.8);
    position:absolute;
    top:2vw;
    left:2vw;
    transition:transform 0.5s;
}



</style>
