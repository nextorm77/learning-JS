const coefficients = {
  a: 1,
  //b: 2,
  c: 5,
};

function evaluate(x, co) {
  return co.a + co.b * x + co.c * Math.pow(x, 2);
}

//console.log(evaluate(1, coefficients));
/*
const betterCoefficients = new Proxy(coefficients, {
  // get 함수는 가로챌 동작을 가리키는 핸들러
  // 프로퍼티 접근자 get와는 다름
  get(target, key) {
    return target[key] || 0;
  },
});

// cofficient 객체의 프락시에는 무한한 프로퍼티가 있고
// 직접 정의한 프로퍼티를 제외하면 모두 값이 0인 것이나 마찬가지
console.log(betterCoefficients.a);
console.log(betterCoefficients.b);
console.log(betterCoefficients.c);
console.log(betterCoefficients.d);
console.log(betterCoefficients.anythig);
*/

// 키로 소문자 한 글자를 받았을 때만 프락시 동작?
/*
const betterCoefficients = new Proxy(coefficients, {
  get(target, key) {
    if (!/^[a-z]$/.test(key)) {
      return target[key];
      console.log("here");
    }

    return target[key] || 0;
  },
});

console.log(betterCoefficients.a);
console.log(betterCoefficients.b);
console.log(betterCoefficients.c);
console.log(betterCoefficients.dd);
console.log(betterCoefficients.anythig);
*/
