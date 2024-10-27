<template>
  <button @click="con">111</button>
  <div class="all">
    <audio src="http://120.46.52.202/music/花田错.mp3" controls @timeupdate="(event) => timeupdate(event.target.currentTime)" >
     
    </audio>
    <div class="name1">不将就</div>
  <div class="main">
    <div class="left">
      <div class="image">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F19%2F20180419103254_Vt2aG.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1727767183&t=470d333f4ede19af872f1e971d6e9f70" alt="">
      </div>
    </div>
    <div class="geci">
      <ul>
        <li v-for="(item,index) in gecishuzu" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script setup>
import axios from 'axios'
import {ref} from 'vue'
import {musicdata} from '@/stores/music_play_store'
//获取歌词音乐路径先得到音乐id
const id =ref('')
const musicpath=ref('')
const gecipath=ref('')
const store =musicdata()
id.value=store.now_id
//发请求得到歌词音乐路径

  axios.post('http://120.46.52.202:3000/getmusic',{
  id:id.value
}).then((response)=>{
  musicpath.value=response.data[0].musicpath
  gecipath.value=response.data[0].gecipath
  console.log(gecipath.value)

})


const geci=
`[00:00.00]作词:黄伟文/李荣浩
[00:01.00]作曲:李荣浩
[00:02.00]编曲:EdwardChan
[00:03.00]吉他:李荣浩
[00:04.00]贝斯:李荣浩
[00:05.00]和声:李荣浩
[00:06.00]鼓:荒井十一
[00:07.00]弦乐:国际首席爱乐乐团
[00:08.00]弦乐编写:李荣浩/陈迪
[00:09.00]录音/混音室:一样音乐工作室
[00:10.00]录音:曹飞
[00:11.00]混音师:曹飞
[00:12.00]音乐监制:乐视音乐
[00:13.54]那时候我以为爱的是生活
[00:19.55]也算懂得什么适合什么不可
[00:26.24]最近还是一样努力着
[00:29.76]配合你的性格
[00:32.81]你的追求者你的坎坷
[00:36.27]我开的车
[00:39.53]算一算虚度了多少个年头
[00:46.30]仿佛足够写一套错爱的春秋
[00:52.50]如果以后你还想为谁
[00:56.47]浪费美好时候
[00:59.48]眼泪只能在我的胸膛
[01:03.21]毫无保留
[01:09.63]互相折磨到白头
[01:16.59]悲伤坚决不放手
[01:23.16]开始纠缠之后
[01:28.33]才又被人放大了自由
[01:36.67]你的暴烈太温柔
[01:43.17]感情又痛又享受
[01:49.88]如果我说不吻你不罢休
[01:56.07]谁能逼我将就
[02:06.89]你问我为什么顽固而专一
[02:12.98]天下太大总有人比你更合适
[02:19.44]其实我觉得这样不值
[02:23.01]可没选择方式
[02:26.16]你一出场别人都显得不过如此
[02:34.65]互相折磨到白头
[02:41.54]悲伤坚决不放手
[02:48.20]开始纠缠之后
[02:53.38]才又被人放大了自由
[03:01.58]你的暴烈太温柔
[03:08.19]感情又痛又享受
[03:14.89]如果我说不吻你不罢休
[03:21.05]谁能逼我将就
[03:48.46]不吻你不罢休
[03:51.65]谁能逼我将就
[03:58.53]互相折磨到白头
[04:04.87]悲伤坚决不放手
[04:11.39]开始纠缠之后
[04:16.85]才又被人放大了自由
[04:24.88]你的暴烈太温柔
[04:31.66]感情又痛又享受
[04:38.26]如果我说不吻你不罢休
[04:44.29]谁能逼我将就
[04:50.92]他们不过将就
[04:57.91]`
//将歌词数据分割成时间和歌词数组
const geci1 = geci.split('\n');
const gecishuzu = [];
var timeArray = [];
const changegeci=()=>{
  geci1.forEach(line => {
  const index = line.indexOf(']');
  if (index!== -1) {
    timeArray.push(line.substring(0, index + 1));
    gecishuzu.push(line.substring(index + 1));
  }
});
}
changegeci()

const timeupdate=(time)=>{
  
  findIndex(time)
}
//将时间字符串数组变成时间格式
const parsetime=()=>{
  const timeArray1 = [];
  timeArray.forEach((item) => {
    const [minutes, seconds] = item.slice(1, -1).split(':');
    const time = parseInt(minutes) * 60 + parseFloat(seconds);
    timeArray1.push(time);
  });
  timeArray=timeArray1
  return timeArray1;
}
parsetime()

//找到高亮下标
const findIndex=(time)=>{
for(let i=0;i<timeArray.length;i++){
  if(time>timeArray[i]&&time<timeArray[i+1])
  setmove(i)
}
}
//设置偏移
const setmove = (i) =>{
  const ul = document.querySelector('ul');
  ul.style.transform = `translateY(-${i * 30-300}px)`;
  if(i===0){
    ul.style.transform = `translateY(0px)`;
  }
  else{
  //给ul中的第i个元素加上hightline类名
  const li = document.querySelectorAll('li');
  li[i].classList.add('hightline');
  //给ul中的第i-1个元素去掉hightline类名
  li[i-1].classList.remove('hightline');
  }
}



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
.name1{
  height: 50px;
  line-height: 100px;
  width: 300px;
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

img{
  width: 600px;
  height: 600px;
  animation: round 15s linear infinite;
}
.image{
  width: 600px;
  height: 600px;
  border-radius: 50%;
  overflow: hidden;
}
.left{
  justify-content: center;
  align-items: center;
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

