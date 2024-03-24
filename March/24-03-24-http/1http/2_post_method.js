const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.method == 'POST'){

        res.writeHead(200,{'Content-Type':'text/plain'});

        res.end("welcome to post method");
    }
});

server.listen(8080);