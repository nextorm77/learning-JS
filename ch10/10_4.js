// 시나리오
// 산타클로스가 naughty라는 WeakSet를 가지고 어떤 아이가 우는 아이인지 확인해서
// 선물 대신 석탄을 놓고 온다.
const naughty = new Set();

const children = [{ name: "Suzy" }, { name: "Derek" }];

naughty.add(children[1]);

for (let child of children) {
  if (naughty.has(child)) console.log(`Coal for ${child.name}!`);
  else console.log(`Presents for ${child.name}!`);
}
