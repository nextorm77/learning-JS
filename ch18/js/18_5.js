// callout 클래스 요소(노드) 선택
const callouts = document.querySelectorAll(".callout");
console.log(callouts);

// ID가 content인 요소의 자손인 <p> 요소 선택
const contentP = document.querySelectorAll("#content p");
console.log(contentP);

// ID가 content인 요소의 자식(자손X)인 <p> 요소 선택
const contentChildP = document.querySelectorAll("#content > p");
console.log(contentChildP);

const contentDivP = document.querySelectorAll("#content div p");
console.log(contentDivP);
