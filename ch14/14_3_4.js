const EventEmitter = require("events").EventEmitter;

// 우주선 발사 과정?
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

function launch() {
  return new Promise(function (resolve, reject) {
    console.log("Lift off!");
    setTimeout(function () {
      resolve("In orbit!");
    }, 2 * 1000);
  });
}

// EventEmitter를 상속받은 Countdown 인스턴스 반환
// on메서드도 this 반환?
const c = new Countdown(15, true).on("tick", (i) => console.log(i + "..."));

c.go()
  .then(launch)
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (err) {
    console.log("Houston, we have a problem....");
  });
