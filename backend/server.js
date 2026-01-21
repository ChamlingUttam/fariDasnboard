import express from 'express'
import { dbConnect } from './db/db.js'

const app = express()
const PORT = process.env.PORT ||4000 
app.use(express.json())

dbConnect()
app.listen(PORT,()=>{

    console.log("server is runing")

})