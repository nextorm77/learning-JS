let x = 0,
  y = 10,
  z;
// z = (x++, y++); // z: 10
(z = x++), y++;
console.log(z);
