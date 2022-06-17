function* interrogate() {
  let name = yield "What is your name?";
  let color = yield "What is your favorite color?";
  return `${name}'s favorite color is ${color}.`;
}

const it = interrogate();
console.log(it.next());
console.log(it.next("Ethan"));
console.log(it.next("orange"));
