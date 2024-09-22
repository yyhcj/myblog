<template>
  <div class="block">
  <router-link to="/rem/review"><img class="icon" src="@/assets/爱心气泡.png" alt=""><div class="lab">爱的记录</div></router-link>
  <router-link to="/rem/mark"><img class="icon" src="@/assets/爱心气泡.png" alt=""><div class="lab">记录下爱</div></router-link>
  <router-link to="/rem/review"><img class="icon" src="@/assets/爱心气泡.png" alt=""><div class="lab">爱的记录</div></router-link>
  <router-link to="/rem/review"><img class="icon" src="@/assets/爱心气泡.png" alt=""><div class="lab">爱的记录</div></router-link>
</div>
  <router-view />
</template>

<script>
export default {
methods:{
   
}
}
</script>

<style>
.main-item{
  display: inline-block;
  width: 200px;
  height: 100px;
  margin: 50px;
  background-color: bisque;
}
.icon{
  width: 80%;
  margin: 10%;
  margin-bottom: 0%;
 
}
a{
  display: inline-block;
  text-decoration: none;
  color: inherit; 
  width: 15%;
  margin: 3%;
  margin-top: 0;
}
.lab{
margin-left: 35%;
}
</style>