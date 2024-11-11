<template>
    <div class="container">
  <ShowCard class="card" v-for="(item, index) in list" :key="index" :img="item.showtime_img" :index="index" />
</div>
</template>

<script setup>
import axios from 'axios';
import ShowCard from './ShowCard.vue';
import { ref } from 'vue';
const list = ref([]);

const getdata=()=>{
   axios.post('http://120.46.52.202:3000/getshowtime').then((res)=>{
     list.value=res.data.filter((_, index) => index % 2 === 1);
     console.log(list.value)
})
}
getdata()
</script>

<style scoped>
 .card{
    margin-top: 20vw;
 }
 .container{
    width: 25vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
 }
</style>