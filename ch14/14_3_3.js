const EventEmitter = require("events").EventEmitter;

/* 
class Countdown extends EventEmitter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;
  }
  go() {
    // this는 콜백안에서 값이 달라지므로(?), 외부에?
    const countdown = this;
    return new Promise(function (resolve, reject) {
      for (let i = countdown.seconds; i >= 0; i--) {
        setTimeout(function () {
          if (countdown.superstitious && i === 13) {
            return reject(new Error("Oh my god"));
          }
          // 이벤트("tick") 이름은 원하는대로 변경 가능
          countdown.emit("tick", i);
          if (i === 0) resolve();
        }, (countdown.seconds - i) * 1000);
      }
    });
  }
}
*/
class Countdown extends EventEmitter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;
  }
  go() {
    // this는 콜백안에서 값이 달라지므로(?), 외부에?
    const countdown = this;
    const timeoutIds = [];
    return new Promise(function (resolve, reject) {
      for (let i = countdown.seconds; i >= 0; i--) {
        timeoutIds.push(
          setTimeout(function () {
            if (countdown.superstitious && i === 13) {
              // 대기중인 타임아웃을 모두 취소
              timeoutIds.forEach(clearTimeout);
              return reject(new Error("Oh my god"));
            }
            // 이벤트("tick") 이름은 원하는대로 변경 가능
            countdown.emit("tick", i);
            if (i === 0) resolve();
          }, (countdown.seconds - i) * 1000)
        );
      }
    });
  }
}

const c = new Countdown(15, true);

c.on("tick", function (i) {
  if (i > 0) console.log(i + "...");
});

c.go()
  .then(function () {
    console.log("GO!");
  })
  .catch(function (err) {
    console.error(err.message);
  });
