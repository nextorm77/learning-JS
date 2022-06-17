const p1 = document.createElement("p");
const p2 = document.createElement("p");
p1.textContent = "I was created dynamically!";
p2.textContent = "I was also created dynamically!";

const parent = document.getElementById("content");
const firstChild = parent.childNodes[0];

// 새 요소 삽입
// 1st: 삽입할 요소, 2nd: 삽입할 위치
parent.insertBefore(p1, firstChild); // 맨앞
parent.appendChild(p2); // 맨뒤
