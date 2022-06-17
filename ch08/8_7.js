const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
// join() 매개변수 생략시 기본값은 쉼표(,)
// 정의되지 않은 요소, 삭제된 요소, null, undefined은 빈 문자열로 취급
let result = arr.join();
console.log(result);
result = arr.join("");
console.log(result);
result = arr.join(" -- ");
console.log(result);

const attributes = ["Nimble", "Perceptive", "Generous"];
const html = "<ul><li>" + attributes.join("</li><li>") + "</li></ul>";
console.log(html);
