const TAKE_CLASS_NAME = "highlight";

function highlightParas(containing) {
  if (typeof containing === "string")
    containing = new RegExp(`\\b${containing}\\b`, "i");
  // paras: HTMLCollection, 배열과 유사하나 관련 메서드 사용 불가
  // for 루프는 사용 가능
  const paras = document.getElementsByTagName("p");
  console.log(paras);
  for (let p of paras) {
    if (!containing.test(p.textContent)) continue;
    p.classList.add(`${TAKE_CLASS_NAME}`);
  }
}

function removeParaHighlights() {
  const paras = document.querySelectorAll(`p.${TAKE_CLASS_NAME}`);
  for (let p of paras) p.classList.remove(`${TAKE_CLASS_NAME}`);
}

const highlightActions = document.querySelectorAll('[data-ac="highlight"]');
for (let a of highlightActions) {
  // 모든 요소에는 addEventListener 메서드가 있음
  a.addEventListener("click", (evt) => {
    // 해당 이벤트의 기본 핸들러 기능 차단
    evt.preventDefault();
    highlightParas(a.dataset.co);
  });
}

const removeHighlightActions = document.querySelectorAll(
  '[data-ac="removeHighlights"]'
);
for (let a of removeHighlightActions) {
  a.addEventListener("click", (evt) => {
    evt.preventDefault();
    removeParaHighlights();
  });
}
