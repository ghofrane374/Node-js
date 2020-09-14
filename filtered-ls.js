const dossier = process.argv[2];
const extens = process.argv[3];
fs.readdir(dossier, (err, data) => {
  if (err) console.log(err);
  else {
    if (extens)
      console.log(
        data.filter((elt) => {
          tab = elt.split(".");
          return tab[tab.length - 1] == extens;
        })
      );
    else console.log(data);
  }
});
