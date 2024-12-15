<template>
  <div>111</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<!-- <template>
  <view class="all-container">
    <view class="selector-container">
      <div class="nowitem">
        <image class="logo" :src="imglist[nowseed - 1]"></image>
      </div>
      <div class="storeitem" @click="exchangestore()">
        <image class="logo" :src="imglist[storeseed - 1]"></image>
      </div>
    </view>
    <view class="gamemap">
      <view
        class="gamemaplineitem"
        v-for="(item, rowindex) in gamemap"
        :key="rowindex"
      >
        <view
          class="gameitem"
          v-for="(block, index) of item"
          :key="index"
          @click="tosetseed(block.x, block.y)"
          :style="ifbackgound(rowindex, index)"
        >
          <image
            class="logo"
            v-if="gamemap[rowindex][index].nowseed"
            :src="imglist[gamemap[rowindex][index].nowseed - 1]"
          ></image>
          <image
            class="opacity"
            v-if="gamemap[rowindex][index].prepare"
            :src="imglist[nowseed - 1]"
          ></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import img1 from "../assets/game/1.png";
import img2 from "../assets/game/2.png";
import img3 from "../assets/game/3.png";
import img4 from "../assets/game/4.png";
import img5 from "../assets/game/5.png";
import img6 from "../assets/game/6.png";
import img7 from "../assets/game/7.png";

