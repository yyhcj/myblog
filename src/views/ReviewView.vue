<template>
   <div class="detail">时间</div>
   <div class="detail">事件</div>
   <div class="detail">等级</div>
   <div class="detail">结果</div>
   <div class="detail">添加人</div>
  <div v-for="(item,index) in list" :key=index>
   <div class="detail">{{ item.time.slice(0,10) }}</div>
   <div class="detail">{{ item.event }}</div>
   <div class="detail">{{ item.level }}</div>
   <div class="detail">{{ item.result }}</div>
   <div class="detail">{{ item.people }}</div>
   
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
return {
  list:[]
}
  },
  methods:{
    demo(){
    axios.post("http://113.125.106.224:3000/api/getdetail",{
  }).then((response)=>{
    this.list=response.data
    console.log(response.data)
  }).catch((error)=>{
    console.error(error)
  })
  }
  },
mounted(){
  this.demo()
}
}
</script>

<style scoped>
.detail{
  display: inline-block;
  margin-left: 150px;
  width: 200px;
}
</style>