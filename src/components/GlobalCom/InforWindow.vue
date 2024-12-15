<template>
  <div class="outer" >
     <el-dialog title="title" width="600px" v-model="isvisible" @close="onClose">
      <el-form label-width="80px" >
        <el-form-item v-for="(item,index) in prop.list" :key="index" :label="item">
          <el-input :placeholder=item :maxLength="20" v-model="obj[item]"></el-input>
        </el-form-item>
        <el-button type="primary" @click="commit">提交</el-button>
      </el-form>
     </el-dialog>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref, defineExpose,defineProps } from 'vue';
const prop = defineProps({
    api:String,
    list:Array
})
// 创建一个响应式的ref，用于控制显示隐藏相关状态，初始值为true
const isvisible = ref(false);
//根据数组的值动态创建数组
const obj = ref({});
for (const element of prop.list) {
    obj.value[element] = null; 
}
// 使用defineExpose将isvisible和isvisiblefun对外暴露，这样父组件就能访问到它们了
defineExpose({
    isvisible,
    obj,
});
const commit=()=>{
    console.log(obj.value)
   axios.post(prop.api,{obj:obj.value}).then(res=>{
    if(res.data){ 
      alert('提交成功')
    }else{
      alert('提交失败')
    }
   })
}
</script>

<style>

</style>