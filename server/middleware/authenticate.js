const jwt= require("jsonwebtoken");
const User= require("../model/userSchema");

const Authenticate=async(req,res,next)=>{
    try{

        const token=req.cookies.jwtoken;
        const verifyToken= jwt.verify(token, "MYNAMEISDEBAHSISHJENATHEDEVELOPER");

        const rootUser=await User.findOne({_id:verifyToken._id, "tokens:token":token});
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;

        next();

    }catch(err){
        res.status(401).send('Unauthorized:NO token provided');
        console.log(err); 
    }

}

module.exports=Authenticate;