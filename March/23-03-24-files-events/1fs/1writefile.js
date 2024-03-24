const global = require('fs/promises');

const fileName = "newton.txt";
const content = "welcome to nodejs. hello newton";

async function createNewFile(){
   await global.writeFile(fileName,content);
   console.log("file is created");
}

createNewFile();