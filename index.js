const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname);
const filePath=`\demo.txt`;

//create
fs.writeFileSync(filePath,'This is a simple text file');

//read
fs.readFile(filePath,'utf8',(err,item)=>{
    console.log(item)
})

//update
fs.appendFile(filePath,' and filename is demo',(err)=>{
    if(!err)console.log(">---file is updated successfully---<")
})

//rename
fs.rename(filePath,`${dirPath}/test.txt`,(err)=>{
    if(!err)console.log(">---file is renamed successfully---<")
})

//delete
fs.unlinkSync(`${dirPath}/demo.txt`)
