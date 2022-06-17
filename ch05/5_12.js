const roomTempC = 21.5;
let currentTempC = 19.5;
const message =
  `The current temperature is ` +
  `${currentTempC - roomTempC}\u00b0C different than room temperature.`;
// 템플릿 문자열안에 표현식 사용
// 표현식은 값이므로 값이 들어갈 수 있는 곳에는 어디든 사용 가능
const fahrenheit = `The current temperature is ${
  (currentTempC * 9) / 5 + 32
}\u00b0F.`;
console.log(message);
console.log(fahrenheit);
