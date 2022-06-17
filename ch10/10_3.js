const roles = new Set();

roles.add("User");
roles.add("Admin");
console.log(roles.size);

roles.add("User"); // 중복되므로 아무 일도 일어나지 않음
console.log(roles.size);

console.log(roles.delete("Admin")); // 제거 성공시 true
console.log(roles);
console.log(roles.delete()); // 제거 실패시 false
