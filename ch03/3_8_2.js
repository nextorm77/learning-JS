// 여러 줄 문자열의 예
const multiline = "line1\
line2";
console.log(multiline);

const multiline2 = "line1\n\
line2";
console.log(multiline2);

const multiline3 = `line1
line2`;
console.log(multiline3);

const multiline4 = `line1
    line2
    line3`;
console.log(multiline4);

// 추천 예
const multiline5 = "line\n" + "line2\n" + "line3";
console.log(multiline5);

const currentTemp = 29.5;
const multiline6 =
  "Current temperature:\n" +
  `\t${currentTemp}\u00b0C\n` +
  "Don't worry...the heat is on!";
console.log(multiline6);
