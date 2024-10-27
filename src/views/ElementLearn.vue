<template>
  <div>
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
    </v-form-render>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import { ElMessage } from 'element-plus'

  const formJson = reactive({"widgetList":[{"key":53356,"type":"table","category":"container","icon":"table","rows":[{"cols":[{"type":"table-cell","category":"container","icon":"table-cell","internal":true,"widgetList":[],"merged":false,"options":{"name":"table-cell-16036","cellWidth":"","cellHeight":"","colspan":1,"rowspan":1,"wordBreak":false,"customClass":""},"id":"table-cell-16036"}],"id":"table-row-62479","merged":false}],"options":{"name":"table84032","hidden":false,"customClass":[]},"id":"table84032"},{"key":109646,"type":"file-upload","icon":"file-upload-field","formItemFlag":true,"options":{"name":"fileupload97295","label":"file-upload","labelAlign":"","labelWidth":null,"labelHidden":false,"columnWidth":"200px","disabled":false,"hidden":false,"required":false,"requiredHint":"","customRule":"","customRuleHint":"","uploadURL":"http://120.46.52.202/music","uploadTip":"","withCredentials":false,"multipleSelect":false,"showFileList":true,"limit":3,"fileMaxSize":5,"fileTypes":["doc","docx","xls","xlsx","mp3","lrc"],"customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onBeforeUpload":"","onUploadSuccess":"","onUploadError":"","onFileRemove":"","onValidate":""},"id":"fileupload97295"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":90,"labelPosition":"left","size":"","labelAlign":"label-center-align","cssCode":"","customClass":[],"functions":"","layoutType":"PC","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":""}})
  const formData = reactive({})
  const optionData = reactive({})
  const vFormRef = ref(null)

  const submitForm = () => {
    vFormRef.value.getFormData().then(formData => {
      // Form Validation OK
      alert( JSON.stringify(formData) )
    }).catch(error => {
      // Form Validation failed
      ElMessage.error(error)
    })
  }
</script>