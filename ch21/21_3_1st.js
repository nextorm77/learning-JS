// 앞으로 변경 가능성 없은 프로그램에 대한 정보를
// 객체에 보관한다고 가정
"use strict";
const appInfo = {
  company: "White Knight Software, Inc.",
  version: "1.3.5",
  buildId: "0a995448-ead4-4a8b-b050-9c9083279ea2",
  // 이 함수는 getter이므로 동결한 상태에서도 계속 동작
  copyright() {
    return `c${new Date().getFullYear()}, ${this.company}`;
  },
};
Object.freeze(appInfo); // 어떤 수정 동작도 금지
console.log(Object.isFrozen(appInfo));

//appInfo.newProp = "test";

//delete appInfo.company;

//appInfo.company = "test";

Object.defineProperty(appInfo, "company", { enumerable: false });
