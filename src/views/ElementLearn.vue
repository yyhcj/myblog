<template>
  <el-button plain @click="dialogFormVisible = true">
    Open a Form nested Dialog
  </el-button>
  <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  <br>
  <DrewerInput></DrewerInput>
  <InforWindow ref="Infor" :list="list1" :api="api"></InforWindow>
  <button @click="open">
    打开对话框
  </button>
</template>


<script  setup>
import { reactive, ref } from 'vue'
import DrewerInput from '../components/Element/DrewerInput.vue';
import InforWindow from '../components/GlobalCom/InforWindow.vue';
// const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

//获取子组件
const Infor = ref(null)
//点击设置子组件的值
const open = () => {
  Infor.value.isvisible=true
}
const api=ref('http://120.46.52.202:3000/addinfor')
const list1=ref(["name","address","phone"])
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

</script>
