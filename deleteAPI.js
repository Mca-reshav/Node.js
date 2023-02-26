const express=require('express')
const app=express();
const con=require('./config')

app.delete('/:id',(req,resp)=>{
    con.query("DELETE FROM products WHERE id="+req.params.id,(err,result)=>{
        if(err) console.log("Error Occured");
        if(result.affectedRows==1) console.log("Data Deleted Successfully");
        resp.send(result);
    })
})
app.listen(8018);