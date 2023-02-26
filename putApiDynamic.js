const express=require('express');
const app=express();
const con=require('./config')

app.use(express.json())

app.put('/:id',(req,resp)=>{
    const data=[req.body.name,req.body.brand,req.body.price,req.params.id]
    con.query("UPDATE products SET name=?,brand=?,price=? WHERE id=?",data,(err,result)=>{
        if(err) console.log("Error Occured")
        resp.send(result)
        if(result.affectedRows==1) console.log("Result Updated Successfully")
    })

})
app.listen(8017);