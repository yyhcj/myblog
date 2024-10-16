<template>
  <div class="allcontainer">
 <SideCom class="sider"></SideCom>
   <div class="main">
    <HeaderCom class="find"></HeaderCom>
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
    
}

.main{
    width: 75%;
    height: 975px;
    display: block;
}
.route{
    width: 100%;
    height: 825px;
    overflow-y: scroll;
}
div{
    border: 1px solid gray;
}

</style>