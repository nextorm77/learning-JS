// 함수 매개변수(객체) 해체
function getSentence1({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}

const o = {
  subject: "I",
  verb: "love",
  object: "JavaScript",
};

let result = getSentence1(o); // "I love JavaScript"
console.log(result);

// 함수 매개변수(배열) 해체
function getSentence2([subject, verb, object]) {
  return `${subject} ${verb} ${object}`;
}

const arr = ["I", "love", "JavaScript"];
result = getSentence2(arr); // "I love JavaScript"
console.log(result);

// 함수 매개변수의 확산 연산자(...) 사용
function addPrefix(prefix, ...words) {
  // 나중에 더 좋은 방법을 배웁니다.
  const prefixedWords = [];
  for (let i = 0; i < words.length; i++) {
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}

result = addPrefix("con", "verse", "vex"); // ["converse", "convex"]
console.log(result);
