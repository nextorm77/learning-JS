const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);

console.log(d1 > d2);
console.log(d1 < d2);

// 15.10 날짜 연산
const msDiff = d2 - d1;
console.log(msDiff);
const daysDiff = msDiff / 1000 / 60 / 60 / 24;
console.log(daysDiff);
