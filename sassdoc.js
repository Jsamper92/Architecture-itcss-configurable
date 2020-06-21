let sassdoc = require("sassdoc");

sassdoc("./styles/sass/**/*.scss", {
  verbose: true,
  dest: "./Api sassdoc",
}).then((documentation) => {
  console.log(documentation);
  console.log("Your documentation has been generated!");
}).catch(err => console.log(err), console.log('Ocurrio un error'))
