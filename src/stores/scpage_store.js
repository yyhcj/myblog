import { defineStore } from "pinia";
export const scpage=defineStore('scpage',{
    state:()=>{
        return{
            now_roundphoto_list:[],
            now_likebest_list:[],
            now_normal_list:[]
        }
    },
    actions:{
        update_round(data){
            this.now_roundphoto_list=data
        },
        update_like(data){
            this.now_likebest_list=data
        },
        update_normal(data){
            this.now_normal_list=data
        }
    }
})