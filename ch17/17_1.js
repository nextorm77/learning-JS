const input = "As I was going to Saint Ives";

let result = input.startsWith("As");
console.log("1st: " + result);

result = input.endsWith("Ives");
console.log("2nd: " + result);

result = input.startsWith("going", 9); // 인덱스 9에서 시작
console.log("3rd: " + result);

result = input.endsWith("going", 14); // 인덱스 14를 문자열의 끝으로 간주
console.log("4th: " + result);

result = input.includes("going");
console.log("5th: " + result);

result = input.includes("going", 10); // 인덱스 10에서 시작하면 going이 없음
console.log("6th: " + result);

result = input.indexOf("going");
console.log("7th: " + result);

result = input.indexOf("going", 10);
console.log("8th: " + result);

result = input.indexOf("nope");
console.log("9th: " + result);

// 대소문자 구분없이 비교하기
result = input.toLowerCase().startsWith("as");
console.log("10th: " + result);

// JS의 원래 문자열은 불변
const newStr = input.toLowerCase();
console.log(newStr);
console.log(input);

const output = input.replace("going", "walking");
console.log(output);
console.log(input);
