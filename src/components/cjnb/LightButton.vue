<template >
    <div>
  <div class="btn">
    {{ props.text }}
  </div>
</div>
</template>
<script setup>
import {defineProps} from 'vue'
const props=defineProps({
    text:String
})
</script>

<style scoped>
@keyframes rotate{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
.btn{
    text-align: center;
    font-size: 1.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 10%;
    position: relative;
    width: 12vw;
    height: 7vw;
    background-color: rgb(59, 59, 59);
    z-index: 1;
    overflow: hidden;
    -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, 0.4));
    transition: all 2s;
}
.btn:hover {
    color: #fff;
    box-shadow: 0 0 5px rgb(106, 106, 160), 0 0 25px rgb(75, 75, 139);
    transition: all 2s;
    scale:1.5;
}
.btn:hover::after,.btn:hover::before{
    background-color: #6c8eee;
    transition: all 2s;
    scale: 1.5;
}
.btn::before{
    transform-origin: 0 0;
    content: '';
    position: absolute;
    top:50%;
    left:50%;
    width: 150%;
    height: 300%;
    background-image: conic-gradient(rgb(65, 104, 189),rgb(40, 103, 221));
    z-index: -2;
    animation: rotate 1s linear infinite;
    transition: all 2s;
}
.btn::after{
    border-radius: 15px;
    position: absolute;
    top:1%;
    left: 1%;
    content:'';
    width: 98%;
    height: 98%;
    z-index: -1;
    background-color: black;
    transition: all 2s;
}
</style>