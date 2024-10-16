<template>
<body>
  <div class="input-container">
    <input type="text" placeholder="文案" v-model="this.text">
    <input type="text" placeholder="配图" v-model="this.img">
    <input type="text" placeholder="id" v-model="this.id">
    <button @click="commit">提交</button>
  </div>
</body>
</template>

<script>
import axios from 'axios'

export default {
data(){
return{text:'',
img:'',
id:''
}},
methods:{
commit(){
  axios.post('http://120.46.52.202:3000/adddailyidea',{
    text:this.text,
    img:this.img,
    id:this.id,
    time:this.gettime()
  }).then((res)=>{
    console.log(res)
    window.alert("提交成功")
  })
},
gettime(){
    const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 月份从 0 开始，所以要加 1
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const formattedTime = `${year}-${
    month < 10 ? "0" + month : month
  }-${day}-${hours}:${minutes < 10 ? "0" + minutes : minutes}`;

  return formattedTime;
}
}
}
</script>

<style scoped>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

   .input-container {
      background-color: white;
      padding: 2vw;
      border-radius: 1vw;
      box-shadow: 0 0.2vw 0.4vw rgba(0, 0, 0, 0.1);
    }

    input {
      width: 96%;
      padding: 1.2vw;
      margin-bottom: 1.5vw;
      border: 1px solid #ccc;
      border-radius: 0.4vw;
      font-size: 1.6vw;}

    button {
      padding: 1vw 2vw;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 0.4vw;
      cursor: pointer;
      font-size: 1.6vw;
    }
</style>