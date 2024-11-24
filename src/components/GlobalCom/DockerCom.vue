<!-- <template>
  <div class="container" @mouseleave="onMouseLeave" v-if="flag">
      <br>
      <br>
      <br>
      <br>
    <div class="menu" ref="menu">
    <div @mousemove="move" class="item" @click="go('nb')"> <img src="@/assets/339神.png" alt=""><div class="out"><div class="font">陈俊牛逼</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item" @click="go('daily')"><img src="@/assets/pm229m.png" alt=""><div class="out"><div class="font">日常感想</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item" @click="go('showtime')"><img src="@/assets/pied-piper-alt.png" alt=""><div class="out"><div class="font">人生时刻</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item"  @click="go('sc')"><img src="@/assets/花.png" alt=""><div class="out"><div class="font">珍藏馆</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item" @click="go('record')"><img src="@/assets/自.png" alt=""><div class="out"><div class="font">开发记录</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item" @click="go('about')"><img src="@/assets/介绍信息.png" alt=""><div class="out"><div class="font">关于本站</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item" @click="go('rem')"><img src="@/assets/情侣.png" alt=""><div class="out"><div class="font">遇见彩虹</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item" @click="go('manage')"><img src="@/assets/绝版珍藏icon01.png" alt=""><div class="out"><div class="font">管理</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <div @mousemove="move" class="item" @click="go('learn')"><img src="@/assets/327天.png" alt=""><div class="out"><div class="font">未来计划</div></div></div>
    <div @mousemove="move" class="gap"></div>
    <button @click="hiden" class="item">隐藏<br>导航栏</button>
    </div>
  </div>
 
