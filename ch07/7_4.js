console.log("before block");
// 독립 블록 사용
// 유효한 문법이지만, 거의 사용하지 않음
{
  console.log("inside block");
  const x = 3;
  console.log(x);
}
console.log(`outside block; x=${x}`);
