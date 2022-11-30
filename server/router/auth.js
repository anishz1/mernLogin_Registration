const express = require('express');

const router = express.Router();
require('../db/conn');
const User = require("../model/userSchema");
const jwt = require('jsonwebtoken');
const Authenticate=require('../middleware/authenticate')
router.get('/',(req, res)=>{
    res.send(`Hello world its from router`);  
}); 

// router.post('/register',(req, res)=>{
//     // console.log(req.body);
//     // res.json({message: req.body});
//     const {name, email, number, password, cpasword} = req.body;

//     if(!name || !email || !number || !password || !cpasword){
//         return res.status(422).json({error:"please filled the field properly"});
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error: "Email already exist"});
//         }
//         const user = new User({name, email, number, password, cpasword});

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfuly"});
//         }).catch((err)=>res.status(500).json(err)); // {error:"falied to registered"}       
//     }).catch(err=>{console.log(err);});

// });

// async await
router.post('/register',async (req, res)=>{
    // console.log(req.body);
    // res.json({message: req.body});
    const {name, email, number, password, cpasword} = req.body;

    if(!name || !email || !number || !password || !cpasword){
        return res.status(422).json({error:"please filled the field properly"});
    }

    try{
        const userExist= await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error: "Email already exist"});
        }

        const user = new User({name, email, number, password, cpasword});

        const userRegister= await user.save();
        if(userRegister){
            res.status(201).json({message:"user registered successfuly"});
        }
        else{
            res.status(500).json(err);
        } 
        
   
    }catch(err){
        console.log(err);
    }
});

// login route 
router.post('/login', async (req, res)=>{
    // console.log(req.body);
    // res.json({message:"awesome"})
    try{
        let token;
        const{email, password}=req.body;
        if(!email || !password){
            return res.status(400).json({error:"please filled the data"})

        }
        const userLogin= await User.findOne({email:email});
        console.log(userLogin);

        token = await userLogin.generateAuthToken();
        console.log(token);
        
        // cookies 
        res.cookie("jwtoken", token,{
            expires:new Date(Date.now()+25829000000),
            httpOnly:true
        });
        if(!userLogin){
            res.status(400).json({error:"user error"});
        }else{
            res.json({message:"user signin successfully"});
        }
 
    }catch(err){
        console.log(err);
    }
});
module.exports = router;