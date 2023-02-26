const express=require('express');
const app=express();
const con=require('./config');

app.get('/',(req,resp)=>{
    con.query("SELECT * FROM products",(err,result)=>{
        if(err){
            console.log("Error occured")
        }else{
            console.log(result)
        }
            resp.send(result)
    })
})
app.listen(7003);

//you can use same route for different methods like get , post , put  and delete