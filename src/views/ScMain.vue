<template>
  <div class="body">
    <ScDocker class="docker" @change="changefn"></ScDocker>
    <RoundPhoto></RoundPhoto>
    <ItemContainer  :list = nowlist>LoveBest</ItemContainer>
  </div>
</template>

<script setup>
import axios from 'axios';
import ItemContainer from '../components/收藏界面/ItemContainer.vue';
import RoundPhoto from '../components/收藏界面/RoundPhoto.vue';
import ScDocker from '../components/收藏界面/ScDocker.vue';
import {ref,onMounted} from 'vue'

const changefn=(a)=>{
nowflag.value=a
headerdocker()
console.log(nowlist.value)
}
const musiclist=ref({
roundphoto:["https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg"],
lovebest:['music'],
looked:[]
});
const movielist=ref({
roundphoto:["https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg"],
lovebest:['movie'],
looked:[]
});
const gamelist=ref({
roundphoto:["https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg","https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg"],
lovebest:['game'],
looked:[]
});
const nowlist=ref({})
const nowflag=ref(1)
const headerdocker=()=>{
  if(nowflag.value===1){
    nowlist.value=movielist.value
  }
  else if(nowflag.value===2){
    nowlist.value=gamelist.value
  }else{
    nowlist.value=musiclist.value
  }
}
const getmusicdata=()=>{
axios.post('http://120.46.52.202:3000/getmusicdata',{
}).then((response)=>{
  musiclist.value=response.data
}).catch((error)=>{
  console.log(error)
})
}
const getgamedata=()=>{
  axios.post('http://120.46.52.202:3000/getgamedata',{
}).then((response)=>{
  gamelist.value=response.data
}).catch((error)=>{
  console.log(error)
})
}
const getmoviedata=()=>{
  axios.post('http://120.46.52.202:3000/getmoviedata',{
}).then((response)=>{
  movielist.value=response.data
}).catch((error)=>{
  console.log(error)
})
}
onMounted(()=>{
getmusicdata()
getgamedata()
getmoviedata()
})


</script>

<style scoped>
.body{
    background-color: black;
    width: 100%;
    height: 975px;
    
}
.docker{
  float: top;
}
.text{
  height: 500px;
  width: 100%;
  background-color: white;
}

</style>