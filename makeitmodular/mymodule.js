const fs = require("fs");
module.exports = (dossier, extens, callback) => {
  fs.readdir(dossier, (err, data) => {
    if (err) callback(err);
    else {
      if (extens)
        callback(
          data.filter((elt) => {
            tab = elt.split(".");
            return tab[tab.length - 1] == extens;
          })
        );
      else callback(data);
    }
  });
};
