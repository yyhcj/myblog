<template>
  <div mark-body>
    <div class="inputcontainer">
     <div class="input"><label for="">事件简述:</label><input type="text" v-model="event"></div>
     <div class="input"><label for="">等级:</label><input type="text" v-model="level"></div>
     <div class="input"><label for="">处理结果:</label><input type="text" v-model="result"></div>
     <div class="input"><label for="">添加人:</label><input type="text" v-model="people"></div>
    </div>
    <button @click="comfirm">确认添加</button><button>清空</button>
  </div>
</template>

<script>
import axios from 'axios';
const time =new Date()
export default {
methods:{
  cancel(){
   this.event='',
   this.people='',
   this.level='',
   this.result=''
   this.time=new Date()
  },
comfirm(){
  axios.post("http://113.125.106.224:3000/api/insertdata",{
    event:this.event,
    level:this.level,
    result:this.result,
    people:this.people,
    time:new Date()
  }).then((response)=>{
    this.list=response.data
    console.log(response.data)
  }).catch((error)=>{
    console.error(error)
  })
  window.alert("添加成功")
  this.cancel()

}
},
 data(){
  return{
    event:'',
    level:'',
    result:'',
    people:'',
    time:time
  }
 }

}
</script>

<style scoped>
.mark-body{
 width: 80%;
}
</style>