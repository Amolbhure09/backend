import express from "express"
import {createuser,getuser,updateuser,deleteuser} from "../controllers/usercontrollers.js"



const userRouter =  express.Router()


userRouter.post("/",createuser)
userRouter.get("/",getuser)
userRouter.put("/:id",updateuser)
userRouter.delete("/:id",deleteuser)



export default userRouter