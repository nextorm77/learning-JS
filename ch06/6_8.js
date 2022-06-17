const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

// 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
function greet() {
  return `Hello, I'm ${this.name}`;
}

// .call 은 다른 함수와 마찬가지로 매개변수를 직접 받음
console.log(greet()); // this는 어디에도 묶이지 않았습니다.
console.log(greet.call(bruce)); // this는 bruce입니다.
console.log(greet.call(madeline)); // this는 madeline입니다.

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(bruce, 1949, "singer");
console.log(bruce);
const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce); // .apply(bruce, newBruce)와 동일
console.log(bruce);

update.call(madeline, 1942, "actress");
console.log(madeline);

// .apply 는 매개변수를 배열로 받음, 나머지는 .call과 동일
update.apply(bruce, [1955, "actor"]);
console.log(bruce);

update.apply(madeline, [1918, "writer"]);
console.log(madeline);

// .apply의 대표적인 사용예, 배열의 최대값, 최솟값 산출
// Math.min과 Math.max는 this와 관계없이 동작
// 무엇을 넘기든 관계없음
const arr = [2, 3, -5, 15, 7];
console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));
// (...)확산 연산자를 쓰는 방법
console.log(Math.min(...arr));
console.log(Math.max(...arr));

// bind 함수
const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
console.log(bruce);
updateBruce.call(madeline, 1274, "king");
console.log(bruce);

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
console.log(bruce);
