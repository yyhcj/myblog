import { defineStore } from "pinia";
export const showdocker=defineStore("showdocker",{
    state:()=>{
        return {
            flag:true,
        }
    },
    actions:{
        showdocker(){
            this.flag=!this.flag;
        }
       
}})