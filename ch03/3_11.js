let currentTemp; // 암시적으로 undefined.
console.log(currentTemp);
const targetTemp = null; // 대상 온도는 null, 즉 '아직 모르는' 값
console.log(targetTemp);
currentTemp = 19.5; // currentTemp에 이제 값이 있음
console.log(currentTemp);
currentTemp = undefined; // currentTemp는 초기화되지 않은 듯함. 권장하지 않음
console.log(currentTemp);
