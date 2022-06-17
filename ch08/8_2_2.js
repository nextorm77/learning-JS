const arr = [1, 2, 3];
let tempArr = arr.concat(4, 5, 6); // 원래 arr은 변경되지 않고 사본을 반환
console.log(tempArr);
console.log(`tempArr: ${tempArr}`);
tempArr = arr.concat([4, 5, 6]);
console.log(tempArr);
tempArr = arr.concat([4, 5], 6);
console.log(tempArr);
tempArr = arr.concat(4, [5, 6]);
console.log(tempArr);
