const express = require('express');
// const mongoose = require('mongoose');
const app= express();

require('./db/conn');
// const DB= 'mongodb+srv://debashish:debashish@cluster0.wk1lmbs.mongodb.net/mernstack?retryWrites=true&w=majority';
// user schema import 
// const Userr= require('./model/userSchema')

// we link the router files to make our route easy 
app.use(express.json( ));
app.use(require('./router/auth'));


// mongoose.connect(DB
//     // ,
//     // useNewUrlParser:true,
//     // useCreateIndex:true,
//     // useFindAndModify:false
//     ).then(()=>{
//     console.log(`connection successful`);
// }).catch((err)=>console.log(`no connection`));


// middleware 
// const middleware=(req, res, next)=>{
//     console.log(`i am middleware`);
//     next();
// }



app.get('/',(req, res)=>{
    res.send(`Hello world its /`);  
});
app.get('/about',(req, res)=>{
    console.log(`i am about after middlewar`);
    res.send(`Hello world2`);  
});
app.get('/news',(req, res)=>{
    res.send(`Hello world3`);  
});
app.get('/contact',(req, res)=>{
    res.send(`Hello world4`);  
});



app.listen(5000,()=>{
    console.log(`server is running at port no 5000`)
});