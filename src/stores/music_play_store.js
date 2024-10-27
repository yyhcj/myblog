import { defineStore } from "pinia";
export const musicdata=defineStore('musicdata',{
    state:()=>{
        return{
            now_music_path:'',
            now_geci_path:'',
            now_id:''
        }
    },
    actions:{
        update_music(data){
            this.now_music_path=data
        },
        update_geci(data){
            this.now_geci_path=data
        },
        update_id(data){
            this.now_id=data
        }
    }
})