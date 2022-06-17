const exec = require("child_process").exec;

// exec는 셸을 호출하므로 dir 실행 파일이
// 존재하는 경로를 따로 지정할 필요 없음
// Buffer 객체 2개: stdout, stderr
// stdout: 일반적인 프로그램 출력 결과
// stderr: 에러 출력 결과(에러가 있다면)
exec("dir", function (err, stdout, stderr) {
  if (err) return console.error('Error executing "dir"');
  stdout = stdout.toString(); // Buffer를 문자열로 변경
  console.log(stdout);
  stderr = stderr.toString();
  if (stderr !== "") {
    console.error("error:");
    console.error(stderr);
  }
});
