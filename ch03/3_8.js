// 널리 쓰이는 특수문자
console.log("Line1\nLine2");
console.log("Windows line 1\r\nWindows line 2");
console.log("Speed:\t60kph");
console.log("Don't"); // 포맷터에서 "Don\'t"를 "Don't"로 자동 변경
console.log('Sam said "hello".'); // 포맷터에서 \"hello\"를 "hello"로 자동 변경
console.log(`New in ES6: \` strings`);
const interpolation = "${}";
console.log(`New in ES6: ${interpolation}`);
console.log("Use \\\\ to represent \\!");
// \uXXXX, 임의 유니코드 코드 포인트, XXXX는 16진수 코드 포인트
console.log(
  "De Morgan's law: \u2310(P \u22c0Q \u21D4 (\u2310P) \u22c1 (\u2310Q)"
);
// \xXX, 라틴-1 문자. 여기서 XX는 16진수 라틴-1 코드 포인트
console.log("\xc9p\xe9e is fun, but foil is more fun.");

// 자주 쓰이진 않는 특수문자
console.log("ASCCI NUL: \0");
console.log("Vertical tab: \v");
console.log("Backspace: \b");
console.log("Form feed: \f");
