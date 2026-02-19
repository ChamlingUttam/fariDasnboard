import axios from "axios"

export const api = axios.create({
    baseURL:"https://faridasnboard.onrender.com",
    withCredentials:true,
})
