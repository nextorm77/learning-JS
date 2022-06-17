const arr1 = [1, 2, 3, 4, 5];
arr1.reverse();
console.log(arr1);

const arr2 = [5, 3, 2, 4, 1];
arr2.sort();
console.log(arr2);

const arr3 = [
  { name: "Suzane" },
  { name: "Jim" },
  { name: "Trevor" },
  { name: "Amanda" },
];

let result = arr3.sort();
console.log(result);

result = arr3.sort((a, b) => {
  return a.name > b.name;
});
console.log(result);

arr3.sort((a, b) => {
  return a.name[1] < b.name[2];
});
console.log(arr3);

/*
result = arr3.sort((a, b) => {
  const x = a.name;
  const y = b.name;

  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
});
console.log(result);
*/
/*
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
console.log(cars);
// Year int 값의 크기순으로 정렬
let result = cars.sort((a, b) => {
  return a.year - b.year;
});

console.log(result);

// Type String 값의 크기순으로 정렬
result = cars.sort(function (a, b) {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

console.log(result);
*/
