const passport=require("passport");
const LocalStrategy = require('passport-local').Strategy
const User=require("../models/User");
const bcrypt=require("bcryptjs");
passport.use(new LocalStrategy(
    async (username,password,done)=>{
        const user=await User.findOne({username:username});
        if(!user) return done(null, false,{ message: 'Incorrect Username and Password!'});
        bcrypt.compare(password, user.password, function(err, res) {
                console.log(res);
                if(err){
                    return done(null, false,{ message: 'Incorrect Username and Password!' });
                }
                return done(null, user);
                
           
        
    });

}
));
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
