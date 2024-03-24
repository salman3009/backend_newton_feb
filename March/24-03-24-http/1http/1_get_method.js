const http = require('http');

const server = http.createServer((req,res)=>{
     //req and res is an object
     //req - incoming data from frontend particular in post method 
     //res - sending data from backend

     //header
     res.writeHead(202,{'Content-Type':'text/plain'});

     //body 
     res.end("welcome to newton school get method");
});

//port number 8080
server.listen(8080);