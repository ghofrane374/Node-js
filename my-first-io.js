const fs = require("fs");
const file = process.argv[2];
const data = fs.readFileSync(file);
console.log(data.toString().split("\r\n").length);
