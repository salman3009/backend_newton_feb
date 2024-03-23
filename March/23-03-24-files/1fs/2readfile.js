const global = require('fs/promises');
const fileName="newton.txt";

async function readingFile(){
   let result = await global.readFile(fileName);
   console.log(result);//unicode string buffer
   result = result.toString();
   console.log(result);
}
readingFile();