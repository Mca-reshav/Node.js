const express=require('express');
require('./config.js');
const productModel=require('./product.js')

const app=express();

app.use(express.json());

app.get('/read',async(req,resp)=>{
    let data=await productModel.find({name:"Fold4"});
    resp.send(data);
    console.log(data);
})
app.listen(9800);