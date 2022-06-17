/*
function calcuate(a, x, n) {
  if (x === 1) return a * n;
  return (a * (1 - Math.pow(x, n))) / (1 - x);
}

module.exports = calcuate;
*/
/*
module.exports = {
  geometricSum(a, x, n) {
    if (x === 1) return a * n;
    return (a * (1 - Math.pow(x, n))) / (1 - x);
  },
  arithmeticSum(n) {
    return ((n + 1) * n) / 2;
  },
  quadraticFormula(a, b, c) {
    const D = Math.sqrt(b * b - 4 * a * c);
    return [(-b + D) / (2 * a), (-b - D) / (2 * a)];
  },
};
*/
// exports를 사용하는 단축 문법: 객체를 보낼 때만 가능
// module.exports와 혼용X
exports.geometricSum = function (a, x, n) {
  if (x === 1) return a * n;
  return (a * (1 - Math.pow(x, n))) / (1 - x);
};

exports.arithmeticSum = function (n) {
  return ((n + 1) * n) / 2;
};
exports.quadraticFormula = function (a, b, c) {
  const D = Math.sqrt(b * b - 4 * a * c);
  return [(-b + D) / (2 * a), (-b - D) / (2 * a)];
};
