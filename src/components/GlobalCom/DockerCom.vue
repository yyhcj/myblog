<template>
  <div class="container" @mouseleave="onMouseLeave" v-if="flag">
      <br>
      <br>
      <br>
      <br>
    <div class="menu" ref="menu">
    <div @mousemove="move" class="item" @click="tonb"> <img src="@/assets/339神.png" alt=""><div class="out"><div class="font">陈俊牛逼</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item" @click="todaily"><img src="@/assets/pm229m.png" alt=""><div class="out"><div class="font">日常感想</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item" @click="toshowtime"><img src="@/assets/pied-piper-alt.png" alt=""><div class="out"><div class="font">人生时刻</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item"  @click="tosc"><img src="@/assets/花.png" alt=""><div class="out"><div class="font">珍藏馆</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item"><img src="@/assets/自.png" alt=""><div class="out"><div class="font">开发记录</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item" @click="toabout"><img src="@/assets/介绍信息.png" alt=""><div class="out"><div class="font">关于本站</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item" @click="gohong"><img src="@/assets/情侣.png" alt=""><div class="out"><div class="font">遇见彩虹</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item"><img src="@/assets/绝版珍藏icon01.png" alt=""><div class="out"><div class="font">一些</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item"><img src="@/assets/327天.png" alt=""><div class="out"><div class="font">未来计划</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <button @click="hiden" class="item">隐藏<br>导航栏</button>
    </div>
    
  </div>
</template>
<script>
import _ from 'lodash';

const range = 800;
const maxScale = 1.8;

export default {
  data() {
    return {
      flag:true,
      isMouseInContainer: false,
      // 用于存储上一次的 scale 值
      previousScales: []
    };
  },
  mounted() {
    this.menuItems = Array.from(this.$refs.menu.children);
    // 初始化 previousScales
    this.previousScales = new Array(this.menuItems.length).fill(1);
  },
  methods: {
    hiden(){
     this.flag=false
    },
    todaily(){
      location.href='/#/daily'
    },
    toshowtime(){
      location.href='/#/showtime'
    },
    tonb(){
      location.href='/#/nb'
    },

    tosc(){
      location.href='/#/sc'
    },
    toabout(){
      location.href='/#/about'
    },
    gohong(){
      location.href='/#/rem'
    },
  move(event) {
      const curve = _.throttle(() => {
        const newCurve = this.createCurve(range, event.clientX, 1, maxScale);
        this.layout(newCurve);
      }, 100);
      curve();
    },
    onMouseLeave() {
      this.layout(() => 1);
    },
    baseCurve(x) {
      if (x > 1) return 0;
      if (x < 0) return 0;
      return Math.sin(Math.PI * x);
    },
    createCurve(totalXDis, topX, minY, maxY) {
      return (x) => {
        const beginX = topX - totalXDis / 2;
        const endX = topX + totalXDis / 2;
        if (x < beginX) return minY;
        if (x > endX) return minY;
        const yDis = maxY - minY;
        return this.baseCurve((x - beginX) / totalXDis) * yDis + minY;
      };
    },
    layout(curve) {
      const newScales = [];
      let shouldUpdateStyles = false;
      for (let i = 0; i < this.menuItems.length; i++) {
        const item = this.menuItems[i];
        const rect = item.getBoundingClientRect();
        const x = rect.x + rect.width / 2;
        const scale = curve(x);
        newScales.push(scale);
        // 检查 scale 值的变化是否超过阈值（这里假设阈值为 0.1）
        if (Math.abs(scale - this.previousScales[i]) > 0.01) {
          shouldUpdateStyles = true;
        }
      }
      // 如果有必要更新样式，再进行更新
      if (shouldUpdateStyles) {
        requestAnimationFrame(() => {
          for (let i = 0; i < this.menuItems.length; i++) {
            this.menuItems[i].style.setProperty('--i', newScales[i]);
          }
          // 更新 previousScales
          this.previousScales = newScales;
        });
      }
    }
  }
};
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
.container {
width: 100%;
display: flex;
justify-content: center;

}
.out{
  width: 100%;
  display: flex;
}
.font{
  margin-left: auto;
  margin-right: auto;
  font-size: 1vw;
  color: aliceblue;
}
.menu {
  
  height: 70%;
width: 70%;
display: flex;
justify-content: center;
align-items: end;
}
.item {
box-shadow: 15px 15px 5px;
width: calc(var(--i, 1) * 4.7vw);
height: calc(var(--i, 1) * 4.7vw);
margin-bottom: calc(var(--i, 1) * 2.35vw - 3.15vw);
background-color: rgb(162, 167, 167);
}
.gap {
width: calc(var(--i, 1) * 2.08vw);
height: 80%;
}
@property --i {
syntax: "<number>";
initial-value: 1;
inherits: false;
}
</style>