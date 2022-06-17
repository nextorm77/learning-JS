const re1 = /going/; // 단어 'going'를 찾을 수 있는 정규식
const re2 = new RegExp("going"); // 생성자를 사용했지만 결과는 동일

const input = "As I was going to Saint Ives";
const re = /\w{3,}/gi;

// 문자열(input)의 메서드를 사용할 때
console.log(input.match(re));
console.log(input.search(re)); // 3글자 이상의 첫 단어의 인덱스

// 정규식(re)의 메서드를 사용할 때
console.log(re.exec(input)); // 처음 일치하는 것
console.log(re.exec(input)); // exec는 마지막 위치를 기억함
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input)); // 일하는 것이 더이상 없음
console.log(re.test(input)); // input에는 세 글자 이상으로 이루어진 단어가 한 개 이상 있음

// 위 예제는 모두 정규식 리터럴을 그대로 써도 됨
console.log(input.match(/\w{3,}/gi));
console.log(input.search(/\w{3,}/gi));
console.log(/\w{3,}/gi.test(input));
