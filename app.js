#!/usr/bin/env node

const fs = require("fs");
const util = require("util");
const targetPath = process.argv[2] || process.cwd();
const path = require("path");

console.log(targetPath);
// const chalk = require("chalk");

//# Method 2
// const  lastat  = util.promisify(fs.lstat);

//# Method No: 3
const { lstat } = fs.promises;

fs.readdir(targetPath, async (err, files) => {
  if (err) throw new Error(err);
  const filesStatPromises = files.map((file) =>
    lstat(path.join(targetPath, file))
  );
  const allData = await Promise.all(filesStatPromises);

  for (data of allData) {
    const index = allData.indexOf(data);

    // data.isFile() === true
    //   ? console.log(files[index])
    //   : chalk.green.bgWhite.bold(files[index]);
    console.log(files[index]);
  }
});

//# Method 1

// const stat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stat) => {
//       if (err) reject(err);
//       resolve(stat);
//     });
//   });
// };
