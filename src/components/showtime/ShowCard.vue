<template>
<div class="card">
    <div class="time">{{ time }}</div>
    <div class="title">{{ title }}</div>
    <img :src=img alt="">
    </div>
</template>

<script>
export default {
props:['img','index','title',"time"]
}
</script>

<style scoped>
.card{
    color: white;
    height: 15vw;
    width: 25vw;
    border-radius: 25px;
    box-shadow: 1px 1px 5px 5px rgb(200, 210, 221);
    transition: 1s;
}

.connect{
    width: 3vw;
    height: 2vw;
    margin-left: 23vw;
    margin-top: 6.5vw;
    background-color: rgb(20, 139, 243);
}
img{
    width: 100%;
}
.title{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    height: 2vw;
}
.time{
    margin-left: 20px;
}
</style>