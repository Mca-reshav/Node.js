const express=require('express');
const app=express();
const mongodb=require('mongodb');
const productModel=require('./product');
require('./config');

app.use(express.json());

app.delete('/delete',async(req,resp)=>{
    //console.log(req.params);
    
    let data=await productModel.deleteOne({name:"Nord2"})

    //let data=await productModel.deleteOne(req.body);

    resp.send(data);
    console.log(data);

    //let data=productModel;
    //const result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    //resp.send(result);
})
app.listen(6800);