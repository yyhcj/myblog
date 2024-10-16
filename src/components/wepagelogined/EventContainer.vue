<template>
   <!-- <div class="eventcontainer" v-if="loadover">
<div class="event-card" v-for="(item,index) in eventlist" :key="index">
    <div class="img"><img :src="item.record_img1" alt=""></div>
    <div class="title">{{ item.record_title }}</div>
    <div class="people">{{item.record_people}}</div>
    <div class="time">{{item.record_time}}</div>
</div>
    </div> -->
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
import { onMounted } from 'vue';
const list=[0,1,2,3];
import axios from 'axios';
import { ref } from 'vue';

const godetail = (id) => {
  console.log(id);
  location.href = `/#/wepage/detail?id=${id}`;
}
const loadover = ref(false);

const eventlist = ref([]);
//页面加载时向服务器请求数据

onMounted(() => {
  axios.post('http://120.46.52.202:3000/getEventlist')
   .then(response => {
      // 处理请求成功的响应数据
      eventlist.value = response.data;
      console.log(eventlist.value);
      console.log("111");
    })
   .catch(error => {
      // 处理请求错误
      console.error(error);
    });
    setTimeout(() => {
        loadover.value = true;
    }, 800);
});
</script>

<style scoped>
.event-card{
display: block;
width: 100%;
height: auto;
margin: 1.5%;
border: 1px solid gray;
margin: 2.47vw;
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