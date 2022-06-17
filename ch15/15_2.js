// 아래 결과는 해당 지역의 표준시에 따라 다를 수 있음
let now = new Date();
//now = now.toString();
console.log("new Date(): " + now); // 현재 날짜

// JS의 월은 0으로 시작합니다. 즉 0은 1월이고, 1은 2월
let d = new Date(2015, 0); // 2015년 1월 1일 0시
//d = d.toString();
console.log("new Date(2015, 0): " + d);

d = new Date(2015, 1); // 2015년 2월 1일 0시
//d = d.toString();
console.log("new Date(2015, 1): " + d);

d = new Date(2015, 1, 14); // 2015년 2월 14일 0시
//d = d.toString();
console.log("new Date(2015, 1, 14): " + d);

d = new Date(2015, 1, 14, 13); // 2015년 2월 1일 0시
//d = d.toString();
console.log("new Date(2015, 1, 14, 13): " + d);

d = new Date(2015, 1, 14, 13, 30); // 2015년 2월 1일 0시
//d = d.toString();
console.log("new Date(2015, 1, 14, 13, 30): " + d);

d = new Date(2015, 1, 14, 13, 30, 5); // 2015년 2월 1일 0시
//d = d.toString();
console.log("new Date(2015, 1, 14, 13, 30, 5): " + d);

d = new Date(2015, 1, 14, 13, 30, 5, 500); // 2015년 2월 1일 0시
//d = d.toString();
console.log("new Date(2015, 1, 14, 13, 30, 5, 500): " + d);

// 유닉스 타임스탬프로 날짜 생성
d = new Date(0);
//d = d.toString();
console.log("new Date(0): " + d);

d = new Date(1000);
//d = d.toString();
console.log("new Date(1000): " + d);

d = new Date(1463443200000);
//d = d.toString();
console.log("new Date(1463443200000): " + d);

// 유닉스 시간 원점 이전의 날짜를 구할 때
d = new Date(-365 * 24 * 60 * 60 * 1000);
//d = d.toString();
console.log("new Date(-365 * 24 * 60 * 60 * 1000): " + d);

// 날짜 문자열 해석(표준시를 기준으로 합니다.)
d = new Date("June 14, 1903"); // 지역 표준시
console.log('new Date("June 14, 1903"): ' + d);

d = new Date("June 14, 1903 GMT-0000");
console.log('new Date("June 14, 1903 GMT-0000")' + d);
