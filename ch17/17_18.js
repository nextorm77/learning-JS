// 영어 텍스트안에 이메일 주소를 찾아서 하이퍼링크로 바꾸려고 함
// 이 예제에서는 이메일 주소가 글자로 시작하고 글자로 끝난다고 가정
const inputs = [
  "john@doe.com",
  "john@doe.com is my email",
  "my email is john@doe.com",
  "use john@doe.com, my email",
  "my email:john@doe.com",
];

const emailMatcher =
  /[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?/gi;

const output = inputs.map((s) =>
  s.replace(emailMatcher, '<a href="mailto:$&">$&</a>')
);

console.log(output);
