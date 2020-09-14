const mymodule = require("./mymodule");
const dossier = process.argv[2];
const extens = process.argv[3];
mymodule(dossier, extens, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
