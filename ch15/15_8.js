const d = new Date(Date.UTC(1815, 9, 10));

// 다음 결과는 각 지역 기준입니다.
/*
console.log(d.getFullYear());
console.log(d.getMonth()); // 9는 10월을 의미
console.log(d.getDate());
console.log(d.getDay()); // 1 - 월요일
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
*/

// UTC 기준 메서드도 있음
console.log(d.getUTCFullYear());
console.log(d.getUTCMonth());
console.log(d.getUTCDate());
