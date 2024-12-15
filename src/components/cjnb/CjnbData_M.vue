<template>
  <div class="container">
    <div class="column" v-for="(item,index) in list" :key="index">
      <div class="type">{{ item.type }}</div>
     <div class="title">{{ item.title }}</div>
     <div class="detail">{{ item.detail }}</div>
     <div class="img"><img :src="item.img" alt=""></div>
     <div class="img"><img :src="item.backimg" alt=""></div>
     <div class="buttons">
     <el-button style="width:5vw;height: 3vw;" type="primary" @click="show(item)">修改</el-button>
     <el-button style="width:5vw;height: 3vw;" type="danger" @click="deletecomfirm(item.id)">删除</el-button>
    </div>
    </div>
    <InforWindow ref="Infor" :list="columnlist" :api="api"></InforWindow>
  </div>
</template>
<script setup>
const columnlist=ref(['title','detail','img','img2','type',"id"])
const api="http://120.46.52.202:3000/updatecjnb"
import InforWindow from '@/components/GlobalCom/InforWindow.vue'
import axios from 'axios';
import { ref } from 'vue';
//所有数据
const list=ref([])
//获取数据
axios.post("http://120.46.52.202:3000/getdata",{tablename:'cjnb',where:''}).then(res=>{
  list.value=res.data
  console.log(res.data)
})
const Infor=ref()
const show=(item)=>{
  Infor.value.obj=item
  Infor.value.isvisible=true
}
</script>

<style scoped>
.container{
  width: 90vw;
  margin-left: 5vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.column{
  border-radius: 5%;
  width: 100%;
  height: 5vw;
  background-color: rgb(205, 252, 195);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.type{
  width: 5%;
}
.title{
  width: 5%;
}
.img{
  display: flex;
  height: 100%;
  width: 15%;
}
.detail{
  width: 10%;
}
img{
  margin: auto;
  width: auto;
  height: 90%;
}

</style>