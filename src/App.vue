<template>
  <div>
<router-view></router-view>
<RecoverDocker></RecoverDocker>
<DockerCom class="docker"></DockerCom>
</div>
</template>

<script>
import axios from 'axios';
import RecoverDocker from './components/GlobalCom/RecoverDocker.vue';
import DockerCom from '@/components/GlobalCom/DockerCom.vue';
export default {
  data(){
    return{
     list:[]
    }
  },
  components:{
    RecoverDocker,
    DockerCom
  },
methods:{
  demo(){
    axios.post("http://113.125.106.224:3000/api/getdetail",{
  }).then((response)=>{
    this.list=response.data
    console.log(response.data)
  }).catch((error)=>{
    console.error(error)
  })
  }
}
}

</script>

<style scoped>
.docker{
  width: 100%;
  height: 23%;
  position: fixed;
  top: 78%;
}


</style>
