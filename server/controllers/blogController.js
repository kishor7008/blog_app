const Blog=require('../models/blogModel');
const { use } = require('../routes/blogRoute');
const addBlog=async(req,res)=>{
    console.log(req.body,req.file)
    const user=await Blog.findOne({user:req.user._id});
    if(user){
const blogs=[...user.blog,{image:`${req.file.path}`,
category:`${req.body.category}`,
heading:`${req.body.heading}`,
content:`${req.body.content}`
}]
res.json(blogs)
const addNewBlog=await Blog.updateOne({user:req.user._id},{$set:{blog:blogs}})

res.status(200).json(addNewBlog)
    }else{
        const newBlog=new Blog({
            user:req.user._id,
            blog:[{image:`${req.file.path}`,
            category:`${req.body.category}`,
            heading:`${req.body.heading}`,
            content:`${req.body.content}`}]
        })
        await newBlog.save();
        console.log(newBlog)
        res.status(200).json(newBlog);
    }
}

const getOwnBlog=async(req,res)=>{
    const user=await Blog.findOne({user:req.user._id});
    res.json(user.blog)
}

const getAllBlog=async(req,res)=>{
let blogs=await Blog.find();
let blog=  blogs.map((item)=>item.blog)
let allBlog=blog.flat()

res.json(allBlog)
}

module.exports={addBlog,getOwnBlog,getAllBlog}