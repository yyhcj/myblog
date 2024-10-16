<template>
   <div class="detail" v-for="(item,index) in data1" :key="index">
      <div class="title">{{item.record_title}}</div>
      <div class="detail">{{item.record_detail}}</div>
      <div class="people">{{item.record_people}}</div>
      <div class="time">{{item.record_time}}</div>
      <div class="img"><img :src="item.record_img" alt=""></div>
   </div>

</template>

<script setup>
   import { useRoute } from 'vue-router';
   import axios from 'axios';
   import { ref,onMounted } from 'vue';

   const recordid=ref('')
   const data1=ref()
   const getid=()=>{
    const route = useRoute();
    recordid.value = route.query.id
   }
   //获取页面数据
   const getdata=()=>{
    getid()
    axios.post('http://120.46.52.202:3000/geteventdetail',{recordid:recordid.value}).then(response => {
     data1.value=response.data
    }).catch(error => {
     console.error(error);
    })
   }

   getdata()

   onMounted(() => {
    
   })


</script>

<style scoped>
img{
   width: 50vw;
}
</style>