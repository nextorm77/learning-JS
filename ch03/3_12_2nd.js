const sam1 = {
  name: "Sam",
  age: 4,
};

const sam2 = { name: "Sam", age: 4 }; // 한 줄로 선언

const sam3 = {
  name: "Sam",
  classification: {
    // 프로퍼티 값도 객체가 될 수 있음
    kingdom: "Anamalia",
    phylum: "Chordata",
    class: "Mamalia",
    order: "Carnivoria",
    family: "Felidae",
    subfamily: "Felinae",
    genus: "Felis",
    species: "catus",
  },
};

console.log(sam3.classification.family);
console.log(sam3["classification"].family);
console.log(sam3.classification["family"]);
console.log(sam3["classification"]["family"]);

sam3.speak = function () {
  return "Meow!";
};
console.log(sam3.speak());

// 객체에서 프로퍼티 제거
delete sam3.classification; // classification 트리 전체 삭제
console.log(sam3.classification);
delete sam3.speak; // speak 함수 전체 삭제
console.log(sam3.speak());