const imglist = ref([img1,img2 ,img3, img4,img5,img6,img7]);
const selectitem = ref([-1, -1]);
const size = 6;
const hsize = 6;
const gamemap = reactive([]);
const nowseed = ref(1);
const storeseed = ref();
//判断要不要有背景
const ifbackgound = (x, y) => {
  if (gamemap[x][y].nowseed) {
    return `background-image: url('../../static/glass.png');`;
  }
};
//初始化新的游戏地图
const initgamemap = () => {
  for (let i = 0; i < hsize; i++) {
    gamemap[i] = [];
    for (let j = 0; j < size; j++) {
      gamemap[i][j] = {
        x: i,
        y: j,
        nowseed: "",
        prepare: false,
      };
    }
  }
};
onMounted(() => {
  initgamemap();
});
//当selectitem变化，取消样式
watch(selectitem, (newvalue, oldvalue) => {
  const x = oldvalue[0];
  const y = oldvalue[1];
  gamemap[x][y].prepare = false;
  if (ifbiger(x, y).flag) {
    const list = ifbiger(x, y).needchangelist;
    for (let i = 0; i < list.length; i++) {
      const bigeritem = document.querySelectorAll(".gamemaplineitem");
      const changeitem = bigeritem[list[i][0]].children[list[i][1]];
      console.log(changeitem);
      const changeimg = changeitem.children;
      changeimg[0].classList.remove("move-animation");
      console.log(changeimg[0]);
    }
  }
});
//随机数，来确定下一个种子是什么
const randomseed = () => {
  let randomnum = Math.floor(Math.random() * 16);
  let ranges = [
    {
      min: 0,
      max: 8,
      value: 1,
    },
    {
      min: 9,
      max: 12,
      value: 2,
    },
    {
      min: 13,
      max: 14,
      value: 3,
    },
    {
      min: 15,
      max: 16,
      value: 4,
    },
  ];
  for (let range of ranges) {
    if (randomnum >= range.min && randomnum <= range.max) {
      nowseed.value = range.value;
      return;
    }
  }
};
//点击一个格子，看格子有没有东西，没有就种下去
const tosetseed = (x, y) => {
  //判断当前格子有没有值
  if (gamemap[x][y].nowseed) {
    return;
  } else {
    //连续点两次才种植
    if (selectitem.value[0] === x && selectitem.value[1] === y) {
      gamemap[x][y].prepare = false;
      setseed(x, y);
    }
    //第一次点击的情况
    else {
      //将这个格子的背景设置为当前种子，半透明
      gamemap[x][y].prepare = true;
      if (ifbiger(x, y).flag) {
        const list = ifbiger(x, y).needchangelist;
        for (let i = 0; i < list.length; i++) {
          setTimeout(() => {
            const bigeritem = document.querySelectorAll(".gamemaplineitem");
            const changeitem = bigeritem[list[i][0]].children[list[i][1]];
            const changeimg = changeitem.children;
            changeimg[0].style.setProperty(
              "--move-left-value",
              `${(y - list[i][1]) * 5}vw`
            );
            // 改变移动距离变量的值
            changeimg[0].style.setProperty(
              "--move-top-value",
              `${(x - list[i][0]) * 5}vw`
            );
            changeimg[0].classList.add("move-animation");
          }, 100);
        }
      }
      selectitem.value = [x, y];
    }
  }
};
//种种子，看能不能合成，能合成就合成
const setseed = (x, y) => {
  const flag = ifbiger(x, y).flag;
  const list = ifbiger(x, y).needchangelist;
  //判断能不能合成
  if (!flag) {
    gamemap[x][y].nowseed = nowseed.value;
    randomseed();
    return;
  } else {
    gamemap[x][y].nowseed = nowseed.value + 1;
    for (let i = 0; i < list.length; i++) {
      gamemap[list[i][0]][list[i][1]].nowseed = "";
    }
    nowseed.value++;
    setseed(x, y);
  }
};
//判断能不能合成
const ifbiger = (x, y) => {
  let now = nowseed.value;
  if (gamemap[x][y].nowseed) {
    now = gamemap[x][y].nowseed;
  }
  let flag = 0;
  //可以被合成的格子的x和y
  let list = [];
  const visblelist = Array.from(
    {
      length: hsize,
    },
    () => Array(size).fill(0)
  );
  //查找附近的格子是否一样
  const find = (x, y) => {
    visblelist[x][y] = 1;
    if (
      x < hsize - 1 &&
      gamemap[x + 1][y].nowseed === now &&
      visblelist[x + 1][y] === 0
    ) {
      visblelist[x + 1][y] = 1;
      flag++;
      list.push([x + 1, y]);
      find(x + 1, y);
    }
    if (
      x > 0 &&
      gamemap[x - 1][y].nowseed === now &&
      visblelist[x - 1][y] === 0
    ) {
      visblelist[x - 1][y] = 1;
      flag++;
      list.push([x - 1, y]);
      find(x - 1, y);
    }
    if (
      y < size - 1 &&
      gamemap[x][y + 1].nowseed === now &&
      visblelist[x][y + 1] === 0
    ) {
      visblelist[x][y + 1] = 1;
      flag++;
      list.push([x, y + 1]);
      find(x, y + 1);
    }
    if (
      y > 0 &&
      gamemap[x][y - 1].nowseed === now &&
      visblelist[x][y - 1] === 0
    ) {
      visblelist[x][y - 1] = 1;
      flag++;
      list.push([x, y - 1]);
      find(x, y - 1);
    }
  };
  find(x, y);
  if (flag >= 2) {
    return {
      flag: true,
      needchangelist: list,
    };
  } else {
    return {
      flag: false,
      needchangelist: list,
    };
  }
};
//存储当前种子
const exchangestore = () => {
  let temp;
  if (!storeseed.value) {
    storeseed.value = nowseed.value;
    randomseed();
  } else {
    temp = storeseed.value;
    storeseed.value = nowseed.value;
    nowseed.value = temp;
  }
};
</script>

<style>
@keyframes move {
  0% {
    left: 0;
    top: 0;
  }

  50% {
    left: var(--move-left-value);
    top: var(--move-top-value);
  }

  100% {
    left: 0;
    top: 0;
  }
}

.move-animation {
  animation-name: move;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

image {
  z-index: 4;
  width: 100%;
  height: 100%;
}

.opacity {
  opacity: 0.5;
}

.all-container {
  display: flex;
  justify-content: center;
  background-color: bisque;
}

.selector-container {
  width: 100vh;
  height: 30vh;
}

.gamemap {
}

.gamemaplineitem {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.5vw;
}

.gameitem {
  perspective: 1000;
  z-index: 0;
  position: relative;
  animation-duration: 1s;
  width: 15vw;
  height: 18vw;
  background-color: white;
  border-radius: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.selector-container {
  display: flex;
}

.storeitem {
  margin-left: 10vw;
  width: 15vw;
  height: 15vw;
  background-color: aqua;
}

.nowitem {
  margin: 5vw;
  width: 15vw;
  height: 15vw;
  border: 10px solid greenyellow;
  border-radius: 15%;
}

img {
  width: 80%;
  height: 80%;
}
</style> -->
