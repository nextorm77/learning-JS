// 이벤트 핸들러를 만들어 반환
function logEvent(handlerName, type, cancel, stop, stopImmediate) {
  // 실제 이벤트 핸들러입니다.
  return function (evt) {
    // preventDefault()
    // 이벤트 취소, 취소된 이벤트는 계속 전달
    // defaultPrevented 프로퍼티는 true로 변경
    if (cancel) {
      evt.preventDefault();
      console.log(`\t${type}: ${handlerName} ` + "preventDefault");
    }

    // stopPropagation()
    // 이벤트를 현재 요소에서 끝내고 더는 전달되지 않음
    if (stop) {
      evt.stopPropagation();
      console.log(`\t${type}: ${handlerName} ` + "stopPropagation");
    }

    // stopImmediatePropagation()
    // 다른 이벤트 핸들러, 심지어 현재 요소에 연결된
    // 이벤트 핸들러도 동작X
    if (stopImmediate) {
      evt.stopImmediatePropagation();
      console.log(`\t${type}: ${handlerName} ` + "stopImmediatePropagation");
    }

    console.log(
      `${type}: ${handlerName}` + (evt.defaultPrevented ? " (canceled)" : "")
    );
  };
}
// 이벤트 핸들러를 요소에 추가
function addEventLogger(elt, type, action) {
  const capture = type === "capture";
  elt.addEventListener(
    "click",
    logEvent(
      elt.tagName,
      type,
      action === "cancel",
      action === "stop",
      action === "stop!"
    ),
    capture
  );
}
const body = document.querySelector("body");
const div = document.querySelector("div");
const button = document.querySelector("button");

addEventLogger(body, "capture");
addEventLogger(body, "bubble");
addEventLogger(div, "capture", "cancel");
addEventLogger(div, "bubble");
addEventLogger(button, "capture", "stop");
addEventLogger(button, "bubble");
