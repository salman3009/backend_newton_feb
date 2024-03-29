const fs = require('fs/promises');

async function updateFile(){
     await fs.appendFile('newton.txt',"\n welcome to post class assignment");
     console.log("file is updated");
}
updateFile();