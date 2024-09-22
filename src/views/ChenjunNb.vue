<template>
  <div class="back">
    <div class="button-container">
 <router-link to="/nb/sport">  
<bt class="bt">
  <template v-slot:text>运动</template>
</bt>
</router-link>   
<router-link to="/nb/fjnu">  
<bt class="bt">
  <template v-slot:text>福建师范大学</template>
</bt>
</router-link>   
<router-link to="/nb/computer">  
<bt class="bt">
  <template v-slot:text>计算机</template>
</bt>
</router-link>   
<router-link to="/nb/friend">  
<bt class="bt">
  <template v-slot:text>交友</template>
</bt>
</router-link>   
<router-link to="/nb/world">  
<bt class="bt">
  <template v-slot:text>旅行</template>
</bt>
</router-link>     
</div>
<router-view class="detail-container"></router-view>
  </div>
</template>

<script>
import bt from "@/components/cjnb/LightButton.vue";
export default {
components:{
  bt
}
}
</script>

<style>
.detail-container{
  width: 90%;
  height: 68%;
  margin-left:4% ;
  margin-top:50px ;
  border: 3px solid #fff;

}
.button-container{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bt{
  margin-top: 100px;
}
.back{
  width: 100%;
  height: 975px;
  background: #000;
}
</style>