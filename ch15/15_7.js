const momentTz = require("moment-timezone");
const d = new Date(Date.UTC(1930, 4, 10));

// 다음 결과는 타임존에 따라 다릅니다.
/*
console.log(d.toLocaleDateString());
console.log(d.toLocaleString());
console.log(d.toLocaleTimeString());
console.log(d.toTimeString());
console.log(d.toUTCString());
*/

console.log(momentTz(d).format("YYYY-MM-DD"));
console.log(momentTz(d).format("YYYY-MM-DD HH:mm"));
console.log(momentTz(d).format("YYYY-MM-DD HH:mm Z"));
console.log(momentTz(d).format("YYYY-MM-DD HH:mm [UTC]Z"));
console.log(momentTz(d).format("YYYY년 M월 D일 HH:mm"));

// Do의 소문자 o는 서수
console.log(momentTz(d).format("dddd, MMMM [the] Do, YYYY"));

console.log(momentTz(d).format("h:mm a"));
