const u1 = { name: "Cynthia" };
const u2 = { name: "Jackson" };
const u3 = { name: "Olive" };
const u4 = { name: "James" };

const userRoles = new Map();

// 객체와 달리 객체를 키로 쓸 수 있음
/* 1st 할당방법
userRoles.set(u1, "User");
userRoles.set(u2, "User");
userRoles.set(u3, "Admin");
// 애석하지만 James에게서는 역할이 없음
*/

// 2nd 할당방법
// 체인으로 연결
userRoles.set(u1, "User").set(u2, "User").set(u3, "Admin");

// 3rd 할당방법 => 작동하지 않음: error
// 생성자에 배열의 배열을 넘김
// const userRoles = new Map([u1, "User"], [u2, "User"], [u3, "Admin"]);

console.log(userRoles.get(u2));

console.log(userRoles.has(u1));
console.log(userRoles.get(u1));
console.log(userRoles.has(u4));
console.log(userRoles.get(u4));

console.log(userRoles.size);

// keys() 메서드의 반환값(키)은 이터러블 객체이므로
// for...of 루프 사용
for (let u of userRoles.keys()) console.log(u.name);

for (let r of userRoles.values()) console.log(r);

// entries 메서드는 1st가 키, 2nd가 값인 배열 반환
for (let ur of userRoles.entries()) console.log(`${ur[0].name}: ${ur[1]}`);

// 맵도 분해(destruct)할 수 있음
// 분해하면 좀 더 자연스러운 코드가 됨
for (let [u, r] of userRoles.entries()) console.log(`${u.name}: ${r}`);

// entries() 메서드는 맵의 기본 이터레이터입니다.
// 위 코드는 다음과 같이 단축해서 쓸 수 있습니다.
for (let [u, r] of userRoles) console.log(`${u.name}: ${r}`);

// 이터러블 객체보다 배열이 필요하다면 확산연산자 사용
console.log([...userRoles.values()]);

userRoles.delete(u2);
console.log(userRoles.size);

userRoles.clear();
console.log(userRoles.size);
