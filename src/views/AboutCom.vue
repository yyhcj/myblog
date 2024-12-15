<template>
  <div>
    <!-- <vue-particles id="tsparticles" @particles-loaded="particlesLoaded" url="http://foo.bar/particles.json" /> -->

    <vue-particles id="tsparticles" @particles-loaded="particlesLoaded" />
    <div class="aaa">
      <div class="text">本站建于2022年7月</div>
      <div class="text">一名fjnu2022级软件工程本科生</div>
      <div class="text">立志成为程序员道路上的第一次实践</div>
    </div>
  </div>
</template>

<script setup>
import { tsParticles } from "@tsparticles/engine";
import { loadSeaAnemonePreset } from "@tsparticles/preset-sea-anemone";
(async () => {
  await loadSeaAnemonePreset(tsParticles);
  await tsParticles.load({
    id: "tsparticles",
    options: {
      background: {
        color: {
          value: "#000", // 粒子颜色
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // 可用的click模式有: "push", "remove", "repulse", "bubble"。
          },
          onHover: {
            enable: true,
            mode: "repulse", // 可用的hover模式有: "grab", "repulse", "bubble"。
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#dedede", // '#dedede'。线条颜色。
          distance: 200, // 线条长度
          enable: true, // 是否有线条
          opacity: 0.5, // 线条透明度。
          width: 1, // 线条宽度。
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 2, // 粒子运动速度。
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 150, // 粒子数量。
        },
        opacity: {
          value: 0.5, // 粒子透明度。
        },
        shape: {
          type: "circle", // 可用的粒子外观类型有："circle","edge","triangle", "polygon","star"
        },
        size: {
          random: true,
          value: 2, // 粒子大小。
        },
      },
      detectRetina: true,
    },
  });
})();
</script>

<style scoped>
/* 可以添加针对粒子容器的样式，比如设置宽度、高度、背景色等 */
#particle-container {
  width: 100%;
  height: 300px;
  background-color: black;
}
.bbb {
  z-index: -1;
}
.aaa {
  color: white;
  font-family: "Arial Black", sans-serif;
  font-weight: 900;
  font-size: 2.5vw;
  position: fixed;
  top: 30vh;
  left: 30vw;
  width: 40vw;
  height: 40vh;
  opacity: 0.5;
  z-index: 1000;
}
.text {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
