const cart = [
  { name: "Widget", price: 9.95 },
  { name: "Gadget", price: 22.95 },
];
const names = cart.map((x) => x.name);
console.log(names);
const prices = cart.map((x) => x.price);
console.log(prices);
