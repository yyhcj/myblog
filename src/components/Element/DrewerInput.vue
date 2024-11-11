<template>
  <div>
    <el-button type="primary" @click="uploadFile()">Submit</el-button>
    <input type="file" id="fileinput">
  </div>
  <audio src="http://abc.cjnb.site/%E4%BA%8E%E6%98%AF.mp3" controls></audio>
</template>

<script setup>
import axios from 'axios';
const uploadFile = () => {
    const input = document.getElementById('fileinput');
    const file = input.files[0];
    const formData = new FormData();
    formData.append('file', file);
  axios.post("http://120.46.52.202:3000/uptoqiniu",formData).then((res)=>{
    console.log(res.data)
    console.log("上传成功")
})
.catch(error => {
  // 处理请求错误
  console.error('Error:', error);
});
};

</script>