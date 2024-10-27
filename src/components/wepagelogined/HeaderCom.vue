<template>
    <div class="find">
<el-input v-model="findword" placeholder="查找记录的事件" style="width: 60vw;height: 7vw;"></el-input>
<el-button @click="commit" style="height: 7vw;width: 15vw;" type="primary"><el-icon><Search /></el-icon>搜索</el-button>

</div>
</template>

<script>
import axios from 'axios';
import {weloginpagestore} from '@/stores/weloginpagestore'
export default {
data(){
return{
    findword:"",
    list:[]
}
},
methods:{
    commit(){
      axios.post('http://120.46.52.202:3000/findevent',{findword:this.findword}).then(response => {
        this.list=response.data;
        console.log(this.list);
        const store=weloginpagestore();
        store.updatelist(response.data)
        console.log("111",store.datalist);

      })

    }
}
}
</script>

<style scoped>
.find{
    height: 7vw;
}
</style>