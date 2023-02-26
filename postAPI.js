const express=require('express')
const app=express();
const con=require('./config')

app.post('',(req,resp)=>{
    const data=[{       //here we are passing the static data 
        id:6,
        name:'Iphone13Pro',
        brand:'Apple',
        price:105000,
        variant:'Top'
    }]

    //pass dynamic data
    
    con.query("INSERT INTO products SET?",data,(err,result,field)=>{
        if(err) throw Error;
        resp.send(result);
    })
})
app.listen(7004)