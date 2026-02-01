import { create } from "zustand";
import { api } from "../utils/api";

export const useCrudStore = create((set)=>({
    people:[],
    totalPeople:0,
    facultyWise:[],
    counting:false,
    error:null,

    countPeople:async ()=>{
        set({loading:true})
        try {
            const res = await api.get("/crud")
            set({people:res.data})
        } catch (error) {
            set({error:error.message})
        }
        finally{
            set({loading:false})
        }
    },

    countFacultyWise:async()=>{
        set({loading:true})
        try {
            const res = await api.get("/crud/count")
            set({
                totalPeople:res.data.totalPeople,
                facultyWise:res.data.facultyWise
            })
        } catch (error) {
                       set({error:error.message})

        }finally{
            set({loading:false})
        }
    }
}))