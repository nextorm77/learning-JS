// 제너레이터
// yield(호출자에게 제어권을 넘기다?)
function* rainbow() {
  yield "red";
  yield "orange";
  yield "yellow";
  yield "green";
  yield "blue";
  yield "indigo";
  yield "violet";
}

// 제너레이터를 호출하면 바로 이터레이터 획득(values() 없이)
const it = rainbow();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let color of rainbow()) {
  console.log(color);
}
