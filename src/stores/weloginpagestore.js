import { defineStore } from "pinia";
export const weloginpagestore=defineStore('weloginpagestore',{
    state:()=>{
        return{
            datalist:[]
        }
    },
    actions:{
        updatelist(data){
            this.datalist=data
        }
    }
})