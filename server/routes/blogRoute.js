

const express=require("express");
const router=express.Router();
const multer=require("multer")
const upload = multer({ dest: 'uploads/' })
const {protect}=require("../middlewares/authMiddware")
const {addBlog,getOwnBlog,getAllBlog}=require('../controllers/blogController')
router.route("/").post(protect,upload.single('image'),addBlog);
router.route("/data").get(protect,getOwnBlog)
router.route("/alldata").get(getAllBlog)


module.exports=router;
