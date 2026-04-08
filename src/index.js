import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRouter from "./Routes/userRoute.js"
dotenv.config()


const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5555

const connectdb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://amolbhure09:amolbhure09@cluster0.x7cbfol.mongodb.net/?appName=Cluster0")
        console.log("database connected");
        
    } catch (error) {
        console.log(error);
        
    }
}

connectdb()

app.get("/",(req,res)=>{
    res.send("welcom to our server")
})




app.use("/api/user",userRouter)


app.listen("5555",()=>{
     console.log(`server is running`);
     
})