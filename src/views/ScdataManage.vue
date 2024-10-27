<template>
  <div> 
    <el-radio-group v-model="flag">
      <el-radio :value="1">电影</el-radio>
      <el-radio :value="2">游戏</el-radio>
      <el-radio :value="3">音乐</el-radio>
    </el-radio-group>
  </div>
  <div class="roundphoto">
     <div class="item" v-for="(item,index) in roundlist" :key="index">
        <div class="name">
            <input type="text" v-model="item.name">
        </div>
        <div class="imgurl">
            <input type="text" v-model="item.img">
        </div>
        <div class="img">
            <img :src=item.img alt="">
        </div>
     </div>
     <el-button type="primary" @click="commit1">提交</el-button>
  </div>
</template>

<script setup>
//测试

import axios from 'axios';
import { ref, watch } from 'vue';
const flag=ref(3)//1电影2游戏3音乐,分辨是电影还是游戏还是音乐
//计算是电影还是游戏还是音乐
const computeflag=()=>{
if(flag.value==1){
    return 'movie'
}
else if(flag.value==2){
    return 'game'
}
else{
    return 'music'
}
}
const roundlist = ref([]);
const lovebestlist = ref([]);
//获取三种数据
const getdata=()=>{
    axios.post('http://120.46.52.202:3000/get_sc_miandata',{keyword:computeflag(),type:"round"}).then(response => {roundlist.value = response.data;})
    axios.post('http://120.46.52.202:3000/get_sc_miandata',{keyword:computeflag(),type:"lovebest"}).then(response => {lovebestlist.value = response.data;})
}
getdata()
watch(flag,()=>{
    getdata()

})
//提交修改数据
const commit1=()=>{
    console.log(roundlist.value)
    axios.post('http://120.46.52.202:3000/updatescdata',{roundlist:roundlist.value,lovebestlist:lovebestlist.value,keyword:computeflag()},
{headers:{"content-type": "application/json"}}
).then(
    response=>{console.log(response)}

)
}
</script>

<style scoped>
.item{
    align-items: center;
    width: 80vw;
    margin-left:10vw ;
    display: flex;
    border: 1px solid black;

}
.name{
    width: 20vw;
}
.imgurl{
    display: flex;
    align-items: center;
    width: 30vw;
    justify-content: center;
    border: 1px solid black;
    height: 10vw;
}
.img{
    display: flex;
    justify-content: center;
    width: 50vw;
    height: 10vw;
}
img{
    height: 100%;
}
input{
    width: 15vw;
    height: 3vw;
}
</style>
  