const http = require('http');
const fs = require('fs')
http.createServer((req,res)=>{
    fs.readFile('index.html','utf-8',(err,data)=>{
        res.writeHead(200, {"Content-type" : "text/html"});
        res.write(data);
        res.end();

    })
}).listen(8080, () =>{
    console.log("serverrunning")
})

