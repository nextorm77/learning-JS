let html = '<a class="nope" href="/yep">Yep</a>';
console.log(html);
html = html.replace(/<a .*?(href=".*?").*?>/, "<a $1>");
console.log(html);

html = '<a class="yep" href="/yep" id="nope">Yep</a>';
console.log(html);
html = html.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, "<a $2 $1>");
console.log(html);

const input = "One two three";

// $`: 일치하는 것 앞에 있는 전부를 참조
let output = input.replace(/two/, "($`)");
console.log(output);

// $&: 일치하는 것 자체
output = input.replace(/two/, "($&)");
console.log(output);

// $': 일치하는 것 뒤에 있는 전부를 참조
output = input.replace(/two/, "($')");
console.log(output);

// $$: $ 기호 자체가 필요할 때
output = input.replace(/two/, "($$)");
console.log(output);
