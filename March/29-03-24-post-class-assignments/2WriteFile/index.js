const fs = require('fs/promises');

async function writeFileAction(){
     try{
         await fs.access('post.txt');
         console.log("file already exist");
     }catch(err){
          await fs.writeFile('post.txt',"welcome to in class");
          console.log("file is created");
     }
   
}
writeFileAction();