import { createRouter, createWebHashHistory } from 'vue-router';
import main from '../views/MainView.vue';
import RemenberView from '../views/RemenberView.vue';
import MarkView from '../views/MarkView.vue';
import ReviewView from '../views/ReviewView.vue'
import RemdefaView from '../views/RemdefaView.vue'
import cjnb from '../views/ChenjunNb.vue'
import ScMain from '@/views/ScMain.vue';
import AboutCom from '@/views/AboutCom.vue';
import LoginCom from '@/components/admin/LoginCom.vue';
import MusicDetail from '@/views/MusicDetail.vue';
import AddMusic from '@/views/AddMusic.vue';
import SportRouter from '@/components/cjnb/SportRouter.vue';
import FjnuRouter from '@/components/cjnb/FjnuRouter.vue';
import ComputerRouter from '@/components/cjnb/ComputerRouter.vue';
import MakefriendRouter from '@/components/cjnb/MakefriendRouter.vue';
import LookworkRouter from '@/components/cjnb/LookworkRouter.vue';
const routes = [
  {path:'/nb',component:cjnb,children:[
    {path:'sport',component:SportRouter},
    {path:'fjnu',component:FjnuRouter},
    {path:'computer',component:ComputerRouter},
    {path:'friend',component:MakefriendRouter},
    {path:'world',component:LookworkRouter}
  ]},
  {path:'/addmusic',component:AddMusic},
  {path:'/admin',component:LoginCom},
  {path:'/music',component:MusicDetail},
  {path:'/about',component:AboutCom},
  { path: '/', component: main},
  {path:'/sc',component:ScMain},
  { path: '/rem', component: RemenberView,children:[
    {path:'',component:RemdefaView},
    {path:'mark',component:MarkView},
    {path:'review',component:ReviewView},
  ]}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;