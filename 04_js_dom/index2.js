let now = new Date();
console.log(now);

let jan_01_1970 = new Date(0);
console.log(jan_01_1970);

let date = new Date('2024-04-06');
console.log(date);
let date2 = new Date('2024', '04', '06');  // count starting from 00
console.log(date2);

// ===============================
let floor = Math.floor;
let rand = Math.random();
console.log(floor(rand * 100));
console.log(floor(rand * 2) + 20);

