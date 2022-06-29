
const fs = require('fs');
const _ = require("lodash");

const full= require('./new-en-default.json');
const blank= require('./blank-new.json');

// Using the _.merge() method
// console.log(
// _.merge({ blank }, { full })
// );

// const newFile = _.merge({ blank }, { full })
// // let data = JSON.stringify(newFile);

// fs.writeFile('merged-file.json', newFile, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });  

// const jsonArr = []
// jsonArr.push(full)
// console.log(JSON.parse(full))

// for (let i = 0; i < full.length)


// FLATTEN

const obj = {
  "one": 1,
  "two": {
     "three": 3
  },
  "four": {
     "five": 5,
     "six": {
        "seven": 7
     },
     "eight": 8
  },
  "nine": 9
};
const flattenJSON = (obj = {}, res = {}, extraKey = '') => {
  for(key in obj){
     if(typeof obj[key] !== 'object'){
        res[extraKey + key] = obj[key];
     }else{
        flattenJSON(obj[key], res, `${extraKey}${key}.`);
     };
  };
  return res;
};
// console.log(flattenJSON(full));
// const flatRes = (flattenJSON(full));
// console.log(typeof flatRes)

// for (const property in flatRes) {
//   console.log(`${property}: ${flatRes[property]}`);
// }

//RETURNS TOP LEVEL KEYS
// console.log(Object.getOwnPropertyNames(full));
// console.log(full.collections.filters.all_tags)

console.log(Object.entries(full))