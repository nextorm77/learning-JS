const beer99 =
  "99 bottles of beer on the wall " +
  "take 1 down and pass it around -- " +
  "98 bottles of beer on the wall.";
//const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g); // 1단계
//const matches = beer99.match(/[0123456789]/g); // 2단계
//const matches = beer99.match(/[0-9]/g); // 3단계

// 범위 결합 가능, 글자와 숫자, 기타 구둣점을 찾음(공백 빼고 다 찾음)
// '-'은 escape해야 함. 하지 않으면 범위를 나타내는 메타문자로 간주
//const matches = beer99.match(/[\-0-9a-z.]/gi);

// 문자셋을 제외할 때는 맨앞에 '^'사용, 공백만 찾음
//const matches = beer99.match(/[^\-0-9a-z.]/gi);
const matches = beer99.match(/\W/g);

console.log(matches);
