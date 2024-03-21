const global = require('os');

let platform = global.platform();
console.log(platform);

let arch = global.arch();
console.log(arch);

let mem = global.totalmem();
console.log(mem);