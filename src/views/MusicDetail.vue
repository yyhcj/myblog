<template>
  <div class="all">
    <audio id="myAudio" :src=musicpath controls loop @timeupdate="(event) => timeupdate(event.target.currentTime)">
    </audio>
    <div class="name1">{{ musicname }}</div>
  <div class="main">
    <div class="left">
      <div class="image">
        <img :src=musicimg class="round" alt="">
      </div>
    </div>
    <div class="geci">
      <ul>
        <li v-for="(item,index) in gecishuzu" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</div>
<img src="http://abc.cjnb.site/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20241113164611.png" class="mover" alt="">
</template>
<script setup>
import axios from 'axios'
import {onMounted, ref,watch} from 'vue'
import {musicdata} from '@/stores/music_play_store'
//获取歌词音乐路径先得到音乐id
const geci=ref([1])
const musicname=ref('')
const musicpath=ref('')
const gecipath=ref('')
const store =musicdata()
const id =ref(store.now_id)
const gecishuzu = ref([]);
const timeArray=ref([1])
const musicimg=ref('')
//获取歌词
const getgeci = async () => {
    try {
      console.log("123",gecipath.value)
       const response= await axios.get(`${gecipath.value}`);
        geci.value = response.data;

    } catch (error) {
        console.error('读取文件错误:', error);
        throw error;
    }
};
//发请求得到歌词音乐路径
axios.post('http://120.46.52.202:3000/getmusic', {
  id: id.value
}).then((response) => {
  musicpath.value = response.data[0].musicpath;
  gecipath.value = response.data[0].gecipath;
  musicname.value = response.data[0].name;
  musicimg.value = response.data[0].img;
}).then(() => {
  return getgeci();
}).catch((error) => {
  console.error("在获取音乐信息或歌词过程中出现错误：", error);
});
watch(geci,()=>{
  //将歌词数据分割成时间和歌词数组
const geci1 = geci.value.split('\n');
var timeArraytem = [];
const  changegeci=()=>{
  geci1.forEach(line => {
  const index = line.indexOf(']');
  if (index!== -1) {
    timeArraytem.push(line.substring(0, index + 1));
    gecishuzu.value.push(line.substring(index + 1));
  }
});
timeArray.value=timeArraytem
}
changegeci()
//将时间字符串数组变成时间格式
const parsetime=()=>{
  const timeArray1 = [];
  timeArray.value.forEach((item) => {
    const [minutes, seconds] = item.slice(1, -1).split(':');
    const time = parseInt(minutes) * 60 + parseFloat(seconds);
    timeArray1.push(time);
  });
  timeArray.value=timeArray1
  return timeArray1;
}
parsetime()
})
const timeupdate=(time)=>{
  findIndex(time)
}
//找到高亮下标
const findIndex=(time)=>{
for(let i=0;i<timeArray.value.length;i++){
  if(time>timeArray.value[i]&&time<timeArray.value[i+1])
  setmove(i)
}
}
//设置偏移
const setmove = (i) =>{
  const ul = document.querySelector('ul');
  ul.style.transform = `translateY(-${i * 40-300}px)`;
  if(i===0){
    ul.style.transform = `translateY(0px)`;
  }
  else{
  //给ul中的第i个元素加上hightline类名
  const li = document.querySelectorAll('li');
  li[i].classList.add('hightline');
  //给ul中的第i-1个元素去掉hightline类名
  li[i-1].classList.remove('hightline');
  if(i-2>=0)
{
  li[i-2].classList.remove('hightline');
}
  }
}
//动态设置img的旋转
onMounted(() => {
  const audio = document.getElementById('myAudio');
const record = document.querySelector('.image');
const mover = document.querySelector('.mover');

audio.addEventListener('play', function () {
  record.style.animationPlayState = 'running';
  mover.style.transform = 'rotate(0deg)';});

audio.addEventListener('pause', function () {
  record.style.animationPlayState = 'paused';
  mover.style.transform = 'rotate(-30deg)';
});
})

</script>

<style scoped>
.all{
  background-color: black;
  color: white;
  height: 975px;
  
}
.hightline{
  opacity: 0.9;
  font-size: 25px;
}
.mover{
  position: absolute;
  width: 150px;
  top: 13%;
  left: 25%;
  transform: rotate(-30deg);
  transform-origin: 20px 0px;
  transition: 1s;
}
.name1{
  height: 50px;
  line-height: 100px;
  width: 500px;
  margin-left: 1050px!important;
  font-size: 60px;
  display: flex;
  justify-content: left;
}

li {
  line-height: 30px;
  text-align: center;
  height: 30px;
  list-style-type: none; /* 去除列表符号 */
  display: flex;
  justify-content: left;
  font-size: 20px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  opacity: 0.3;
  transition: 0.5s;
  margin-top: 10px;
}
ul{
  transition: 0.5s;
}
.main{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 900px;
}

.round{
  width: 70%;
  height: 70%;
  animation-play-state: paused;
      animation-name: round;
      animation-duration: 15s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      border-radius: 50%;
  border: 1px solid gray;
}
.image{
  margin-top: 8%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  display: flex;
  justify-content: center; 
  align-items: center; 
  background-image: url(https://pic9.997788.com/_pic_auction/00/25/24/11/25241187.jpg);
  background-size: contain;
  animation-play-state: paused;
      animation-name: round;
      animation-duration: 30s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
}
.left{
  justify-content: center;
  display: flex;
  width: 40%;
  height: 800px;
}
.geci::-webkit-scrollbar {
  width: 0em;
}

.geci::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

.geci::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.1);
  outline: 1px solid slategrey;
}
.geci{
  width: 45%;
  height: 800px;
  overflow-y: scroll;
  overflow-X: hidden;
}
@keyframes round{
  from {
    transform: rotateZ(0deg);
  }
  to{
    transform: rotateZ(360deg);
  }

}

</style> 

