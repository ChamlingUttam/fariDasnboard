import { create } from "zustand";
import { api } from "../utils/api";
import toast from "react-hot-toast"

export const useCrudStore = create((set,get)=>({
    people:[],
    totalPeople:0,
    facultyWise:[],
    error:null,
    isCreating:false,
    isUpdating:false,
    isDeleting:false,


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
    },
    create:async(data)=>{
        set({isCreating:true})

        try {
            const res = await api.post("/crud/create",data)
            set((state)=>({
                people:[...state.people,res.data]
            }))
            await get().countFacultyWise()
            toast.success("Record created")
        } catch (error) {
            toast.error(error.message || "record is not created")
        }finally{
            set({isCreating:false})
        }
    },
    updateRecord:async(id,data)=>{
        set({isUpdating:true})
        try {
            const res = await api.put(`/crud/edit/${id}`,data)
            set((state)=>({
                people:state.people.map((p)=>
                p._id===id?res.data : p
                )
            }))
            await get().countFacultyWise()
            toast.success("Record updated")
        } catch (error) {
            toast.error(error.message||"cant update")
        }finally{
            set({isUpdating:false})
        }
    },
    deleteRecord:async(id)=>{
        set({isDeleting:true})
        try {
            await api.delete(`/crud./delete/${id}`)
            set((state)=>({
                people:state.people.filter((p)=>p._id !==id)
            }))
            await get().facultyWise()
            toast.success("Record deleted")
            
        } catch (error) {
            toast.error(error.message||"record is not deleted")
        }finally{
            set({isDeleting:false})
        }
    }
}))