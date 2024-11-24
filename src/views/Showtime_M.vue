<template>
  <LoginCom v-if="!isloginflag"></LoginCom>
  <div class="container" v-if="isloginflag">
    <div class="item"><el-button type="success" @click="opendialog">添加记录</el-button></div>
    <div class="item" v-for="(item,index) in list" :key="index">
       <div class="title">{{ item.showtime_title }}</div>
       <div class="detail">{{ item.showtime_detail }}</div>
       <img :src=item.showtime_img alt="">
       <div class="time">{{ item.showtime_time }}</div> 
       <div class="buttons">
       <el-button type="primary" @click="change(index)">修改</el-button>
       <el-button type="danger" @click="deletecomfirm(item.showtime_id)">删除</el-button>
      </div>
    </div>
  </div>
  <!-- 修改对话框 -->
  <el-dialog v-model="dialogFormVisible" title="修改" width="500">
    <el-form :model="form">
      <el-form-item label="时刻标题" :label-width="formLabelWidth">
        <el-input v-model="list[needchangeindex].showtime_title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="时刻图片" :label-width="formLabelWidth">
        <el-input v-model="list[needchangeindex].showtime_img" autocomplete="off" />
      </el-form-item>
      <el-form-item label="时刻详情" :label-width="formLabelWidth">
        <el-input v-model="list[needchangeindex].showtime_detail" autocomplete="off" />
      </el-form-item>
      <el-form-item label="时刻时间" :label-width="formLabelWidth">
        <el-input v-model="list[needchangeindex].showtime_time" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="commitchange">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  <!-- 和上一个一样 ，这个是添加记录的-->
  <el-dialog v-model="dialogFormVisible1" title="修改" width="500">
    <el-form :model="form">
      <el-form-item label="时刻标题" :label-width="formLabelWidth">
        <el-input v-model="add_data.showtime_title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="时刻图片" :label-width="formLabelWidth">
        <el-input v-model="add_data.showtime_img" autocomplete="off" />
      </el-form-item>
      <el-form-item label="时刻详情" :label-width="formLabelWidth">
        <el-input v-model="add_data.showtime_detail" autocomplete="off" />
      </el-form-item>
      <el-form-item label="时刻时间" :label-width="formLabelWidth">
        <el-input v-model="add_data.showtime_time" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="commitadd">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import LoginCom from '../components/admin/LoginCom.vue';
import axios from 'axios';
import { ref,watch} from 'vue';
import {islogin} from '@/stores/islogin'
const store = islogin();
const isloginflag=ref(store.isloginvalue)
watch(() => store.isloginvalue, () => {
  isloginflag.value = store.isloginvalue;
  console.log(isloginflag.value)
});
const list = ref([])
//获取界面数据
const getdata=()=>{
   axios.post('http://120.46.52.202:3000/getshowtime').then((res)=>{
     list.value=res.data
     console.log(list.value)
})
}
getdata()
//需要修改的数据的下标
const needchangeindex=ref()
//对话框默认不可见
const dialogFormVisible = ref(false)
const dialogFormVisible1 = ref(false)
const formLabelWidth = '140px'
//点击修改按键时触发
const change=(index)=>{
  dialogFormVisible.value = true
  needchangeindex.value=index
}
//点击确认修改时触发
const commitchange=()=>{
  axios.post('http://120.46.52.202:3000/changeshowtime',{list:list.value[needchangeindex.value]}).then((res)=>{
    if(res.data){
      alert('修改成功')
      getdata()
      dialogFormVisible.value = false
    }else{
      alert('修改失败')
    }
  })
}
//删除
//要不要确认
const deletecomfirm=(id)=>{
  const result=window.confirm('确定删除吗')
  if(result){
    deleteshowtime(id)
  }
  else{
    return
  }
}
//确认删除
const deleteshowtime=(id)=>{
  axios.post('http://120.46.52.202:3000/deleteshowtime',{id:id}).then((res)=>{
    if(res.data){
      alert('删除成功')
      getdata()
    }else{
      alert('删除失败')
    }
  })
}
//添加记录绑定的数据
const add_data = ref({
  showtime_title: '',
  showtime_img: '',
  showtime_detail: '',
  showtime_time: '',
})
//打开添加数据对话框
const opendialog=()=>{
  dialogFormVisible1.value = true
}
//确认添加
const commitadd=()=>{
  axios.post('http://120.46.52.202:3000/addshowtime',{add_data:add_data.value}).then((res)=>{
    if(res.data){
      alert('添加成功')
      getdata()
      dialogFormVisible1.value = false
    }else{
      alert('添加失败')
    }
  })
}
</script>

<style scoped>
.container{
border:1px solid black;

}
.item{
    display: flex;
    justify-content: space-around;
    height: 100px;
    background-color: rgb(200, 241, 241);
    margin-top: 10px;
    align-items: center;
}
img{
    height: 100px;
}
.title{
  width: 100px;
}
.detail{
  width: 100px;
}
.time {
  width: 100px;
}
</style>