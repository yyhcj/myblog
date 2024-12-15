<template>
    <div class="container">
 <div class="text text2">欢迎光临俊哥</div> 
 <div class="text text1">牛逼的博客网站</div> 
</div>
</template>

<script setup>

</script>

<style scoped>
@keyframes scrollBg {
    0% {
        background-position: 0 0; /* 初始背景位置，从顶部开始 */
    }
    100% {
        background-position: 0 -800%; /* 最终背景位置，向上移动自身高度的100%，实现向上滚动效果 */
    }
    
}
.container{
    width: 20vw;
    height: 100vh;
    display: flex;
    justify-content: center;
}
.text{
    animation: scrollBg 60s linear infinite;
    writing-mode: vertical-lr;
    letter-spacing: -0.1vw;
    font-size: 6vw;
    font-family: 'Arial Black', sans-serif;
    font-weight: 900;
    -webkit-background-clip: text;
    color: rgb(255,255,255,.1);
    width: 200px;
    background-size: 100% auto;
    background-image: url(http://abc.cjnb.site/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-12-08%20234335.png);
    background-repeat: repeat;
}
.text1{
    margin-top: 8vw;
}
.text2{
    margin-top: 2vw;
}
</style>