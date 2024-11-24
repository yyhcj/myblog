import { defineStore } from "pinia";
export const Cjnbstore=defineStore('Cjnbstore',{
    state:()=>{
        return{
            nowtag:''
        }
    },
    actions:{
        updatenowtag(data){
            this.nowtag=data
        }
    }
})