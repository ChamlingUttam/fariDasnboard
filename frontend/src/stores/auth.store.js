import {create} from "zustand"
import { api } from "../utils/api"
import toast from 'react-hot-toast'

export const useAuthStore = create((get,set)=>({
    authUser:null,
    isLoggingIn:false,
    isRegistering:false,



    register:async(data)=>{
        set({isRegistering:true})
        try {
        const res = await api.post("/auth/register",data)
        set({authUser:res.data})    
        toast.success("sucessfully registered")
        } catch (error) {
            toast.error(error.response?.data?.message||"register failed")
        }
        finally{
            set({isRegistering:false})
        }
        
    },

    login:async(data)=>{
        set({isLoggingIn:true})
        try {
            const res = await api.post("/auth/login",data)
            set({authUser:res.data})
            toast.success("login sucessful")
        } catch (error) {
            toast.error(error.response?.data?.message||"login failed")

        }finally{
            set({isLoggingIn:false})
        }
    },
}))