const arr = [
  { id: 5, name: "Judith" },
  { id: 7, name: "Francis" },
];

let resultIndex = arr.findIndex((o) => o.id === 5);
console.log(resultIndex);

resultIndex = arr.findIndex((o) => o.name === "Francis");
console.log(resultIndex);

resultIndex = arr.findIndex((o) => o === 3);
console.log(resultIndex);

resultIndex = arr.findIndex((o) => o.id === 17);
console.log(resultIndex);

let resultValue = arr.find((o) => o.id === 5);
console.log(resultValue);

resultValue = arr.find((o) => o.id === 2);
console.log(resultValue);

// 인덱스 2보다 뒤에 있는 제곱수 찾기
const arr2 = [1, 17, 16, 5, 4, 16, 10, 3, 49];
resultValue = arr2.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)));
console.log(resultValue);
