import express from 'express'
import { create, deleteInfo, readAll, totalCount, update } from '../controller/crud.controller.js'
import { protectedRoute } from '../middleware/auth.middleware.js'
import { isAdmin } from '../middleware/isAdmin.js'

const router = express.Router()

router.post("/create",protectedRoute,isAdmin,create)
router.put("/edit/:id",protectedRoute,isAdmin,update)
router.delete("/delete/:id",protectedRoute,isAdmin,deleteInfo)
router.get("/",readAll)
router.get('/count',totalCount)

export default router