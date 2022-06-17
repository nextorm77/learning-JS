const momentTz = require("moment-timezone");

// Date.UTC는 Date인스턴스가 아닌 숫자형 값을 반환
const d = new Date(Date.UTC(2016, 4, 27));
// const d = new Date(2016, 4, 27);
console.log("Date.UTC(2016, 4, 27): " + d.toString());

// Moment.js에 넘기는 배열은 JS의 Date 생성자에 넘기는 변수와 똑같고,
// 월은 0부터 시작
// toDate()는 Momnet.js 객체를 JS Date 객체로 변환
const lA = momentTz.tz([2016, 3, 27, 9, 19], "America/Los_Angeles").toDate();
console.log("LA: " + lA.toString());
const s = momentTz.tz([2016, 3, 27, 9, 19], "Asia/Seoul").toDate();
console.log("Seoul: " + s);
