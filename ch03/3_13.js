const s = "hello"; // s는 원시 문자열 타입
console.log(s.toUpperCase()); // "HELLO", 일시적인 String 객체를 만들어 함수 호출후 임시 객체 파괴

s.rating = 3; // 에러가 없음? 성공?
console.log(s.rating); // undefined, 임시 객체 s는 파괴되어 프로퍼티를 갖을 수 없음?
