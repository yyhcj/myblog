<template >
    <div>
  <div class="btn">
    <slot name="text"></slot>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
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
    line-height: 100px;
    font-size: 20px;
    color: #fff;
    border-radius: 15px;
    position: relative;
    width: 200px;
    height: 100px;
    background-color: aliceblue;
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
/* .btn:not(:hover)::after,.btn:not(:hover)::before{
    scale: 1.0;
    transition: 2s;
    
} */

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