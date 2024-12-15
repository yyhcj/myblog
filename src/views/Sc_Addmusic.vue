<template>
    <LoginCom v-if="!isloginflag"></LoginCom>
  <div v-if="isloginflag">
<div class="container">
  <div class="item"><el-button type="success" @click="opendialog">添加记录</el-button></div>
  <div class="item" v-for="(item,index) in list" :key="index">
     <div class="title">{{ item.name }}</div>
     <div class="img"><img :src=item.img alt=""></div> 
     <div class="type">{{ item.class }}</div>
     <div class="buttons">
     <el-button type="primary" @click="change(index)">修改</el-button>
     <el-button type="danger" @click="deletecomfirm(index)">删除</el-button>
    </div>
  </div>
</div>
<!-- 修改对话框 -->
<el-dialog v-model="dialogFormVisible" title="修改" width="500">
  <el-form :model="form">
    <el-form-item label="名称" :label-width="formLabelWidth">
      <el-input v-model="list[needchangeindex].name" autocomplete="off" />
    </el-form-item>
    <el-form-item label="图片" :label-width="formLabelWidth">
      <el-input v-model="list[needchangeindex].img" autocomplete="off" />
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
    <el-form-item label="名称" :label-width="formLabelWidth">
      <el-input v-model="add_data.name" autocomplete="off" />
    </el-form-item>
   <label for="">音频</label> <input type="file" id="music"><br>
    <label for="">歌词</label><input type="file" id="geci">
    <el-form-item label="图片" :label-width="formLabelWidth">
      <el-input v-model="add_data.img" autocomplete="off" />
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
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref,watch} from 'vue';
import LoginCom from '../components/admin/LoginCom.vue';
const list = ref([])
  //判断有没有权限访问
  import {islogin} from '@/stores/islogin'
const store = islogin();
const isloginflag=ref(store.isloginvalue)
watch(() => store.isloginvalue, () => {
  isloginflag.value = store.isloginvalue;
  console.log(isloginflag.value)
});
//获取界面数据
const getdata=()=>{
 var lovelist=[]
  axios.post('http://120.46.52.202:3000/get_sc_musicdata',{type:'lovebest',keyword:'music'}).then((res)=>{
   lovelist=res.data
})
 axios.post('http://120.46.52.202:3000/get_sc_musicdata',{type:'normal',keyword:'music'}).then((res)=>{
   list.value=lovelist.concat(res.data)
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
axios.post('http://120.46.52.202:3000/changescnoraml',{list:list.value[needchangeindex.value],keyword:'music'}).then((res)=>{
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
axios.post('http://120.46.52.202:3000/deletescnormal',{keyword:'music',id:list.value[id][`musicid`]}).then((res)=>{
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
name: '',
img: '',
})
//打开添加数据对话框
const opendialog=()=>{
dialogFormVisible1.value = true
}
//确认添加
//获取输入框的音乐文件和歌词文件并加到formdata中
const commitadd=()=>{
const formData = new FormData();
const music=document.getElementById('music')
const geci=document.getElementById('geci')
formData.append('file', music.files[0]);
const formData1=new FormData()
formData1.append('file',geci.files[0]);
axios.post('http://120.46.52.202:3000/addmusic',{name:add_data.value.name,img:add_data.value.img,musicpath:`http://abc.cjnb.site/${music.files[0].name}`,gecipath:`http://sm2n4r5ma.hn-bkt.clouddn.com/${geci.files[0].name}`,type:'normal'}).then((res)=>{
      if(res.data){
      console.log(res.data)
      alert('添加成功')}
    else{
      alert('添加失败')
    }}
    )
axios.post('http://120.46.52.202:3000/uptoqiniu',formData)
axios.post('http://120.46.52.202:3000/uptoqiniu',formData1).then((res)=>{
  if(res.data){
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
.img{
  width: 300px;
  display: flex;
  justify-content: center;
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
.type{
width: 100px;
}
</style>