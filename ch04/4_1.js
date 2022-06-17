// 보조함수
// m 이상 n 이하의 무작위 정수를 반환
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

// 크라운 앤 앵커 게임의 6개 그림 중 하나를 무작위 반환
function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

let funds = 50; // 시작 조건
let round = 0;

while (funds > 1 && funds < 100) {
  round++;
  console.log(`round ${round}`);
  console.log(`\tstarting funds: ${funds}p`);

  // 돈을 겁니다.
  const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
  let totalBet = rand(1, funds);
  if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
  } else {
    // 그 판에 걸 돈(totalBet)을 6개 그림에 랜덤(해당에 모양에 걸 돈도) 분배
    let remaining = totalBet;
    let betCount = 0;
    do {
      const bet = rand(1, remaining);
      const face = randFace();
      bets[face] = bets[face] + bet;
      remaining = remaining - bet;
      betCount++;
    } while (remaining > 0);
  }
  funds = funds - totalBet;
  console.log(
    "\tbets: " +
      Object.keys(bets)
        .map((face) => `${face}: ${bets[face]} pence`)
        .join(", ") +
      ` (total: ${totalBet} pence)`
  );

  // 주사위를 굴립니다.
  const hand = [];
  for (let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
  }
  console.log(`\thand: ${hand.join(", ")}`);

  // 그림을 맞췄으면 딴 돈을 가져옵니다.
  let winnings = 0; // winnings는 딴 돈을 모으는 변수
  for (let die = 0; die < hand.length; die++) {
    const face = hand[die];
    if (bets[face] > 0) {
      winnings = winnings + bets[face];
    }
  }
  console.log(`\twinnings: ${winnings}p`);
  funds = funds + winnings;
  console.log(`\tending funds: ${funds}p`);
}
