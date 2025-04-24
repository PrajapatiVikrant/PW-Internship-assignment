import jwt from "jsonwebtoken"
import { config } from "dotenv";
import userModel from "../model/user.js";

config();


const auth = {
     login:async(req,res)=>{
       const {email,password} = req.body
       console.log(req.body)
       try {
          if(!email || !password) return res.json({message:"both email and password are required"})
         const checkUserExist = await userModel.findOne({email});
         if(!checkUserExist) return res.json({status:404,message:"You are not found register now if not have any account"});
         const token = await jwt.sign({email,password},process.env.JWT_SECRET_KEY,{expiresIn:'1h'})
         return (checkUserExist.comparePassword(password))?res.json({message:"Login successfully",status:200,token:token}):res.json({status:203,message:"wrong password"})


       } catch (error) {
           return  res.json({
               status:500,
               message:"somthing went wrong"
            })
       }
     },

     signUp:async(req,res)=>{
        const {email,password}=req.body;
        try {
          const checkAlreadyExist = await userModel.findOne({email:email});
          if(checkAlreadyExist) return res.json({message:"You are already exist please login now"});
          const data = new userModel({
               email,
               password
          })
          await data.save();
        return res.json({
               status:200,
               message:"Registration succussfully"
          })
        } catch (error) {
          console.log(error)
          return  res.json({
               status:500,
               message:"somthing went wrong"
            })
        }
     }


}

export default auth;