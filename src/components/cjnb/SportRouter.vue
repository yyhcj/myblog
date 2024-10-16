<template>
  <div class="outer">
    <div class="cards1 card">
        <div class="body"></div>
        <div class="img1"></div>
        <div class="img2"></div>
        <div class="img3"></div>
        <div class="img4"></div>
    </div>
    <div class="cards2 card"></div>
    <div class="cards3 card"></div>
    <div class="cards4 card"></div>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped>
.img1{
    width: 100%;
    height: 100%;
}
.body{
    transform-style: preserve-3d;
    width: 100px;
    height: 200px;
    background-color: rgb(187, 21, 57);
}
.hiden{
    width: 1000px;
    height: 500px;
    background-color: brown;
}
.outer{
    display: flex;
    border-radius: 30px;
    justify-content: space-around;
    align-items: center;
   
}
.card{
    z-index: 0;
}

.test{
    position: absolute;
    top: 270px;
    left: 95px;
    width: 1700px;
    height: 640px;
    background-color: rgb(187, 21, 57);
    z-index: 0;
    opacity: 0;
}
.cards1{
    width: 15%;
    height: 60%;
    background-color: aqua;
    overflow: hidden;
    transition:3s;
    transform-origin: 5% 50%;
    
}
.cards1:hover{
    transform:scaleX(6.5) scaleY(1.5); 
}
.cards2{
    width: 15%;
    height: 60%;
    background-color: aqua;
    overflow: hidden;
    transition:3s;
    transform-origin: 35% 50%;
}
.cards2:hover{
    transform:scaleX(6.5) scaleY(1.5);
}
.cards3{
    width: 15%;
    height: 60%;
    background-color: aqua;
    overflow: hidden;
    transition:3s;
    transform-origin: 65% 50%;
}
.cards3:hover{
    transform:scaleX(6.5) scaleY(1.5);
}
.cards4{
    width: 15%;
    height: 60%;
    background-color: aqua;
    overflow: hidden;
    transition:3s;
    transform-origin: 95% 50%;
}
.cards4:hover{
    transform:scaleX(6.5) scaleY(1.5);
}
</style>