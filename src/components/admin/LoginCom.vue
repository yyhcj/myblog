<template>
    <el-card class="box-card">
      <el-form :model="formData" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">进入</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { islogin } from '@/stores/islogin';
  // 获取仓库实例
  const store = islogin();
  
  // 使用一个对象来管理表单数据，符合Form组件的使用规范
  const formData = ref({
    username: '',
    password: ''
  });
  
  const login = () => {
    if (formData.value.username === 'cjnb' && formData.value.password === '123456') {
      store.updateislogin();
    } else {
      alert('用户名或密码错误');
    }
  };
  </script>
  
  <style scoped>
  .box-card {
    width: 300px;
    margin: 0 auto;
    margin-top: 100px;
  }
  </style>