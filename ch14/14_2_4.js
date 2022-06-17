// 콜백 헬

// 3가지의 파일의 콘텐츠를 읽고
// 60초가 지난 다음 이들을 결합해
// 4번째 파일에 기록
const fs = require("fs");

/* 파일 관련 메서드마다 콜백 추가
fs.readFile("a.txt", function (err, dataA) {
  if (err) console.error(err);
  fs.readFile("b.txt", function (err, dataB) {
    if (err) console.error(err);
    fs.readFile("c.txt", function (err, dataC) {
      if (err) console.error(err);
      setTimeout(function () {
        fs.writeFile("d.txt", dataA + dataB + dataC, function (err) {
          if (err) console.error(err);
        });
      }, 60 * 1000);
    });
  });
});
*/

function readSketchyFile() {
  // try...catch블록은 같은 함수안에서만 동작
  // 예외는 fs.readFile()의 콜백안에서 발생하여 캐치할 수 없음(?)
  try {
    fs.readFile("dose_not_exist.txt", function (err, data) {
      if (err) throw err;
    });
  } catch (err) {
    console.log("warning: minor issue occurred, program continuing");
  }
}
