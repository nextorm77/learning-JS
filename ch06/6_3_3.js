function f(a, b = "default", c = 3) {
  return `${a} - ${b} - ${c}`;
}

let result = f(5, 6, 7); // "5 - 6 - 7"
console.log(result);
result = f(5, 6); // "5 - 6 - 3"
console.log(result);
result = f(5); // "5 - default - 3"
console.log(result);
result = f(); // "undefined - default - 3"
console.log(result);
