const express=require('express')
const app=express();
const con=require('./config')

app.use(express.json());

app.post('',(req,resp)=>{
    const data=req.body;
    
    con.query("INSERT INTO products SET?",data,(err,result,field)=>{
        if(err) throw Error;
        resp.send(result);
        console.log(result.affectedRows);
    })
})
app.listen(7005)