const fs = require("fs");
const path = require("path");

// __dirname: 현재 작업 디렉토리
// 운영체제에 따라 디렉터리 구분자를 알맞게 사용하는 path.join 사용 권장
fs.writeFile(
  path.join(__dirname, "/hello.txt"),
  "hello from Node!",
  function (err) {
    if (err) return console.log("Error writing to file.");
  }
);
