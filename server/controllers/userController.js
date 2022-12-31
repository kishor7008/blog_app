const e = require("express");
const User=require("../models/userModel")
const bcrypt=require('bcryptjs')

const geterateToken=require("../utils/generateToken")
const register=async(req,res)=>{
  console.log(req.body)
  const p=await User.findOne({email:req.body.email});
 
  if(p){
      res.status(400).json("already exist")
  }else{
  const newPassword= await bcrypt.hash(req.body.password,10)
      const response=new User({
          name:req.body.name,
          number:req.body.number,
          email:req.body.email,
          password:newPassword
      })

      await response.save();
      res.json(response)
  }
}


const login=async(req,res)=>{
  const already=await User.findOne({email:req.body.email});
  // const validPassword = await bcrypt.compare(req.body.password, already.password);
if(already && await bcrypt.compare(req.body.password, already.password)){
  res.json(
    {
      _id:already._id,
      name:already.name,
      number:already.number,
      email:already.email,
      password:already.password,
      token:geterateToken(already._id)
    }
  )
  
}else{
res.json("error")
}
}

const getProfile=(async(req,res)=>{
  const response=await User.find({_id:req.user._id})
  res.json(response)
})


const updateImage=async(req,res)=>{
  
console.log(req.file)
    const response=await User.updateOne({_id:req.user._id},{$set:{image:`${req.file.path}`}})
  res.json("response");
}
module.exports={register,login,getProfile,updateImage}