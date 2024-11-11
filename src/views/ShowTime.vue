<template>
  <div class="all">
    <div class="container">
      <ShowcardLeftlist class="cardlist"></ShowcardLeftlist>
      <div class="dividing-line"></div>
      <div>
        <ShowcardRightlist class="cardlist"></ShowcardRightlist>
      </div>
    </div>
  </div>
  <div class="back">

  </div>

</template>

<script setup>
import ShowcardLeftlist from '../components/showtime/Showcard-Leftlist.vue';
import ShowcardRightlist from '../components/showtime/Showcard-Rightlist.vue';

</script>

<style scoped>
.all{
    color: aliceblue;
    min-height: 100vh;
}
.card{
  margin: 20px;
}
.container {
  display: flex;
    min-height: 100vh;
}
.dividing-line {
    width: 1vw;
    min-height: 100vh;
    background-color: aliceblue;
}
.block{
  height: 20vw;
}
.all{
  display: flex;
  justify-content: center;
}
.back{
  width: 100vw;
  background-image: url('@/assets/rembackphoto/微信图片_20241029144358.jpg');
  filter: opacity(70%);
  position: fixed;

  top: 0;
  left: 0;
  z-index: -1;
}
</style>