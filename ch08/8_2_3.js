"use strict";
const arr = [1, 2, 3, 4, 5];
let tempArr = arr.slice(3);
console.log(tempArr);
tempArr = arr.slice(2, 4);
console.log(tempArr);
tempArr = arr.slice(-2);
console.log(tempArr);
tempArr = arr.slice(1, -2);
console.log(tempArr);
tempArr = arr.slice(-2, -1);
console.log(tempArr);
