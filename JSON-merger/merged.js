var fp = require('lodash/fp');

const oldCH= require('./old-CH-locales.json');
const newCH= require('./dawn-CH-new.json');

// const newJson = fp.merge(oldCH, newCH);
// console.log(newJson)

// const newFile = {...newCH, ...oldCH}
// console.log(newFile)

// ========

// LOG OLDCH FIRST LEVEL KEYS

console.log('OLD KEYS')

// for (var key in oldCH) {
//     if (oldCH.hasOwnProperty(key)) {
//         console.log(key + " -> " + oldCH[key]);
//     }
// }

// --------

const oldkeys = Object.keys(oldCH)



console.log('NEW KEYS')

// for (var key in newCH) {
//     if (newCH.hasOwnProperty(key)) {
//         // const newCHKeys = key
//         // console.log(newCHKeys)
//         console.log(key + " -> " + newCH[key]);
//     }
// }

const keys = Object.keys(newCH)


const innerkeys = Object.keys(keys[0])




//  for (var i=0; i<json.jsonData.length; i++) {
//     for (var key in json.jsonData[i]) {
//         for (var j= 0; j<json.jsonData[i][key].length; j++) {
//             console.log(json.jsonData[i][key][j])
//         }
//     }
//  }

// FLATTEN JSON OBJECT

const flattenObj = (obj, parent, res = {}) => {
    for (const key of Object.keys(obj)) {
      const propName = parent ? parent + '.' + key : key;
      if (typeof obj[key] === 'object') {
        flattenObj(obj[key], propName, res);
      } else {
        res[propName] = obj[key];
      }
    }
    return res;
  }
  
  const flattened = flattenObj(oldCH)
  console.log(flattened)
   
// Object.values(flattened).map(node => {
//         console.log(node)
// })

// _.filter(users, 'active');


