const express=require('express');
const app=express();
const con=require('./config')

app.use(express.json())

app.put('/',(req,resp)=>{
    const data=["S22 Plus","Samsung",75000,"Mid",8]
    con.query("UPDATE products SET name=?,brand=?,price=?,variant=? WHERE id=?",data,(err,result)=>{
        if(err) console.log("Error")
        resp.send(result)
        if(result.affectedRows==1) console.log("Result Updated Successfully")
    })

})
app.listen(8007);