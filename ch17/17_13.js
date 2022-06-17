const input =
  "Regex pros know the difference between\n" +
  "<i>greedy</i> and <i>lazy</i> matching.";
// 적극적 일치: .*
// 소극적 일치: .*?
const output = input.replace(/<i>(.*?)<\/i>/gi, "<strong>$1</strong>");

console.log(input);
console.log(output);
