const promo = "Opening for XAAX is the dynamic GOOG! At the box office now!";
const bands = promo.match(/([A-Z])([A-Z])\2\1/g);
console.log(bands);

// 작은 따옴표와 큰 따옴표를 모두 썼으므로 백틱으로 문자열 경계를 나타냄
const html = `<img alt='A "simple" example.'>` + `<img alt="Don't abuse it!">`;
const matches = html.match(/<img alt=(['"]).*?\1/g);
console.log(html);
console.log(matches);
