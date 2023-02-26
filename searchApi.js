const express=require('express');
const app=express();
const productModel=require('./product');
require('./config');

app.use(express.json());

app.get('/search/:key',async(req,resp)=>{
    console.log(req.params.key);
    let data=await productModel.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}}
        ]
    })
    resp.send(data);
})
app.listen(6400);