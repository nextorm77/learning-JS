const stuff = "hight:    9\n" + "medium:    5\n" + "low:     2\n";
// '*[0-9]'는 숫자는 상관없으며 없어도 된다는 표현
const levels = stuff.match(/:\s*[0-9]/g);
console.log(levels);

const messyPhone = "(505) 555-1515";
const neatPhone = messyPhone.replace(/\D/g, "");
console.log(neatPhone);

// 공백이 아닌 글자가 최소한 1개는 있어야 할 때(required 필드)
// 데이터가 있는 지 검사
const field = "   something   ";
const vaild = /\S/.test(field);
console.log(vaild);
