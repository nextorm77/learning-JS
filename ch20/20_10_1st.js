const http = require("http");

// 들어오는 요청을 처리할 콜백함수 필요
// res: ServerResponse 객체 => 쓰기 스트림 인터페이스
const server = http.createServer(function (req, res) {
  if (req.method === "GET" && req.url === "/favicon.ico") {
    const fs = require("fs");
    const rs = fs.createReadStream("favicon.ico");
    rs.pipe(res); // end 대신 사용할 수 있음
  } else {
    console.log(`${req.method} ${req.url}`);
    res.end("Hello world!");
  }
});

const port = 8080;
// 서버가 시작했을 때 호출될 콜백을 넘길 수 있음
server.listen(port, function () {
  console.log(`server started on port ${port}`);
});
