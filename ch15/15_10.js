const momentTz = require("moment-timezone");
const dates = [];

// 랜덤한 날짜를 몇 개 만듦
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;
for (let i = 0; i < 10; i++) dates.push(new Date(min + delta * Math.random()));
//console.log(dates);

// dates 배열은 랜덤으로 만들었으므로 (아마) 뒤죽박죽일 것입니다.
// 다음과 같이 날짜 역순으로 정렬할 수 있음
dates.sort((a, b) => b - a); // (b - a)가 참같은 값일 때 변경
//console.log(dates);
// 날짜 순으로 정렬
dates.sort((a, b) => a - b);
//console.log(dates);

let m = momentTz(); // 현재
console.log(m);

m.add(3, "days"); // m은 이제 3일 뒤입니다.
console.log(m);

m.subtract(2, "years"); // m은 이제 2년 전으로부터 3일이 지난 날짜입니다.
console.log(m);

m = momentTz(); // reset
console.log(m);

m.startOf("year"); // m은 이제 올해의 1월 1일
console.log(m);

m.endOf("month"); // m은 이제 올해의 1월 31일
console.log(m);

// m2는 이제 3일 전으로부터 10시간 뒤인 달의 마지막 순간
let m2 = momentTz().add(10, "hours").subtract(3, "days").endOf("month");
console.log(m2);
