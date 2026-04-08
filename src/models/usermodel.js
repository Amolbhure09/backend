import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },

    email:{
        type:String,
        require:true,

    },

    mobile:{
        type:Number,
        require:true
    },
    password:{
        type:Number,
        require:true,
    }
})


const usermodel = mongoose.model("user",userSchema)
export default usermodel