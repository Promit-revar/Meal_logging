const mongoose=require("mongoose");
const FoodItem=require("./FoodItems");
const LogSchema=mongoose.Schema({
    UserId: String,
    LogId:{
        type:mongoose.Schema.Types.ObjectId,
        auto: true
    },
    TimeStamp: {
        type: Date,
        default:Date.now(),
    },
    HashTags:[String],
    FoodItems:[FoodItem.schema]
});
const MealLog=mongoose.model("logs",LogSchema);
module.exports=MealLog;