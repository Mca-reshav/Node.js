const express=require('express');
const app=express();
const productModel=require('./product');
require('./config');

app.use(express.json());

app.put('/update',async(req,resp)=>{
    const data=await productModel.updateOne(
       // {name:"Pixel7 Pro"},
       req.headers,
        {$set:req.body}

    )
    resp.send(data);
    console.log(data);
})
app.listen(6900);