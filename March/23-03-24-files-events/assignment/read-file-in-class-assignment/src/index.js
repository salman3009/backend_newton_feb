const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => { 
    let result = await fs.readFile(fileName);
    return result.toString();
};


module.exports =  reader ;
