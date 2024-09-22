<template>
  <div class="Item-Container">
    <div class="title"><slot></slot></div>
    <div class="photo-container" >
      <div class="photo-item" v-for="(item,index) in props.list" :key="index" @click="godetail(item.musicid)">
        <div class="photo-item-title">{{item.musicname}}</div>
      </div>

    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({list:Array})
// 点击图片跳转到详情页并传musicid参数
const godetail=(id)=>{
 window.location.href=`/#/music?musicid=${id}`
}

</script>

<style scoped>
.Item-Container{
  margin: auto;
 
  width: 1700px;
  height: 400px;
  color:white
}
.title{
  color: aliceblue;
  width: 1700px;
  height: 30px;
  font-size: large;
  background-color: rgba(26, 25, 25, 0.5);
}
.photo-container{
  margin-top: 20px;
  display: flex;
  width: 1500px;
}
.photo-item{
  width: 200px;
  height: 275px;
  margin-right: 40px;
  border: 3px solid white;
}
img{
  width: 200px;
  height: 275px;
}
</style>