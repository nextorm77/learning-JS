// 노드의 오류 우선 콜백을 프라미스로 변경
// nfcall(Node Function call) 함수로 만듦
function nfcall(f, ...args) {
  return new Promise(function (resolve, reject) {
    // f.call(..., cb함수);이 비동기 실행코드?
    f.call(null, ...args, function (err, ...args) {
      if (err) return reject(err);
      resolve(args.length < 2 ? args[0] : args);
    });
  });
}

// ptimeout(promise timeout)
function ptimeout(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, delay);
  });
}

// grun(generator run): 제너레이터 실행기
// g: 제너레이터 함수
function grun(g) {
  // it:이터레이터
  const it = g();
  (function iterate(val) {
    const x = it.next(val);
    if (!x.done) {
      if (x.value instanceof Promise) {
        x.value.then(iterate).catch((err) => it.throw(err));
      } else {
        // iterate를 setTimeout을 통해 실행한 이유는 효율성 때문
        setTimeout(iterate, 0, x.value);
      }
    }
  })();
}

// dataA = read contents of 'a.txt'
// dataB = read contents of 'b.txt'
// dataC = read contents of 'c.txt'
// wait 60 seconds
// write dataA + dataB + dataC to 'd.txt'
function* theFutureIsNow() {
  const dataA = yield nfcall(fs.readFile, "a.txt");
  const dataB = yield nfcall(fs.readFile, "b.txt");
  const dataC = yield nfcall(fs.readFile, "c.txt");
  yield ptimeout(60 * 1000);
  yield nfcall(fs.writeFile, "d.txt", dataA + dataB + dataC);
}

grun(theFutureIsNow);
