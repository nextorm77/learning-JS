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
    }, 3 * 1000);
  });
}

function addTimeout(fn, timeout) {
  if (timeout === undefined) timeout = 1000; // 타임아웃 기본값
  return function (...args) {
    // Promise 코드안의 resolve, reject 중 1개만 배출(?)
    return new Promise(function (resolve, reject) {
      const tid = setTimeout(reject, timeout, new Error("promise timed out"));
      // fn은 별도의 Promise 단위이므로 일단 실행
      fn(...args)
        .then(function (...args) {
          // clearTimeout(tid); // tid의 setTimeout을 해지하지 않고 실행되도 결과는 동일
          console.log("fn_then");
          resolve(...args);
        })
        .catch(function (...args) {
          clearTimeout(tid);
          console.log("fn_catch");
          reject(...args);
        });
    });
  };
}

// EventEmitter를 상속받은 Countdown 인스턴스 반환
// on메서드도 this 반환?
const c = new Countdown(3).on("tick", (i) => console.log(i + "..."));

c.go()
  .then(addTimeout(launch, 2 * 1000))
  .then(function (msg) {
    console.log(msg + "c.go().then().then()");
  })
  .catch(function (err) {
    console.log(err.message + "c.go().~.catch()");
    console.log("Houston, we have a problem....");
  });
