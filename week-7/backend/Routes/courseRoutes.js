const {Router} =require("express");
const { courseModel, adminModel } = require("../Database/db");
const { adminMiddleware } = require("../middleware/auth");

const router=Router();

module.exports=router;