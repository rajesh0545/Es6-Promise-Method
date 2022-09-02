// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);


const count = true;
let countValue = new Promise(function (resolve, reject) {
  if(count) {
    resolve ("There is a count value.");
  } else {
    reject ("There is not a count value");
  }
});

console.log(countValue);