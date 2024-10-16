<template>
  <div class="sider-main">
    <div class="logo">
     <img class="logo-img" src="https://img2.baidu.com/it/u=4012053351,1162680448&fm=253&fmt=auto&app=120&f=JPEG?w=570&h=380" alt="">
    </div>
    <div class="docker">
      <div class="docker-item" @click="torem">回忆</div>
      <div class="docker-item" @click="torecord">记录</div>
      <div class="docker-item" @click="tofuture">未来</div>
    </div>
  </div>
</template>

<script>
export default {
methods:{
  torem(){
    location.href = '/#/wepage'

  },
  torecord(){
    this.$router.push('/wepage/addevent')
  },
  tofuture(){
    this.$router.push('/wepage/future')
  }

}

}
</script>

<style scoped>
.logo{
  height: 150px;
}
.logo-img{
  width: 80px;
  height: 50px;
  position: fixed;
  top :80px;
  left: 50px;
  border-radius: 50px;
}
.docker{
  width: 100%;
  height: 400px;
}
.docker-item{
  width: 90%;
  margin-left: 5%;
  border-radius:25px ;
  background-color: rgb(241, 241, 241);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

</style>