import { defineStore } from "pinia";
export const islogin=defineStore('islogin',{
    state:()=>{
        return{
            isloginvalue:false,
        }
    },
    actions:{
        updateislogin(){   
            this.isloginvalue=true;
        },
        cancellogin(){
            this.isloginvalue=false;
        }
    },
    persist: {
        enabled: true, // 启用持久化
        strategies: [
            {
                key: 'islogin', // 存储的键名
                storage: localStorage, // 使用 localStorage 存储
                paths: ['isloginvalue'], // 指定需要持久化的状态路径
            }
        ]
    }
})