const skipIt = true;
let x = 0;
const result1 = skipIt || x++;
console.log(`result1: ${result1}, x: ${x}`); // result: true, x: 0

let doIt = false;
doIt = true;
let y = 0;
const result2 = doIt && y++;
console.log(`result2: ${result2}, y: ${y}`);
