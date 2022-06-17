function refreshServerInfo() {
  const req = new XMLHttpRequest();

  // 'load'이벤트는 Ajax 호출이 성공했을 때 발생
  req.addEventListener("load", function () {
    // 값을 HTML에 삽입

    //this.responseText는 JSON이 들어있는 문자열
    // JSON.parse를 써서 문자열을 객체로 변환
    const data = JSON.parse(this.responseText);

    // 이 예제에서는 클래스가 serverInfo인 <div>의 텍스트만 교체
    const serverInfo = document.querySelector(".serverInfo");

    // 서버에서 반환한 객체를 키 기준으로 순회
    Object.keys(data).forEach((p) => {
      // 텍스트를 교체할 요소를 찾습니다.
      const replacements = serverInfo.querySelectorAll(`[data-replace="${p}"]`);

      // 서버에서 받은 값으로 텍스트 교체
      // replacements는 querySelectorAll 메서드 리턴값이므로, 1개 이상일 수 있음
      for (let r of replacements) {
        r.textContent = data[p];
      }
    });

    //console.log(this.responseText); // 서버 반환 데이터 기록
  });

  // 브라우저에서 웹페이지에 방문하는 것과 같은 효과
  req.open("GET", "http://localhost:7070", true);
  // 요청 실행
  req.send();
  // Ajax 호출이 성공하면(응답이 오면?) 'load'이벤트 핸들러 동작?
}

setInterval(refreshServerInfo, 200);
