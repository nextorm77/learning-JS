class Super {
  constructor() {
    this.name = "Super";
    this.isSuper = true;
  }
}

// 유효하지만, 권장하지는 않습니다.
// 프로토타입 체인?
Super.prototype.sneaky = "not recommended!";

class Sub extends Super {
  constructor() {
    super();
    this.name = "Sub";
    this.isSub = true;
  }
}

const obj = new Sub();

for (let p in obj) {
  console.log(
    `${p}: ${obj[p]}` + (obj.hasOwnProperty(p) ? "" : " (inherited)")
  );
}
