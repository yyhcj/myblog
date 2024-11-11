<template>
  <div class="main-container">
    <div class="title">
      记录新事件<button class="commit-button" @click="commit">提交</button>
    </div>
    <div class="event">
      <label for="">正文内容:</label><br /><input
        class="title-input"
        type="text"
        v-model="title"
      /><br />
      <input type="text" class="detail-input" v-model="detail" /><br />
      <label for="">提交人:</label>
      <input type="text" class="people-input" v-model="commitpeople" /><br />
      <form @submit.prevent="uploadImage">
        <input type="file" ref="fileInputRef" @change="handleinputchange" />
      </form>
      <div class="img-watch">
          <img :src="imageUrl" alt="" />
        </div>

      </div>
      <div class="commitpeople"></div>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const file=ref(null)
const imageUrl=ref('')
//当图片输入框变化
const handleinputchange = (e) => {
  console.log(e.target.files[0])
  file.value = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    imageUrl.value = e.target.result;
  };
  console.log(file.value.name)
  reader.readAsDataURL(file.value);
};
//处理图片
const fileInputRef = ref(null);

       const uploadImage = async () => {
         const file = fileInputRef.value.files[0];
         if (!file) return;
         const formData = new FormData();
         formData.append('image', file);
         try {
           const response = await axios.post('http://120.46.52.202:3000/api/upload', formData, {
             headers: {
               'Content-Type': 'multipart/form-data'
             },
             params: {
    filename1: encodeURIComponent(file.name)

  }
           });
           console.log(response.data);
         } catch (error) {
           console.error(error);
         }
       };
//获取当前时间
const gettime = () => {
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
};
//v-model绑定的变量
const title = ref("");
const commitpeople = ref("");
const detail = ref("");
// 提交事件
const commit = () => {
  if (
    title.value == "" ||
    detail.value == "" ||
    commitpeople.value == ""
  ) {
    alert("请填写完整");
  } else {
    let data = {
      title: title.value,
      detail: detail.value,
      img:file.value.name,

      time: gettime(),
      people: commitpeople.value,
    };
    uploadImage();
    console.log(data);

    axios.post("http://120.46.52.202:3000/addEvent", data).then((res) => {
      console.log(res);

      alert("提交成功");
      //location.href = "/#/wepage";
    });
  }
};
</script>
<style scoped>
.h {
  height: 25.641vw;
}

.title {
  font-size: 1.538vw;
  margin: 1.026vw;
}

.event {
  font-size: 1.282vw;
  margin: 1.538vw 1.026vw;
}

label {
  margin: 2.564vw 0.769vw;
}

.title-input {
  margin-top: 1.026vw;
  margin-left: 6.154vw;
  height: 5vw;
  width: 40vw;
  align-items: center;
  border: 1px solid gray;
  background-color: rgb(250, 244, 237);
  border-radius: 0.513vw;
}

.people-input {
  margin-top: 1.026vw;
  height: 5vw;
  width: 40vw;
  align-items: center;
  border: 1px solid gray;
  background-color: rgb(250, 244, 237);
  border-radius: 0.513vw;
}

.detail-input {
  margin-left: 6.154vw;
  margin-top: 2.564vw;
  height: 20vw;
  width: 50vw;
  border: 1px solid gray;
  background-color: rgb(250, 244, 237);
  border-radius: 0.513vw;
  display: flex;
  align-items: start;
}

.img-input {
  margin-left: 6.154vw;
  margin-top: 5vw;
  height: 4vw;
  width: 20vw;
  align-items: center;
  border: 1px solid gray;
  background-color: rgb(250, 244, 237);
  border-radius: 0.513vw;
}

.img-watch {
  display: flex;
  justify-content: start;
}

.img {
  margin: 0 1.538vw;
}

img {
  width: 20.513vw;
}

.commit-button {
  margin-left: 5.128vw;
  width: 15vw;
  height:6vw;
  border-radius: 0.513vw;
  background-color: rgb(241, 127, 127);
}
</style>
