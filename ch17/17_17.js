const input = "It was the best of times, it was the worst of times";

const beginning = input.match(/^\w+/g);
console.log(beginning);

const end = input.match(/\w+$/g);
console.log(end);

const everything = input.match(/^.*$/g);
console.log(everything);

const nomatch1 = input.match(/^best/gi);
console.log(nomatch1);

const nomatch2 = input.match(/worst$/gi);
console.log(nomatch2);

const input2 = "One line\nTwo lines\nThree lines\nFour";

const beginnings = input2.match(/^\w+/gm);
console.log(beginnings);

const endings = input2.match(/\w+$/gm);
console.log(endings);
