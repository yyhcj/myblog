<template>
<div class="card">
    <div class="title">
    标题
    </div>
    <img :src=img alt="">
    <div class="detail">
        111
    </div>

</div>
</template>

<script>
export default {
props:['img','index']
}
</script>

<style scoped>
.card{
    color: white;
    height: 15vw;
    width: 25vw;
    background-color: rgb(140, 248, 167);
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
</style>