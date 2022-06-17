const USER_EMAIL = Symbol(); // 프로퍼티에 직접 접근 못하도록
/*
class User {
  setEmail(value) {
    if (!/@/.test(value)) throw new Error(`invalid email: ${value}`);
    this[USER_EMAIL] = value;
  }
  getEmail() {
    return this[USER_EMAIL];
  }
}

const u = new User();

u.setEmail("john@doe.com");
console.log(`User email: ${u.getEmail()}`);
*/

// 위와 동일한 효과지만 자연스러운 방법
// 접근자 프로퍼티 사용
class User {
  set email(value) {
    if (!/@/.test(value)) throw new Error(`invalid email: ${value}`);
    this[USER_EMAIL] = value;
  }
  get email() {
    return this[USER_EMAIL];
  }
}

const u = new User();
u.email = "john@doe.com";
console.log(`User email: ${u.email}`);

// setter없이 getter만 있는 경우,
// 그 반대도 가능하지만 사용하는 경우 거의 없음
// 사각형의 둘레(perimeter)를 얻는 경우
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get perimeter() {
    return this.width * 2 + this.height * 2;
  }
}
