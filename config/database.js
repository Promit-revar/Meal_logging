const mongoose=require("mongoose");
require('dotenv').config();
const username=process.env.DBusername;
const password=process.env.DBpassword;
const Database=process.env.DBname;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.nfnlcqf.mongodb.net/${Database}?retryWrites=true&w=majority`)
.then(()=>{
    console.log("Connected Sucessfully");
})
.catch(err=>{
    console.log(err);
});