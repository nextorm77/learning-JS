function countdown(seconds) {
  // resolve, reject 는 함수
  return new Promise(function (resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(() => {
        if (i === 13) return reject(new Error("Oh my god"));
        if (i > 0) console.log(i + "...");
        else resolve(console.log("GO!"));
      }, (seconds - i) * 1000);
    }
  });
}

//countdown(5);
/*
  countdown(5).then(
    function () {
      console.log("countdown completed successfully");
    },
    function (err) {
      console.log("countdown experienced an error: " + err.message);
    }
  );
  */
const p = countdown(15);
p.then(function () {
  console.log("countdown completed successfully");
});
p.catch(function (err) {
  console.log("countdown experienced an error: " + err.message);
});
