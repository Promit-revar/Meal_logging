const express=require('express');
const app=express();
const routes=require('./Routes/web');
const session=require("express-session");
const flash=require("express-flash");
//const bodyParser=require("body-parser");
require('dotenv').config();
//app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,                        // Resave our session vars when nothing is saved...
    saveUninitialized:false              // Do you want to save an empty value in session if nothing is initialised...?
}));
app.use(flash());
app.use(routes);


app.listen(8000,()=>console.log("Server Running on Port 8000"));