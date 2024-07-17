import { createRouter, createWebHashHistory } from 'vue-router';
import main from '../views/MainView.vue';
import RemenberView from '../views/RemenberView.vue';
import MarkView from '../views/MarkView.vue';
import ReviewView from '../views/ReviewView.vue'
const routes = [
  { path: '/', component: main},
  { path: '/rem', component: RemenberView,children:[
    {path:'mark',component:MarkView},
    {path:'review',component:ReviewView},
  ]}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;