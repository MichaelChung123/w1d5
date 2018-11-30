var chalk = require("chalk");

var message = "Hello " + chalk.bgRed.bold.black.underline("World");
console.log(message);