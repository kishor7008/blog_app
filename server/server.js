const express=require("express");
const app=express();
const cors=require("cors")
const bcrypt=require("bcryptjs")
const config=require("./config/config")
const User=require('./models/userModel')
const blogRoute=require('./routes/blogRoute')
// const multer=require("multer")
// const upload = multer({ dest: 'uploads/' })
app.use("/uploads",express.static("uploads"))
config()
app.use(express.json());
app.use(cors())
const userRoute=require('./routes/userRoute');
const { protect } = require("./middlewares/authMiddware");

app.get('/',(req,res)=>{
    res.send("zhghc")
})


    

app.use("/register",userRoute)
app.use("/blog",blogRoute)






app.listen(4000,()=>{
    console.log("server started")
})