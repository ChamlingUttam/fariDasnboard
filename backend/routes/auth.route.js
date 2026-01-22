import express from 'express'
import { login, logout, register } from '../controller/auth.controller.js'

const routerAuth = express.Router()


routerAuth.post("/register",register)
routerAuth.post("/login",login)
routerAuth.post("/logout",logout)
export default routerAuth