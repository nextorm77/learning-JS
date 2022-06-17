let funds = 50;
let totalBet = 13;
/*
switch (totalBet) {
  case 7:
    console.log("1st");
    totalBet = funds;
    break;
  case 11:
    console.log("2nd");
    totalBet = 0;
    break;
  case 13:
    console.log("3rd");
    totalBet = 0;
    break;
  case 21:
    console.log("4th");
    totalBet = 21;
    break;
}
*/
/* totalBet이 11이나 13이 동일한 처리일 경우
switch (totalBet) {
  case 7:
    console.log("1st");
    totalBet = funds;
    break;
  case 11:
  case 13:
    console.log("3rd");
    totalBet = 0;
    break;
  case 21:
    console.log("4th");
    totalBet = 21;
    break;
}
*/
// totalBet이 13일 경우, 11인 경우보다 추가 처리가 필요할 경우
switch (totalBet) {
  case 7:
    console.log("1st");
    totalBet = funds;
    break;
  case 13:
    funds = funds - 1;
    console.log("2nd");
  // 의도된 처리를 위해 break문을 넣지 않음
  case 11:
    totalBet = 0;
    console.log("3rd");
    break;
  case 21:
    console.log("4th");
    totalBet = 21;
    break;
  default: // default는 필수 아님
    console.log("No superstition here!");
    break;
}
