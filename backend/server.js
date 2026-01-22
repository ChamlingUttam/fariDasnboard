import express from 'express'
import { dbConnect } from './db/db.js'
import 'dotenv/config'
import crudRouter from './routes/crud.route.js'
import routerAuth from './routes/auth.route.js'

const app = express()
const PORT = process.env.PORT ||4000 
app.use(express.json())

app.use("/api/auth",routerAuth)
app.use("/api/crud",crudRouter)

dbConnect()
app.listen(PORT,()=>{

    console.log("server is runing")

})