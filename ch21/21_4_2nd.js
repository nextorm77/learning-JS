const cook = {
  name: "Walt",
  redPhosphorus: 100, // 위험
  water: 500, // 안전
};

const protectedCook = new Proxy(cook, {
  set(target, key, value) {
    if (key === "redPhosphorus") {
      if (target.allowDangerousOperations)
        return (target.redPhosphorus = value);
      else return console.log("Too dangerous!");
    }
    // 다른 프로퍼티는 모두 안전
    target[key] = value;
  },
});

protectedCook.water = 550;
console.log(protectedCook.water);
protectedCook.redPhosphorus = 150;
console.log(protectedCook.redPhosphorus);

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150;
console.log(protectedCook.redPhosphorus);
