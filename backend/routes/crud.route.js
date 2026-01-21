import express from 'express'
import { create, deleteInfo, readAll, update } from '../controller/crud.controller.js'

const router = express.Router()

router.post("/create",create)
router.put("/edit/:id",update)
router.delete("/delete/:id",deleteInfo)
router.get("/",readAll)

export default router