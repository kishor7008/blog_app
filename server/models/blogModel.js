const mongoose=require("mongoose");
const blowSchema=mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      blog:[{
        image:{
           type:String,

        },
        category:{
            type:String
        },
        heading:{
            type:String,
        },
        content:{
            type:String
        }
    }
      ]
})

const Blog=mongoose.model("blog",blowSchema)
module.exports=Blog