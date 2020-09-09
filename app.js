#!/usr/bin/env node

const fs = require("fs");
const util = require("util");
const chalk = require("chalk");

//# Method 2
// const  lastat  = util.promisify(fs.lstat);

//# Method No: 3
const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, files) => {
  if (err) throw new Error(err);
  const filesStatPromises = files.map((file) => lstat(file));
  const allData = await Promise.all(filesStatPromises);

  for (data of allData) {
    const index = allData.indexOf(data);

    data.isFile() === true
      ? console.log(files[index])
      : chalk.green.bgWhite.bold(files[index]);
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
