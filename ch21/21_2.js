const obj = { foo: "bar" };
// writable: 쓰기 가능한 지
// enumerable: 나열 가능한 지
// configurable: 프로퍼티를 객체에서 삭제 or 속성을 수정할 수 있는 지
console.log(Object.getOwnPropertyDescriptor(obj, "foo"));

Object.defineProperty(obj, "foo", { writable: false });
// 스트릭트 모드가 아닐 경우, 할당은 실패하지만 에러는 발생하지 않음
obj.foo = 3;
console.log(Object.getOwnPropertyDescriptor(obj, "foo"));

// 객체가 일단 생성된 뒤 접근자 프로퍼티를 추가할 수 있는 유일한 방법
Object.defineProperty(obj, "color", {
  get: function () {
    return this._color;
  },
  set: function (value) {
    this._color = value;
  },
});

// Object.defineProperty로 데이터 프로퍼티 추가
Object.defineProperty(obj, "name", {
  value: "Cynthia",
  // enumerable: true, // 해당 속성을 설정하지 않으면 객체 출력시 표현되지 않음
});
Object.defineProperty(obj, "greet", {
  value: function () {
    return `Hello, my name is ${this.name}!`;
  },
});

console.log(obj.name);
console.log(obj);

// Object.defineProperty는 배열 프로퍼티를 나열할 수 없게 할 때 주로 사용
// 자세한 내용은 책 참조
const arr = [3, 1.5, 9, 2, 5.2];
/*
arr.sum = function () {
  return this.reduce((a, x) => a + x);
};
arr.avg = function () {
  return this.sum() / this.length;
};
Object.defineProperty(arr, "sum", { enumerable: false });
Object.defineProperty(arr, "avg", { enumerable: false });
*/

/* 위 내용을 하나의 문으로 작성 가능
Object.defineProperty(arr, "sum", {
  value: function () {
    return this.reduce((a, x) => a + x);
  },
  enumerable: false,
});
Object.defineProperty(arr, "avg", {
  value: function () {
    return this.sum() / this.length;
  },
  enumerable: false,
});
*/

// 위의 내용을 다시 하나로 작성 가능
Object.defineProperties(arr, {
  sum: {
    value: function () {
      return this.reduce((a, x) => a + x);
    },
    enumerable: false,
  },
  avg: {
    value: function () {
      return this.sum() / this.length;
    },
    enumerable: false,
  },
});
