const global = require('fs/promises');

const fileName = "newton.txt";
const content = "\nMock interview will start";

async function updateFile(){
   await global.appendFile(fileName,content);
   console.log("file is updated");
}

updateFile();