<template>
    <el-input
      v-model="input"
      style="width: 60vw"
      placeholder="Please input"
    />
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const input = ref('')
  </script>
  