const fs = require("fs");
const path = require("path");

// 기본 문자열 인코딩: UTF-8
/*
fs.readFile(path.join(__dirname, "hello.txt"), function (err, data) {
  if (err) return console.log("Error reading file.");
  console.log("Read file contents:");
  console.log(data); // 바이너리 데이터인 버퍼 반환
});
*/
fs.readFile(
  path.join(__dirname, "hello.txt"),
  { encoding: "utf-8" },
  function (err, data) {
    if (err) return console.log("Error reading file.");
    console.log("Read file contents:");
    console.log(data); // 바이너리 데이터인 버퍼 반환
  }
);
