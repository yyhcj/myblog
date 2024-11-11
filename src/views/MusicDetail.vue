<template>
  <button @click="getdata">111</button>
  <div class="all">
    <audio src="http://sm2n4r5ma.hn-bkt.clouddn.com/G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E9%BE%99%E5%8D%B7%E9%A3%8E.mp3" controls @timeupdate="(event) => timeupdate(event.target.currentTime)" >
     
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
import {ref,watch} from 'vue'
import {musicdata} from '@/stores/music_play_store'
//获取歌词音乐路径先得到音乐id
const id =ref('')
const musicpath=ref('')
const gecipath=ref('')
const store =musicdata()
id.value=store.now_id
const gecishuzu = ref([]);
const timeArray=ref()
//发请求得到歌词音乐路径
axios.post('http://120.46.52.202:3000/getmusic',{
  id:id.value
}).then((response)=>{
  musicpath.value=response.data[0].musicpath
  gecipath.value=response.data[0].gecipath
  console.log(gecipath.value)
})
//获取歌词
const getgeci = async () => {
    try {
        const response = await axios.get('http://sm2n4r5ma.hn-bkt.clouddn.com/%E9%BE%99%E5%8D%B7%E9%A3%8E%20%28Live%29%20-%20G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B.lrc');
        const fileContent = response.data;
        console.log(fileContent);
        return fileContent;
    } catch (error) {
        console.error('读取文件错误:', error);
        throw error;
    }
};
const getdata=()=>{getgeci().then((res)=>{geci.value=res})}
getdata()

const geci=ref('1')
//watchgeci的变化，变化了再对歌词处理
watch(geci,()=>{
  //将歌词数据分割成时间和歌词数组
const geci1 = geci.value.split('\n');
console.log(geci1)

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
console.log(timeArray.value)
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

