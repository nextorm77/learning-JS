const fs = require("fs");

// data 서브디렉토리에 있는 .txt 파일을 모두 처리하는 프로그램
fs.readdir("data", function (err, files) {
  if (err) {
    console.error("Fatal error: couldn't read data directory.");
    process.exit(1); // 즉시 실행 중단
  }
  const txtFiles = files.filter((f) => /\.txt$/i.test(f));
  if (txtFiles.length === 0) {
    console.log("No .txt files to process.");
    process.exit(0); // 즉시 실행 중단
  }
  // .txt 파일 처리
});
