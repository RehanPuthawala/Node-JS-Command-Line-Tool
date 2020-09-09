//* Working With Modules in Node.js *//

const fs = require("fs");

//* Data Appending To Different Files *//
fs.appendFile(
  "C:\\Users\\Mo.Rehan Puthawala\\Desktop\\testingNode.txt",
  "Testing fs.appendFile Function",
  (err) => {
    if (err) throw err;

    console.log("Data Successfully appended");
  }
);

//* Renaming Different Files *//

// fs.rename(
//   "C:\\Users\\Mo.Rehan Puthawala\\Desktop\\testingNode.txt",
//   "C:\\Users\\Mo.Rehan Puthawala\\Desktop\\testedNode.txt",
//   (err) => {
//     if (err) throw err;

//     console.log("Name changed");
//   }
// );

//* Reading Files *//

fs.readdir("./", (err, files) => {
  if (err) throw err;
  console.log(files);
});

//* Watch Files *//

// fs.watchFile(
//   "C:\\Users\\Mo.Rehan Puthawala\\Deskto p\\testingNode.txt",
//   (current, prev) => {
//     console.log(`The files current name is ${current.mtime}`);
//     console.log(`The files current name is ${prev.mtime}`);
//   }
// );

//*Renaming This File *//

// fs.rename("./testing.js", "./working-with-module.js", (err) => {
//   if (err) throw err;
//   console.log("file renamed");
// });
