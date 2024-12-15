<template>
  <form @submit.prevent="submitForm">
    <input type="file" @change="handleFileChange" ref="fileInput" name="audioFile"/>
    <input type="text" v-model="audioName" placeholder="音频名称" />
    <input type="text" v-model="singer" placeholder="歌手" />
    <input type="file" @change="handleFileChange1" ref="fileInput1" name="geciFile" />
    <input type="file" @change="handleFileChange2" ref="fileInput2" name="imgFile" />
    <button type="submit">提交</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      file: null,
      audioName: '',
      singer: '',
      gecifile: null,
      encodedFileName: null, // 新增一个属性用于存储编码后的文件名
      geciencodedFileName: null ,
      imgfile:null,
      imgencodedFileName: null, 
    };
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];
        //使用 encodeURIComponent 对文件名进行编码，但不直接修改文件对象的 name 属性
       this.encodedFileName = encodeURIComponent(this.file.name);
        
    },
    handleFileChange1(event) {
      this.gecifile = event.target.files[0];
        //使用 encodeURIComponent 对文件名进行编码，但不直接修改文件对象的 name 属性
       this.geciencodedFileName = encodeURIComponent(this.gecifile.name);
       
    },
    handleFileChange2(event) {
      this.imgfile = event.target.files[0];
        //使用 encodeURIComponent 对文件名进行编码，但不直接修改文件对象的 name 属性
       this.imgencodedFileName = encodeURIComponent(this.imgfile.name);
        
    },
    submitForm() {
      const formData = new FormData();
      formData.append('audioFile', this.file, this.encodedFileName || this.file.name);
      formData.append('name', this.audioName);
      formData.append('singer', this.singer);
      formData.append('geciFile', this.gecifile, this.geciencodedFileName || this.file.name);
      formData.append('imgFile', this.imgfile, this.imgencodedFileName || this.file.name);
      axios.post('http://120.46.52.202:3000/music', formData)
       .then(response => {
          console.log(response.data);
        })
       .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>