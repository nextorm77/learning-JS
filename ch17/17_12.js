const text = "Visit oreilly.com today!";
// 캡쳐하지 않은 그룹: (?:[subexpression]) 형태
// [subexpression]이 일치 패턴
const match = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
console.log(match);

const html =
  '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
  '<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' +
  '<link rel="stylesheet" href="//anything.com/flexible.css">\n';

const matches = html.match(/(?:https?)?:?\/\/[a-z][a-z0-9-]+[a-z0-9]+/gi);
console.log(html);
console.log(matches);
