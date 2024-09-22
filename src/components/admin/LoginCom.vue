<template>
  <input type="text" v-model="username">
  <input type="text" v-model="password">
  <button @click="login">进入</button>

</template>

<script>
export default {
data(){
    return{
        username:'',
        password:''
    }
},
methods:{
        login(){
            console.log(this.username)
        }
    }
}
</script>

<style>

</style>