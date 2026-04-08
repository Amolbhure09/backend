import usermodel from "../models/usermodel.js";
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"



const createuser = async(req,res)=>{
    const{name,email,password, mobile} = req.body
    const user = await usermodel.create({name,email,password, mobile})
    res.send("user created")
}

 const signup = async(req,res)=>{
   try {
    const{name,email,password,mobile}= req.body
    const existemail = await usermodel.findOne({email})
    if(!existemail)return res.status(400).json({msg:"email is all ready register"})



        const existmobile = await usermodel.findOne({mobile})
        if(!existmobile)return res.status(400),json({msg:"mobile is allready register"})


            const hashpassword = await bcrypt.compare(password,"user:password")


            const user = await usermodel.create({
                name,
                email,
                password:hashpassword,
                mobile
            })
 
        
   } catch (error) {
      res.status(500).json({msg:"internal server"})
   }
       }
    

       const login = async(req,res)=>{
          const{email,password,mobile,name}= req.body
          const user = await usermodel.findOne({email})
          if(!user)return res.status(400).json({msg:"user not found"})


            const match = await brcypt.compare(user,"user:password")
            if(!match)return res.status(400).json({msg:"user creadiantials"})


                const token = jwt.sign(id,"user:id",(secreatekey), ("expirsIn=2h"))
                res.json({msg:"login succsessfully", user})


       } 
 

const getuser = async(req,res)=>{
    const user = await usermodel.find()
    res.send(user)
}


const updateuser = async (req,res)=>{
    const {id} = req.params
    const user = await usermbodel.findByidAndupdate(id,"user:id",{new:true})
res.send ("userupdated")
}


const deleteuser = async(req,res)=>{
    const{id} = req.params
    const user = await usermodel.findByidAndDelete(id)
    console.log("deleteuser");
    
}


export {createuser,getuser,updateuser,deleteuser}