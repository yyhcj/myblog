<template>
  <div>
    <HeaderCom></HeaderCom>
<router-view></router-view>
</div>
</template>

<script>
import axios from 'axios';
import HeaderCom from './components/HeaderCom.vue'
export default {
  data(){
    return{
     list:[]
    }
  },
  components:{
    HeaderCom
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


.HeaderCom{
font-size: 30px;
width: 100%;
height: 100px;

}
</style>
