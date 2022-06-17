function isCurrentYearLeapYear() {
  const year = new Date().getFullYear();
  // leap year: 윤년
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}

const daysInMonth = [
  31,
  isCurrentYearLeapYear() ? 29 : 28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];
console.log(daysInMonth);

if (isCurrentYearLeapYear()) console.log("It is a leap year");
else console.log("It is not a leap year.");
