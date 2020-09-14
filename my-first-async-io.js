const fs = require("fs");
const file = process.argv[2];
const data = fs.readFile(file, (err, data) => {
  if (err) console.log(err);
  else console.log(data.toString().split("\r\n").length);
});
