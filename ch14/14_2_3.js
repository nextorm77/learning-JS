// 오류 우선 콜백

const fs = require("fs");

const fname = "may_or_may_not_exist.txt";
// 콜백에서 err부터 확인
fs.readFile(fname, function (err, data) {
  // 콜백 실패시 반드시 빠져나와야(return?) 다른 오류 예약?
  if (err) {
    return console.error(`error reading file ${fname}: ${err.message}`);
  }
  console.log(`${fname} contents: ${data}`);
});
