const express=require('express');
const passport = require('passport');
const FoodItem=require('../models/FoodItems');

const router=express.Router();
const authcontroller=require("../controllers/AuthController");
const DataController=require("../controllers/DataController");
const HashTags = require('../models/Hashtags');
require("../middlewares/authmiddleware");
require('dotenv').config();
router.get("/",(req,res)=>{
    res.send("<h1>Welcome Worlds!</h1>");
});
router.post("/signup",authcontroller.Signup);
router.post("/login",passport.authenticate("local"),(req,res)=>{
    res.send("success");
});
router.post("/createLog",DataController.createLog);
router.get("/logs",DataController.getLogs);
router.get("/ingredients",DataController.getFoodItems);
router.get("/tags",DataController.getHashTags);


module.exports=router;