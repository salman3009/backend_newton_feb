const fs = require('fs');
 

const data = fs.readFileSync('./newton.txt',
    { encoding: 'utf8' });

// Display the file data
console.log(data);
console.log("blocking operation");