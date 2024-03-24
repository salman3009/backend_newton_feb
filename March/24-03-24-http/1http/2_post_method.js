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
              const object = JSON.parse(result);
              console.log(object.age,object.name);

              if(object.age>=18){
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end("You are eligible to vote");
              }
              else{
                res.writeHead(400,{'Content-Type':'text/plain'});
                res.end("You are not eligible to vote");
              }

            

        })

      
    }
});

server.listen(8080);