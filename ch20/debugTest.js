let lastMessage;

module.exports = function (prefix) {
  return function (message) {
    const now = Date.now();
    const sinceLastMessage = now - (lastMessage || now); // 가장 최근(마지막) 메시지로부터 시간 차
    console.log(`${prefix} ${message}+${sinceLastMessage}ms`);
    lastMessage = now;
  };
};
