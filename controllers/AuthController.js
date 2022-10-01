require("../config/database");
const User=require("../models/User");
const bcrypt=require("bcryptjs");
exports.Signup=async (req,res)=>{
    var result=await User.findOne({email:req.body.email});
    if(result){
        res.status(401).send({message:"User Already exists!"});
    }
    else{
    var hash = bcrypt.hashSync(req.body.password, 10);
    const user=await User({
        username:req.body.uname,
        password:hash,
        email:req.body.email
    });
    user.save();
    //console.log(user);
    res.status(200).send({message:"User Successfully signed up !!"});
    }
}