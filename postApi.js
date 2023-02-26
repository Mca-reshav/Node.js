//Express + Mongoose + Postman

//import config.js and product.js file to establish mongodb connection and product schema and model respectively.

const express=require('express');
require('./config');
const productModel=require('./product');

const app=express();

app.use(express.json());

app.post('/create',async(req,resp)=>{
    let data=new productModel(req.body);
    let result=await data.save();
    resp.send(result)
})
app.listen(6600);