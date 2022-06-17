const html =
  `<a class="foo" href="/foo" id="foo">Foo</a>\n` +
  `<A href='/bar' Class="bar">Bar</a>\n` +
  `<a href="/baz">Baz</a>\n` +
  `<a onclick="javascript:alert('qux!')" href="/qux">Qux</a>`;
/*
const parts = html.match(/<a\s+(.*?)>(.*?)<\/a>/i);
console.log(parts);
const attributes = parts[1].split(/\s+/);
console.log(attributes);
const output = attributes.filter((attr) =>
  /^(?:class|id|href)[\s=]/i.test(attr)
);
console.log(output);
*/

function sanitizeATag(aTag) {
  // 태그에서 원하는 부분 추출
  const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);
  // parts[1]은 여는 <a> 태그에 있는 속성
  // parts[2]는 <a>와 </a> 사이에 있는 텍스트
  const attributes = parts[1].split(/\s+/); // 속성을 분해
  return (
    "<a " +
    attributes
      // class, id, href 속성만 필요
      .filter((attr) => /^(?:class|id|href)[\s=]/i.test(attr))
      // 스페이스 한 칸으로 구분해서 합침
      .join(" ") +
    // 여는 <a> 태그 완성
    ">" +
    // 텍스트 추가
    parts[2] +
    // 마지막으로 태그를 닫음
    "</a>"
  );
}

// String.prototype.replace 메서드에는 교체할 매개변수로 함수를 넘길 수 있음, 사용법 확인
// m: 일치하는 문자열 전체($&와 동일)
// g1: 일치하는 그룹(일치하는 것이 있다면). 일치하는 것이 여럿이라면 매개변수도 여러 개를 받음
// offset: 원래 문자열에서 일치하는 곳의 오프셋(숫자)
// 원래 문자열(거의 사용하지 않음)
/*
html.replace(/<a .*?>(.*?)<\/a>/gi, function (m, g1, offset) {
  console.log(`<a> tag found at ${offset}. contents: ${g1}`);
});
*/
console.log("변경 전");
console.log(html);
console.log("변경 후");
let output = html.replace(/<a .*?<\/a>/gi, function (m) {
  return sanitizeATag(m);
});

console.log(output);
