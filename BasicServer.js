/*
const http=require('http');      this module http is used to handle request and response
http.createServer().listen(5000);
        this function is used to pass function as parameter
*/

const http=require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>Hello World</h1>");
    resp.end();
}).listen(5100);

