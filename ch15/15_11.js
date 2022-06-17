const momentTz = require("moment-timezone");

// 사람이 느끼는 어림한 숫자로 시간을 표현
let m = momentTz().subtract(10, "seconds").fromNow();
console.log("1st: " + m);

m = momentTz().subtract(44, "seconds").fromNow();
console.log("2nd: " + m);

m = momentTz().subtract(45, "seconds").fromNow();
console.log("3rd: " + m);

m = momentTz().subtract(5, "minutes").fromNow();
console.log("4th: " + m);

m = momentTz().subtract(44, "minutes").fromNow();
console.log("5th: " + m);

m = momentTz().subtract(45, "minutes").fromNow();
console.log("6th: " + m);

m = momentTz().subtract(5, "hours").fromNow();
console.log("7th: " + m);

m = momentTz().subtract(21, "hours").fromNow();
console.log("8th: " + m);

m = momentTz().subtract(22, "hours").fromNow();
console.log("9th: " + m);

m = momentTz().subtract(300, "days").fromNow();
console.log("10th: " + m);

m = momentTz().subtract(345, "days").fromNow();
console.log("11th: " + m);
