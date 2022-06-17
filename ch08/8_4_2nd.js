const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];
// 화살표 함수 단축표기시 객체 리터럴의 중괄호를 블록으로 판단하는 것을 방지하기 위해 괄호로 감싸았다
//const cart = items.map((x, i) => ({ name: x, price: prices[i] }));
const cart = items.map((x, i) => {
  return { name: x, price: prices[i] };
});
console.log(cart);
