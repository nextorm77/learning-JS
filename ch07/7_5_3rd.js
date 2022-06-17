{
  // 외부 블록
  let x = { color: "blue" };
  let y = x;
  let z = 3;
  {
    // 내부 블록
    let x = 5;
    console.log(x); // 바깥의 x는 가려짐
    console.log(y.color);
    y.color = "red";
    console.log(z);
  }
  console.log(x.color);
  console.log(y.color);
  console.log(z);
}
