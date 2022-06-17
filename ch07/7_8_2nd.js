/*
x; // ReferenceError
let x = 3;
*/
/*
console.log(x);
var x = 3;
console.log(x);
*/
var x; // 선언(할당은 아닌)이 자동으로 끌어올려집니다.
console.log(x);
x = 3;
console.log(x);
