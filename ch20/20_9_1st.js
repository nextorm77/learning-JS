const fs = require("fs");

// 쓰기 스트림
const ws = fs.createWriteStream("stream.txt", { encoding: "utf-8" });
ws.write("line 1\n");
ws.write("line 2\n");
// end()를 호출 후 write()를 호출하면 에러
// end()를 호출하기 전에는 write()를 여러 번 호출할 수
// 있으므로, 시간을 두고 데이터를 보낼 때는 쓰기 스트림이
// 이상적
ws.end();
