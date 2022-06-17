const debug1 = require("./debugTest")("one");
const debug2 = require("./debugTest")("two");

debug1("started first debugger!");
debug2("started second debugger!");

setTimeout(function () {
  debug1("after some time...");
  debug2("what happens?");
}, 200);
