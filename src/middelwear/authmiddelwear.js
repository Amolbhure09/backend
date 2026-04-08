import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"
import usermodel from "../models/usermodel.js"


const middlewear = async(req,res,next)=>{
   try {
    
    const token = await Headers.authrization
    if(!token)return res.status(401).json({msg:"token is not found"})
          
        const decode = Jwt.verify(token,secretkey123)
        user.id = decode.id
        next()
   } catch (error) {
    res.json({msg:"token invalid"})
   }
}