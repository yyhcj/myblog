<template>
  <div>
    <div class="event-box">
      <img src="@/assets/back.jpg" alt="">

    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        list:[
            {time:2004-6-10,img:"src/assets/back.jpg",event:"我出生了"},
            {time:2016-9-1,img:"src/assets/back.jpg",event:"分配到一所很一般的初中"},
            {time:2019-9-1,img:"src/assets/back.jpg",event:"发愤图强以学校第一的成绩考入一所还不错的高中"},
            {time:2022-9-1,img:"src/assets/back.jpg",event:"高考成绩优异考进福建师范大学"}
        ]
    }
}
}
</script>

<style scoped>
img{
  width: 400px;
  height: 400px;
}
.event-box{
  width: 200px;
  height: 200px;
}
</style>
