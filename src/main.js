import { createApp } from 'vue';
import App from './App.vue';// 引入根组件
import router from './router';         // 引入路由
import ElementPlus from 'element-plus'// 引入element-plus
import 'element-plus/dist/index.css';//element-plus样式
import * as Icons from '@element-plus/icons-vue';// 引入图标库
import VForm3 from 'vform3-builds'  //引入VForm3库
import 'vform3-builds/dist/designer.style.css'  //引入VForm3样式
import { createPinia } from 'pinia';// 引入pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';//pinia持久化插件
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.use(VForm3);
app.use(ElementPlus);
 // 全局注册图标组件
 for (const [key, component] of Object.entries(Icons)) {
    app.component(key, component);
  }
app.mount('#app');
