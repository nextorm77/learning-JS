const arr = Array(10).map(function (x) {
  return 5;
});
console.log(arr); // [ <10 empty items> ]

const arr2 = [1, 2, 3, 4, 5];
delete arr2[2];
const result = arr2.map((x) => 0); // [ 0, 0, <1 empty item>, 0, 0 ]
console.log(result);
