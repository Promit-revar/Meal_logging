const mongoose=require("mongoose");
const FoodItemSchema=mongoose.Schema({
    Name:{
        type: String,
        required:true
    },
    Ingredients:[String]
})
const FoodItem=mongoose.model("fooditems",FoodItemSchema);
module.exports={model:FoodItem,schema:FoodItemSchema};