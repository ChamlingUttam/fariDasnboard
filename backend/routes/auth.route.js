import express from 'express'
import { changePass, login, logout, register } from '../controller/auth.controller.js'
import { protectedRoute } from '../middleware/auth.middleware.js'

const routerAuth = express.Router()


routerAuth.post("/register",register)
routerAuth.post("/login",login)
routerAuth.post("/logout",logout)
routerAuth.post('/changePass',protectedRoute,changePass)
export default routerAuth