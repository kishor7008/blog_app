const mongoose=require("mongoose");
const config=()=>{
    mongoose.connect("mongodb+srv://kishor7008:kishor7008@cluster0.24otvve.mongodb.net/?retryWrites=true&w=majority",()=>{
        console.log("mongodb connected")
    })
}
module.exports=config