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

highlightParas("unique");
removeParaHighlights();
