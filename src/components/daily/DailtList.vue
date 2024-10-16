<template>
  <div class="all-container">
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <div class="head-img-container">
        <img class="head-img" :src="item.userimg" alt="" />
        <div class="name">{{ item.username }}</div>
      </div>
      <div class="words-container">
        <div class="text">
          {{ item.ideatext }}
        </div>
      </div>
      <div class="besideimg-container">
        <img class="besideimg" :src="item.ideaimg" />
      </div>
      <div class="time">
        {{ item.ideartime }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const list = ref([]);
const getlist = () => {
  axios.post("http://120.46.52.202:3000/getideadata").then((res) => {
    list.value = res.data;
    console.log(list.value);
  });
};
getlist();
</script>

<style scoped>

.all-container {
  width: 100vw;
}
.list-item {
  margin-left: 5vw;
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  margin-top: 3vw;
  background-color: rgb(236, 234, 234);
  box-shadow: 1vw 1vw 2vw #888;
  border-radius: 2vw;
}
.head-img {
  width: 100%;
}
.head-img-container {
  margin-left: 5%;
  height: 100%;
  width: 7%;
  display: flex;
  justify-content: center;
  background-color: bisque;
  flex-wrap: wrap;
}
.words-container {
  font-size: 1.2vw;
  margin-top: 30px;
  width: 50%;
  margin-left: 10%;
}
.besideimg-container {
  width: 100%;
}
.besideimg {
  width: 50%;
  margin-left: 22%;
}
.time {
  margin-left: 22vw;
}
</style>
