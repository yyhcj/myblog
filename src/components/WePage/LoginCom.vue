<template>
  <div class="loginmain">
    <label for="">名字：</label><input type="text"><br>
    <label for="">密码：</label><input type="text"><br>
    <button @click="gologined">进入</button><br>
  </div>
</template>

<script>
export default {
methods:{
  gologined(){
    this.$router.push('/wepage')
  }
}

}
</script>

<style scoped>
.loginmain{
    width: 50vw;
    height: 25vw;
    border: 1px solid gray;
    background-color: rgb(180, 231, 231) ;
    opacity: 0.45;
    transition: 0.3s;

}
label{
  margin-left: 5vw;
  
}
input{
  margin-top: 3vw;
  height: 3vw;
  width: 30vw;
  border-radius: 20px;
}
button{
  margin-top: 40px;
  margin-left: 22.5vw;
  width: 8vw;
  height: 3vw;
}
.loginmain:hover{
  opacity: 1;
}
</style>