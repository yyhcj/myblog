<template>
    <div class="eventcontainer">
    <div class="vline" v-for="(lineitem,lineindex) in list" :key="lineindex">
      <div class="event-card" @click="godetail(item.record_id)" v-for="(item,index) in eventlist.filter((_, index) => index % 4 === lineitem)" :key="index">
        <div class="img"><img :src= "item.record_img" alt=""></div>
        <div class="title">{{ item.record_title }}</div>
        <div class="people">{{item.record_people}}</div>
        <div class="time">{{item.record_time}}</div>
     </div>
    </div>
</div>
</template>
<script setup>
import {weloginpagestore} from '@/stores/weloginpagestore';
const list=[0,1,2,3];
import axios from 'axios';
import { ref, watch } from 'vue';

const godetail = (id) => {
  console.log(id);
  location.href = `/#/wepage/detail?id=${id}`;
}
const loadover = ref(false);

const eventlist = ref([]);

//页面加载时向服务器请求数据
  axios.post('http://120.46.52.202:3000/getEventlist')
   .then(response => {
      // 处理请求成功的响应数据
      const store=weloginpagestore();
      store.updatelist(response.data)
    })
   .catch(error => {
      // 处理请求错误
      console.error(error);
    });
    setTimeout(() => {
        loadover.value = true;
    }, 800);

    // 监听store中的数据变化
    const store=weloginpagestore();
    watch(() => store.datalist, (newValue) => {
                   eventlist.value = newValue;
               });
</script>

<style scoped>
.event-card{
display: block;
width: 100%;
height: auto;
margin: 1.5%;
margin: 2.47vw;
border-radius: 30px;
box-shadow:3px 5px 4px 8px rgba(0, 0, 0, 0.1);
overflow: hidden;
}
.time{
    display: inline-block;
    font-size: 0.5vw;
}
.title{
    display: flex;
    justify-content: center;
    font-size: 5%;
}
.img{
    max-height: 15.8vw;
    display: flex;
    align-items: center;
}
.eventcontainer{
    width: 100%;
height: auto;
display: flex;
align-items: start;
flex-wrap: wrap;
justify-content: space-around;
}
img{
    width: 100%;
    max-height: 15.8vw;
}
.vline{
    width: 18%;
}
.people{
    display: inline-block;
    position: relative;
    bottom: 0px;
    left: 0px;
    font-size: 0.5vw;

}

</style>