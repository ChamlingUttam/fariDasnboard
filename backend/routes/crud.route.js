import express from 'express'
import { create, deleteInfo, readAll, totalCount, update } from '../controller/crud.controller.js'
import { protectedRoute } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post("/create",create)
router.put("/edit/:id",update)
router.delete("/delete/:id",deleteInfo)
router.get("/",readAll)
router.get('/count',protectedRoute,totalCount)

export default router