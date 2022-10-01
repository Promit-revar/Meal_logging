const MealLog=require("../models/MealLog");
const FoodItem=require("../models/FoodItems");
const HashTag=require("../models/Hashtags");
exports.createLog=async (req,res)=>{
    var fooditems=new Array();
    for(var i=0;i<req.body.fooditems.length;i++){
        var fooditem=await FoodItem.model.findOne({Name:req.body.fooditems[i]});
        if(fooditem){
        fooditems.push(fooditem);
        }
        //console.log(fooditem);
    }
    var Tags=await HashTag.find({id:1});
    //console.log(Tags);
    for(var i=0;i<req.body.hashtags.length;i++){
        
        if(!Tags[0].hashtag.find(element=>element==req.body.hashtags[i])){
            await HashTag.findOneAndUpdate({id:1},{$push:{
                hashtag:req.body.hashtags[i]
            }});
            Tags.push(req.body.hashtags[i]);
            //console.log(req.body.hashtags[i]);
        }
    }
    //res.send(fooditems);

    const log=await MealLog.create({
        userId:req.body.userId,
        HashTags:req.body.hashtags,
        FoodItems:fooditems
    });
    log.save();
    res.status(200).send({data:log,success:true});
}
exports.getLogs=async (req,res)=>{
    const logs=await MealLog.find({userId:req.headers.userid});
    res.status(200).send({data:logs,success:true});
}
exports.getHashTags=async (req,res)=>{
    const Tags=await HashTag.find({id:1});
    res.status(200).send({data:Tags[0]["hashtag"],success:true});
}
exports.getFoodItems=async (req,res)=>{
    const fooditems=await FoodItem.model.find({name:"Paneer Tikka Masala"});
    res.status(200).send({data:fooditems,success:true});
}
