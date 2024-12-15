<template>
  <particles id="tsparticles" class="back">
<div class="container">
  <div class="side">
    <button class="elbutton"  @click="set(index)" v-for="(item,index) in list" :key="index">
      {{item.versionnum}}
    </button>
  </div>
  <div class="body">
    <div v-html="list[num].recordhtml" class="vhtml"></div>
  </div>
</div>
</particles>
</template>

<script setup>
import { tsParticles } from "@tsparticles/engine";
import { loadSeaAnemonePreset } from "@tsparticles/preset-sea-anemone"; 
(async () => {
  await loadSeaAnemonePreset(tsParticles);

  await tsParticles.load({
    id: "tsparticles",
    options: {
      preset: "seaAnemone",
    },
  });
})();
import axios from "axios";
import { ref } from "vue";
const list = ref([{versionnum:'',recordhtml:''}])
 axios.post('http://120.46.52.202:3000/getmyrecord').then((res)=>{
  list.value = res.data
 })
  const set = (num1)=>{
    num.value=num1
  }
  const num=ref(0)

</script>

<style scoped>
.back{
position: relative;
z-index: -1;
}
.container{
  display: flex;
  width: 98.5vw;
  z-index: 50;
  position: fixed;
}
.side{
  width: 20vw;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-left:5vw;
  max-height: 100vh;
}
.elbutton{
  width: 10vw;
  margin: 10px;
  height: 3vw;
  background-color: aquamarine;
}
.body {
  color: white;
  width: 75vw;
  height: 98vh;
  overflow-y: scroll;
}
.vhtml::v-deep img {
  width: 68vw;
}
</style>