const global = require('axios');

function initial(){
   global.get('https://jsonplaceholder.typicode.com/users').then((result)=>{
      console.log(result.data)
   }).catch((error)=>{
       console.log(error);
   })
}

initial();