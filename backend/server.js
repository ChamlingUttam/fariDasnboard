import express from 'express'
import { dbConnect } from './db/db.js'
import 'dotenv/config'
import crudRouter from './routes/crud.route.js'
import routerAuth from './routes/auth.route.js'
import cors from "cors"

const app = express()
const PORT = process.env.PORT ||4000 
app.use(express.json())

app.use(cors({
     origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

app.use("/api/auth",routerAuth)
app.use("/api/crud",crudRouter)

dbConnect()
app.listen(PORT,()=>{

    console.log("server is runing")

})