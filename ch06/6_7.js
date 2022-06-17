const f1 = function () {
  return "hello!";
};
// 또는
const f2 = () => "hello!";

console.log(f1());
console.log(f2());

const f3 = function (name) {
  return `Hello, ${name}!`;
};
// 또는
const f4 = (name) => `Hello, ${name}!`; // 포맷터가 name에 괄호를 씌움

console.log(f3("Nancy"));
console.log(f4("Nancy"));

const f5 = function (a, b) {
  return a + b;
};
// 또는
const f6 = (a, b) => a + b;

console.log(f5(1, 2));
console.log(f6(1, 2));

const obj = {
  name: "Julie",
  greetBackwards: function () {
    const getReverseName = () => {
      let nameBackwards = "";
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };
    return `${getReverseName()} si eman ym ,olleH`;
  },
};
const result = obj.greetBackwards();
console.log(result);
