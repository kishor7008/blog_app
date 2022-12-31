const express=require("express");
const router=express.Router();
const {register,login,getProfile,updateImage} =require("../controllers/userController")
const {protect}=require("../middlewares/authMiddware")
const multer=require("multer")
const upload = multer({ dest: 'uploads/' })
router.route("/").post(register);
router.route("/login").post(login);
router.route("/data").get(protect,getProfile)
router.route("/image").post(protect,upload.single('image'),updateImage)


module.exports=router;
