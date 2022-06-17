class Log {
  constructor() {
    this.messages = [];
  }
  add(message) {
    //this.messages.push({ message: message, timestamp: Date.now() });
    // 위와 동일
    this.messages.push({ message, timestamp: Date.now() });
  }
  // 이터레이션 프로토콜
  // value와 done 프로퍼티가 있는 객체를 반환하면
  // 그 클래스의 인스턴스는 이터러블(순환가능한) 객체임
  [Symbol.iterator]() {
    return this.messages.values();
  }
  /* 직접 이터레이터 구현 가능
  [Symbol.iterator]() {
    let i = 0;
    const messages = this.messages;
    return {
      next() {
        if (i >= messages.length) return { value: undefined, done: true };
        return { value: messages[i++], done: false };
      },
    };
  }
  */
}

const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

// 로그(객체, 인스턴스)를 배열처럼 순회합니다!
for (let entry of log) {
  console.log(`${entry.message} @ ${entry.timestamp}`);
  //console.log(entry);
}
