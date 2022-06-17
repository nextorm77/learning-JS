const o = {
  name: "Wallace",
  speak() {
    return `My name is ${this.name}!`;
  },
};

const result = o.speak(); // "My name is Wallace!"
console.log(result);

const speak = o.speak;
console.log(speak === o.speak); // 두 변수는 같은 함수를 가리킴
console.log(speak()); // "My name is undefined!", 객체 호출 함수가 아니므로 undefined
/*
const o2 = {
  name: "Julie",
  greetBackwards: function () {
    function getReverseName() {
      let nameBackwards = "";
      // 에러 발생, this는 호출한 o2가 아닌 다른 것에 묶임?
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  },
};
o2.greetBackwards();
*/

// 내부 함수 this 접근 해결법#1
const o3 = {
  name: "Julie",
  greetBackwards: function () {
    const self = this; // 다른 변수에 this 할당
    function getReverseName() {
      let nameBackwards = "";
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  },
};

let testResult = o3.greetBackwards();
console.log(testResult);

// 내부 함수 this 접근 해결법#2
// 내부 함수를 화살표 함수로 구현
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
testResult = obj.greetBackwards();
console.log(testResult);
