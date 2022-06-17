"use strict";
class Logger {
  constructor(name) {
    this.name = name;
    this.log = [];
  }
  add(entry) {
    this.log.push({
      log: entry,
      timestamp: Date.now(),
    });
  }
}

const log = new Logger("Captain's Log");
Object.seal(log); // 기존 프로퍼티 수정만 가능
console.log(Object.isSealed(log));

log.name = "Captain's Boring Log";
log.add("Another boring day at sea....");

//log.newProp = "test";

//delete log.name;

//Object.defineProperty(log, "log", { enumerable: false });

const log2 = new Logger("First Mate's Log");
Object.preventExtensions(log2);
console.log(Object.isExtensible(log2));

log2.name = "First Mate's Boring Log";
log2.add("Another boring day at sea....");

//log2.newProp = "test";

log2.name = "test";
delete log2.name;
Object.defineProperty(log2, "log", {
  enumerable: false,
});
