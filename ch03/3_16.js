const now = new Date();
console.log(now);

// 특정 날짜에 해당하는 객체 생성
const halloween = new Date(2016, 9, 31); // 월은 0에서 시작, 즉 9는 10월
console.log(halloween); //

// 특정 날짜, 시각
const halloweenParty = new Date(2016, 9, 31, 19, 0);
console.log(halloweenParty);

console.log(halloweenParty.getFullYear()); // 2016
console.log(halloweenParty.getMonth()); // 9
console.log(halloweenParty.getDate()); // 31
console.log(halloweenParty.getDay()); // 1 (월요일, 일요일은 0)
console.log(halloweenParty.getHours()); // 19
console.log(halloweenParty.getMinutes()); // 0
console.log(halloweenParty.getSeconds()); // 0
console.log(halloweenParty.getMilliseconds()); // 0
