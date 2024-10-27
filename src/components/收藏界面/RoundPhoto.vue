<template>
    <div class="body1">
  <div class="photo-container">
    <div class="photo" v-for="(item,index) in list" :key="index"> <img :src=item.img alt=""></div>
  </div>
</div>
</template>
<script setup>
import {scpage} from '@/stores/scpage_store'
import { ref, watch } from "vue";
const list=ref([])
const store=scpage()
list.value=store.now_roundphoto_list
//监听store里的数据变化，一旦变化更新当前数据
watch(() => store.now_roundphoto_list, (newValue) => {
  list.value = newValue;
});
</script>
<style scoped>
.body{
  height:20.51vw;
  display:flex;
  perspective:51.28vw; /* 调整视角以获得合适的 3D 效果 */
}


.photo-container{
  transform-origin:center center; /* 设置旋转中心为容器的中心 */
    margin-top:5.13vw;
    margin-left:41.03vw;
    display:flex;
    color:aliceblue;
    width:15.38vw;
  height:15.38vw;
  position:relative;
    transform-style:preserve-3d;
    animation:rotateAnimation 30s linear infinite;
}
img{
  width:12.82vw;
  height:9.23vw;
  -webkit-box-reflect:below 0.51vw linear-gradient(transparent,rgba(0,0,0,.5));
}
.photo {
  display:flex;
  width:17.95vw;
  height:21.54vw;
  position:absolute;
  flex-wrap:wrap;
}


.photo:nth-child(1) {
  transform:rotateY(0deg)translateZ(20.51vw);
}

.photo:nth-child(2) {
  transform:rotateY(45deg)translateZ(20.51vw);
}

.photo:nth-child(3) {
  transform:rotateY(90deg)translateZ(20.51vw);
}

.photo:nth-child(4) {
  transform:rotateY(135deg)translateZ(20.51vw);
}

.photo:nth-child(5) {
  transform:rotateY(180deg)translateZ(20.51vw);
}

.photo:nth-child(6) {
  transform:rotateY(225deg)translateZ(20.51vw)
}

.photo:nth-child(7) {
  transform:rotateY(270deg)translateZ(20.51vw);
}

.photo:nth-child(8) {
  transform:rotateY(315deg)translateZ(20.51vw);
}
@keyframes rotateAnimation {
  from {
    transform:rotateY(0deg);
  }
  to {
    transform:rotateY(360deg);
  }
}
</style>
