const hand = ["a", "b", "c"];
// for...of 루프는 배열 및 iterable 객체에 모두 사용 가능한 범용적인 루프
// for...of 루프는 배열에 루프를 실행해야 하지만 각 요소의 인덱스를 알 필요 없을 때
for (let face of hand) console.log(`You rolled...${face}`);

// 인덱스를 알아야 한다면 일반 for 루프 사용
for (let i = 0; i < hand.length; i++) console.log(`Roll ${i + 1}: ${hand[i]}`);
