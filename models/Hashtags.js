const mongoose=require("mongoose");
const HashTagSchema=mongoose.Schema({
    id:{
        type:Number,
        default:1
    },
    hashtag:[String]
});
const HashTags=mongoose.model("hashtags",HashTagSchema);
module.exports=HashTags;