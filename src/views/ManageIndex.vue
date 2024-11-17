<template>
  <div>
    欢迎光临管理界面
  </div>
  <el-button type="primary" @click="go('scmanage')" size="large">照片墙管理</el-button>
  <el-button type="primary" @click="go('scmanage')" size="large">最爱管理</el-button>
  <el-button type="primary" @click="go('showmanage')" size="large">人生时刻管理</el-button>
  <el-button type="primary" @click="go('scnormal')" size="large">收藏界面管理</el-button>
  <el-button type="primary" @click="go('scmusic')" size="large">音乐管理</el-button>
  <el-button type="primary" @click="go('adddaily')" size="large">写感想</el-button>
  <el-button type="primary" @click="go('cjnbman')" size="large">cjnb管理</el-button>


</template>
<script setup>
const go=(path)=>{
location.href=`/#/${path}`
}
</script>

<style>

</style>