class FibonacciSequence {
  [Symbol.iterator]() {
    let a = 0,
      b = 1;
    return {
      next() {
        let rval = { value: b, done: false };
        b += a;
        a = rval.value;
        return rval;
      },
    };
  }
}

const fib = new FibonacciSequence();
let count = 0;
for (f of fib) {
  console.log(f);
  if (++count > 9) break;
}
