<template>
    <div class="body1">
  <div class="photo-container">
    <div class="photo"> <img src="https://pic2.zhimg.com/v2-54b44f54681ffe46dbceef50a8740a7a_r.jpg" alt=""></div>
    <div class="photo"><img src="https://ts1.cn.mm.bing.net/th/id/R-C.10c6fa95f73502138ceeec3d33295bf2?rik=mmJb0lFYy%2bsbXQ&riu=http%3a%2f%2fimg001.dailiantong.com%2fNews%2f20230422%2fzty_20230422135044431.jpg&ehk=KNdFZGq4h6TY0t%2frh0Te%2b36f2CzabtY7nnNrEzky3aw%3d&risl=&pid=ImgRaw&r=0" alt=""></div>
    <div class="photo"><img src="https://ts1.cn.mm.bing.net/th/id/R-C.86000bafcd9ec66b2466ac00575b4197?rik=WkXeOcm6hZqxsg&riu=http%3a%2f%2fimg1.gamedog.cn%2f2020%2f08%2f07%2f4402984-200PG541110.jpg&ehk=X0sdew2pDYlifob%2bvvL8iDFZfKAHGzZO9uM5gvjb2Pc%3d&risl=&pid=ImgRaw&r=0" alt=""></div>
    <div class="photo"><img src="https://ts1.cn.mm.bing.net/th/id/R-C.57afdfd5fed8f32e5e7a2a8ddc867b88?rik=3u6siyUKS6W1%2fw&riu=http%3a%2f%2fimg001.dailiantong.com%2fNews%2f20210305%2fzty_20210305093443125&ehk=VYhRJvEusbdtxxwu%2bBoJ%2fcGO6eQJFG5HxmYgLFBqvx0%3d&risl=&pid=ImgRaw&r=0" alt=""></div>
    <div class="photo"><img src="https://ts1.cn.mm.bing.net/th/id/R-C.bbbbf6ce6d888bad116e6134d3b781b4?rik=UTzuQLHBFWj0kQ&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f80%2f11380.jpg&ehk=t%2bV4eulR4D6kXdGBfDsHhoSErHN3VxTH2qj%2bb7d%2bvWg%3d&risl=&pid=ImgRaw&r=0" alt=""></div>
    <div class="photo"><img src="https://ts1.cn.mm.bing.net/th/id/R-C.89a4f2db0d3cb80ea85a5836e6cbebbe?rik=7Vo%2bvz5zbu7O5A&riu=http%3a%2f%2fimg1.gamedog.cn%2f2020%2f08%2f07%2f4402984-200PG541280.jpg&ehk=AsJik8M098hFFRvO6yRhf8tvmO3OzWRU0wazLCTgxrw%3d&risl=&pid=ImgRaw&r=0" alt=""></div>
    <div class="photo"><img src="https://ts1.cn.mm.bing.net/th/id/R-C.eed4720dc05b50090817e1455866d0b4?rik=UB9WOhk94D%2bhng&riu=http%3a%2f%2fgame.gtimg.cn%2fimages%2fyxzj%2fcoming%2fv2%2fskins%2fimage%2f20200113%2fda036a44b78cb8ffa50548bb7aae766f.jpg&ehk=zmbZim705FSmLqIRYYSZb%2fLL%2f0cDodZ%2fnyEVpCcwK6c%3d&risl=&pid=ImgRaw&r=0" alt=""></div>
    <div class="photo"><img src="https://ts1.cn.mm.bing.net/th/id/R-C.0d59d70d17b77471ecd7c11d6d50ff69?rik=CxN6ojgHhSBDmw&riu=http%3a%2f%2fi2.img.969g.com%2fpub%2fimgx2019%2f09%2f24%2f503_073220_e3b50.jpg&ehk=ILp7z2k%2b0Y7VZa3xPNC7bQ9lRQUrif0YfEEEYPuZVEo%3d&risl=&pid=ImgRaw&r=0" alt=""></div>
  </div>
</div>
</template>
<script>
export default {
  // mounted() {
  //   const photos = document.querySelectorAll('.photo');
  //       let deg = 0;
  //       function animate() {
  //           deg += 0.1;
  //           photos.forEach((photo, index) => {
  //               photo.style.transform = `rotateY(${deg * (index + 1)}deg) translateZ(500px)`;
  //           });
  //           requestAnimationFrame(animate);
  //       }
  //       animate();
  //   }
    
    
}
</script>

<style scoped>
.body{
  height: 400px;
  display: flex;
  perspective: 1000px; /* 调整视角以获得合适的 3D 效果 */
}


.photo-container{
  transform-origin: center center; /* 设置旋转中心为容器的中心 */
    margin-top: 100px;
    margin-left: 800px;
    display: flex;
    color: aliceblue;
    width: 300px;
  height: 300px;
  position: relative;
    transform-style: preserve-3d;
    animation: rotateAnimation 30s linear infinite;
   

}
img{
  width: 250px;
  height: 180px;
  -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, .5));;
}
.photo {
 display: flex;
 width: 350px;
 height: 420px;
 position: absolute;
 flex-wrap: wrap;
 
}


.photo:nth-child(1) {
  transform: rotateY(0deg) translateZ(400px);
}

.photo:nth-child(2) {
  transform: rotateY(45deg) translateZ(400px);
}

.photo:nth-child(3) {
  transform: rotateY(90deg) translateZ(400px);
}

.photo:nth-child(4) {
  transform: rotateY(135deg) translateZ(400px);
}

.photo:nth-child(5) {
  transform: rotateY(180deg) translateZ(400px);
}

.photo:nth-child(6) {
  transform: rotateY(225deg) translateZ(400px)
}

.photo:nth-child(7) {
  transform: rotateY(270deg) translateZ(400px);
}

.photo:nth-child(8) {
  transform: rotateY(315deg) translateZ(400px);
}
@keyframes rotateAnimation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
<!-- <template>
  <div class="body">
    <div class="photo-container">
      <div >
        <img class="photo" v-for="index in 8" :key="index"
          :src="
            'https://picsum.photos/200/300?random=' + index
          "
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script >
export default {};
</script>

<style scoped>
.body {
  background-color: #333;
}

.photo-container {
  padding-top: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  width: 300px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  perspective: 800px;
  animation: rotateAnimation 10s linear infinite;
}

.photo {
  width: 200px;
  height: 200px;
  position: absolute;
  box-shadow: 0px -10px 10px rgba(255, 255, 255, 0.3);

 
}
@keyframes rotateAnimation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

.photo:nth-child(1) {
  transform: rotateY(0deg) translateZ(500px);
}

.photo:nth-child(2) {
  transform: rotateY(45deg) translateZ(500px);
}

.photo:nth-child(3) {
  transform: rotateY(90deg) translateZ(500px);
}

.photo:nth-child(4) {
  transform: rotateY(135deg) translateZ(500px);
}

.photo:nth-child(5) {
  transform: rotateY(180deg) translateZ(500px);
}

.photo:nth-child(6) {
  transform: rotateY(225deg) translateZ(500px);
}

.photo:nth-child(7) {
  transform: rotateY(270deg) translateZ(500px);
}

.photo:nth-child(8) {
  transform: rotateY(315deg) translateZ(500px);
}
</style> -->