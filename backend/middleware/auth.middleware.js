import User from "../models/auth.model.js";
import jwt from 'jsonwebtoken'

export const protectedRoute = async (req,res,next)=>{
    try {
        const token = req.cookies.jwt

        if(!token){
            return res.status(403).json({message:"token not found"})
        }

        const decode = jwt.verify(token,process.env.JWT_SECRET)

        const user = await User.findById(decode.userId).select("-password")

        if(!user){
            return res.status(403).json("user not found")
        }

        req.user = user
        next()

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}