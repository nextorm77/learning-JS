const numStr = "33.3";
const num = Number(numStr); // Number객체의 인스턴스가 아님.

const a = parseInt("16 volts", 10); // " volts"는 무시, 10진수 16
console.log(a);
const b = parseInt("3a", 16); // 16진수 3a를 10진수로 변환, 결과는 58
console.log(b);
const c = parseFloat("15.5 kph"); // " kph"는 무시, parseFloat는 항상 기수를 10으로 가정
console.log(c);

const d = new Date(); // 현재 날짜
const ts = d.valueOf(); // UTC 1970년 1월 1일 자정으로부터 몇 밀리초가 지났는 지 나타내는 숫자
console.log(ts);

// 불리언 값을 1(true) 또는 0(false)으로 변경
const e = true;
const n = e ? 1 : 0; // 변환시 조건연산자 사용
console.log(n);
