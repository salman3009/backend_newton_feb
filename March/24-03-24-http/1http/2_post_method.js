const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.method == 'GET'){
        res.writeHead(200,{'Content-Type':'text/plain'});

        res.end("welcome to get method");
    }


    if(req.method == 'POST'){

        req.on('data',(input)=>{
              const response = Buffer.from(input);
              const result = response.toString();
              console.log(result);

        })

        res.writeHead(200,{'Content-Type':'text/plain'});

        res.end("welcome to post method");
    }
});

server.listen(8080);