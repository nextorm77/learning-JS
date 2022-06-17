const o1 = {
  name: "Wallace", // 원시값 프로퍼티
  bark: function () {
    return "Woof!";
  }, // 함수 프로퍼티(메서드)
};

const o2 = {
  name: "Wallace", // 원시값 프로퍼티
  bark() {
    return "Woof!";
  }, // 함수 프로퍼티(메서드)
};
