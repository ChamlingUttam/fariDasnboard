import { generateToken } from "../libs/generateToken.js";
import User from "../models/auth.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullname: fullname.trim(),
      email: email.toLowerCase(),
      password: hashPass,
    });

    generateToken(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      fullname: newUser.fullname,
      email: newUser.email,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong with registration",
    });
  }
};


export const login = async (req,res)=>{
    try {
        const {email,password} = req.body

        if(!email||!password){
            return res.status(400).json("fill the field")
        }

        const ownEmail = await User.findOne({email})

        if(!ownEmail){
            return res.status(400).json("invalid credientaial")

        }

        const matchPass = await bcrypt.compare(password,ownEmail.password)

        if(!matchPass){
            return res.status(400).json("invalid crediential ")

        }


        generateToken(ownEmail._id,res)

        res.status(200).json({
            _id:ownEmail._id,
            email:ownEmail.email,
            fullname:ownEmail.fullname
        })
        
    } catch (error) {
        res.status(500).json({message:"something is wrong with login"||error.message})
    }
}


export const logout = async(req,res)=>
{
    try {
        res.cookie("jwt","",{
            maxAge:0,
            httpOnly:true
        })

        res.status(200).json({message:"logout suessfully"})
    } catch (error) {
        res.status(500).json({message:error.message||"something went wrong with logout"})
    }
}


export const changePass = async(req,res)=>{
  
}