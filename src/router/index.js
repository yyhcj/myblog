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
import WeloginView from '@/views/WeloginView.vue';
import EventContainer from '@/components/wepagelogined/EventContainer.vue';
import AddEvent from '@/components/wepagelogined/AddEvent.vue';
import FuturePlan from '@/components/wepagelogined/FuturePlan.vue';
import EventDetail from '@/components/wepagelogined/EventDetail.vue';
import DailyView from '@/views/DailyView.vue';
import AddDailyidea from '@/views/AddDailyidea.vue';
import ElementLearn from '@/views/ElementLearn.vue';
import ScdataManage from '@/views/ScdataManage.vue';
import ShowTime from '@/views/ShowTime.vue';
import Showtime_M from '@/views/Showtime_M.vue';
import ManageIndex from '@/views/ManageIndex.vue';
import MyRecord from '@/views/MyRecord.vue';
import Scnomal_M from '@/views/Scnornal_M.vue';
import Sc_AddMusic from '@/views/Sc_Addmusic.vue';
const routes = [
  {path:"/record",component:MyRecord},
  {path:"/scmusic",component:Sc_AddMusic},
  {path:'/scnormal',component:Scnomal_M},
  {path:'/manage',component:ManageIndex},
  {path:'/showtime',component:ShowTime},
  {path:'/showmanage',component:Showtime_M},
   {path:'/scmanage',component:ScdataManage},
  {path:'/learn',component:ElementLearn},
  {path:'/nb',component:cjnb,children:[
    {path:'sport',component:SportRouter},
    {path:'fjnu',component:FjnuRouter},
    {path:'computer',component:ComputerRouter},
    {path:'friend',component:MakefriendRouter},
    {path:'world',component:LookworkRouter}
  ]},
  {path:'/adddaily',component:AddDailyidea},
  {path:'/daily',component:DailyView},
  {path:'/wepage',component:WeloginView,children:[
    {path:'',component:EventContainer},
    {path:'addevent',component:AddEvent},
    {path:'detail',component:EventDetail},
    {path:'future',component:FuturePlan}
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