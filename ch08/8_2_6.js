const arr = new Array(5).fill(1);
console.log(arr);
arr.fill("a");
console.log(arr);
arr.fill("b", 1);
console.log(arr);
arr.fill("c", 2, 4); // 끝 인덱스 바로 앞까지 가져옴
console.log(arr);
arr.fill(5.5, -4);
console.log(arr);
arr.fill(0, -3, -1);
console.log(arr);