</template>
<script>
import _ from 'lodash';
import {showdocker} from '@/stores/showdocker';
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
  watch: {
    // 监听Pinia store中的state变化
    '$pinia.state.value': {
      handler(newVal) {
        // 当Pinia store的state发生变化时，这里会被调用
        console.log('Pinia state changed:', newVal)
      },
    }
  },
  mounted() {
    this.menuItems = Array.from(this.$refs.menu.children);
    // 初始化 previousScales
    this.previousScales = new Array(this.menuItems.length).fill(1);
  },
  methods: {
    go(path){
      console.log(path)
      location.href=`/#/${path}`
    },
    hiden(){
      const store = showdocker();
      store.showdocker()
    },
    recover(){
      this.flag=true
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
</script>  -->
<template>
  <div class="container" @mouseleave="onMouseLeave" v-if="flag">
    <br />
    <br />
    <br />
    <br />
    <div class="menu" ref="menu">
      <div @mousemove="move" class="item" @click="go('nb')">
        <img src="@/assets/339神.png" alt="" />
        <div class="out">
          <div class="font">陈俊牛逼</div>
        </div>
      </div>
      <div @mousemove="move" class="gap"></div>
      <div @mousemove="move" class="item" @click="go('daily')">
        <img src="@/assets/pm229m.png" alt="" />
        <div class="out">
          <div class="font">日常感想</div>
        </div>
      </div>
      <div @mousemove="move" class="gap"></div>
      <div @mousemove="move" class="item" @click="go('showtime')">
        <img src="@/assets/pied-piper-alt.png" alt="" />
        <div class="out">
          <div class="font">人生时刻</div>
        </div>
      </div>
      <div @mousemove="move" class="gap"></div>
      <div @mousemove="move" class="item" @click="go('sc')">
        <img src="@/assets/花.png" alt="" />
        <div class="out">
          <div class="font">珍藏馆</div>
        </div>
      </div>
      <div @mousemove="move" class="gap"></div>
      <div @mousemove="move" class="item" @click="go('record')">
        <img src="@/assets/自.png" alt="" />
        <div class="out">
          <div class="font">开发记录</div>
        </div>
      </div>
      <div @mousemove="move" class="gap"></div>
      <div @mousemove="move" class="item" @click="go('about')">
        <img src="@/assets/介绍信息.png" alt="" />
        <div class="out">
          <div class="font">关于本站</div>
        </div>
      </div>
      <div @mousemove="move" class="gap"></div>
      <div @mousemove="move" class="item" @click="go('rem')">
        <img src="@/assets/情侣.png" alt="" />
        <div class="out">
          <div class="font">遇见彩虹</div>
        </div>
      </div>
      <div @mousemove="move" class="gap"></div>
      <div @mousemove="move" class="item" @click="go('manage')">
        <img src="@/assets/绝版珍藏icon01.png" alt="" />
        <div class="out">
          <div class="font">管理</div>
        </div>
      </div>
      <div @mousemove="move" class="gap"></div>
      <div @mousemove="move" class="item" @click="go('learn')">
        <img src="@/assets/327天.png" alt="" />
        <div class="out">
          <div class="font">未来计划</div>
        </div>
      </div>
      <div @mousemove="move" class="gap"></div>
      <button @click="hiden" class="item">隐藏<br />导航栏</button>
    </div>
  </div>
</template>

<script setup>
import _ from 'lodash';
import { ref, onMounted, watch, nextTick } from 'vue';
import { showdocker } from '@/stores/showdocker'; // 假设按照Pinia规范的导入方式

// 定义响应式数据

const menuItems = ref([]);
const previousScales = ref([]);

// 获取Pinia仓库实例
const showdockerStore = showdocker();
const flag = ref(showdockerStore.flag);
// 路由跳转方法
const go = (path) => {
  console.log(path);
  window.location.href = `/#/${path}`;
};

// 隐藏相关逻辑，这里假设showdockerStore里有合适的方法来更新相关状态
const hiden = () => {
  console.log("yuan",showdockerStore.flag)
  showdockerStore.showdocker(); 
  flag.value = false;
};
watch(
  () => showdockerStore.flag, // 监听 showdocker 状态变化
  (newValue) => {
    console.log("da",newValue)
    flag.value = newValue;
  }
);
// 鼠标移动时的逻辑
const move = (event) => {
  const curve = _.throttle(() => {
    const newCurve = createCurve(800, event.clientX, 1, 1.8);
    layout(newCurve);
  }, 100);
  curve();
};
// 鼠标离开时的逻辑
const onMouseLeave = () => {
  layout(() => 1);
};
// 基础曲线计算逻辑
const baseCurve = (x) => {
  if (x > 1) return 0;
  if (x < 0) return 0;
  return Math.sin(Math.PI * x);
};
// 创建曲线逻辑
const createCurve = (totalXDis, topX, minY, maxY) => {
  return (x) => {
    const beginX = topX - totalXDis / 2;
    const endX = topX + totalXDis / 2;
    if (x < beginX) return minY;
    if (x > endX) return minY;
    const yDis = maxY - minY;
    return baseCurve((x - beginX) / totalXDis) * yDis + minY;
  };
};
// 布局更新逻辑，根据曲线调整菜单项的缩放等样式
const layout = (curve) => {
  const newScales = [];
  let shouldUpdateStyles = false;
  for (let i = 0; i < menuItems.value.length; i++) {
    const item = menuItems.value[i];
    const rect = item.getBoundingClientRect();
    const x = rect.x + rect.width / 2;
    const scale = curve(x);
    newScales.push(scale);
    // 检查 scale 值的变化是否超过阈值（这里假设阈值为 0.1）
    if (Math.abs(scale - previousScales.value[i]) > 0.01) {
      shouldUpdateStyles = true;
    }
  }
  // 如果有必要更新样式，再进行更新
  if (shouldUpdateStyles) {
    nextTick(() => {
      for (let i = 0; i < menuItems.value.length; i++) {
        menuItems.value[i].style.setProperty('--i', newScales[i]);
      }
      // 更新 previousScales
      previousScales.value = newScales;
    });
  }
};

// 组件挂载完成后的初始化逻辑
onMounted(() => {
  const menuElement = document.querySelector('.menu');
  if (menuElement) {
    menuItems.value = Array.from(menuElement.children);
    previousScales.value = new Array(menuItems.value.length).fill(1);
  }
});

// 监听Pinia仓库特定属性变化（这里以showdockerStore里的某个假设属性为例，需根据实际修改）
watch(
  () => showdockerStore.someData, // 监听showdockerStore里的someData属性变化，替换原来监听整个Pinia state的方式
  (newValue, oldValue) => {
    console.log('showdockerStore的someData属性发生变化', newValue, oldValue);
    // 可以根据具体变化情况添加更多逻辑，比如更新组件内相关数据等
  }
);
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