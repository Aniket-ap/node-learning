const validator = require("validator");
// const chalk = require("chalk")
const getNotes = require("./notes");

const msg = getNotes();

console.log(msg);

const isMail = "aniket@gmail.com";

console.log(validator.isEmail(isMail));
// console.log(chalk.green("Success..."));
