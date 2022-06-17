{
  // 외부 블록
  let x = "blue";
  console.log(x);
  {
    // 내부 블록
    let x = 3; //외부 스코프 x를 숨김
    console.log(x);
  }
  console.log(x);
}
console.log(typeof x);
