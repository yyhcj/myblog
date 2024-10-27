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

  const formJson = reactive({"widgetList":[{"key":112225,"type":"rich-editor","icon":"rich-editor-field","formItemFlag":true,"options":{"name":"richeditor105361","label":"rich-editor","labelAlign":"label-left-align","placeholder":"","labelWidth":null,"labelHidden":false,"columnWidth":"200px","contentHeight":"200px","disabled":false,"hidden":false,"required":false,"requiredHint":"","customRule":"","customRuleHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"onCreated":"","onMounted":"","onValidate":""},"id":"richeditor105361"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":[],"functions":"","layoutType":"PC","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":""}})
  const formData = reactive({})
  const optionData = reactive({})
  const vFormRef = ref(null)

  const submitForm = () => {
    vFormRef.value.getFormData().then(formData => {
      console.log(formData)
      // Form Validation OK
      alert( JSON.stringify(formData) )
    }).catch(error => {
      // Form Validation failed
      ElMessage.error(error)
    })
  }
</script>