import Crud from "../models/curd.model.js";


export const create = async(req,res)=>{

    const {contact,faculty,position,gender} = req.body

    try {
        if(!contact||!faculty||!position||!gender){
            return res.status(403).json({message:"fill the required field"})
        }

        const newInfoCreate = await Crud.create({faculty,contact,gender,position})
        res.status(201).json(newInfoCreate)
    } catch (error) {
        res.status(500).json({message:error.message||"something went wromg with create"})
    }
} 


export const update = async (req,res)=>{
    const{id} =req.params
    const {faculty,gender,position,contact} = req.body
    try {
        const updateInfo = await Crud.findByIdAndUpdate(id,{faculty,gender,position,contact},{new:true})
        res.status(200).json(updateInfo)
    } catch (error) {
            return res.status(500).json({message:error.message||"something went wrong with edit"})        
    }
}

export const readAll = async (req,res)=>{
    try {

        const getInfo = await Crud.find()
        res.status(200).json(getInfo)
        
    } catch (error) {
            return res.status(500).json({message:error.message||"can read the info"})        
        
    }
}


export const deleteInfo = async (req,res)=>{
    try {
        const {id}  = req.params

        await Crud.findByIdAndDelete(id)
        res.status(200).json({message:"delted sucessfully"})
    } catch (error) {
            return res.status(500).json({message:error.message||"something went wrong with delete"})        
        
    }
}