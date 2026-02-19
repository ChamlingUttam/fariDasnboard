import axios from "axios"

export const api = axios.create({
    baseURL:"https://dasnboard.onrender.com",
    withCredentials:true,
})
