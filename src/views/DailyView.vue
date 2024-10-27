<template>
<div class="out">
<HeaderCom></HeaderCom>
<DailtList></DailtList>
<DrawerAdd></DrawerAdd>
</div>
</template>

<script>
import DailtList from '@/components/daily/DailtList.vue';
import DrawerAdd from '@/components/daily/DrawerAdd.vue';
import HeaderCom from '@/components/daily/HeaderCom.vue';
export default {
components:{
HeaderCom,
DailtList,
DrawerAdd
}

}
</script>

<style scoped>

</style>