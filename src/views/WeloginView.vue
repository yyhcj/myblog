<template>
  <div class="allcontainer">
 <SideCom class="sider"></SideCom>
   <div class="main">
    <HeaderCom class="find1"></HeaderCom>
   <router-view class="route"></router-view>
   </div>
  </div>
</template>

<script>
import SideCom from '@/components/wepagelogined/SideCom.vue';
import HeaderCom from '@/components/wepagelogined/HeaderCom.vue';
export default {
components:{
    SideCom,
    HeaderCom
}
}
</script>

<style scoped>
.allcontainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sider{
    width: 20%;
    height: 975px;
    border-radius: 15px;
    background-color: rgb(245, 239, 233);
    
}
.main{
    width: 77%;
    height: 975px;
    display: block;
    
}
.route{
    background-color: rgb(245, 239, 233);
    width: 100%;
    height: 825px;
    overflow-y: scroll;
    margin-top: 2vw;
    border-radius: 15px;
}


</style>