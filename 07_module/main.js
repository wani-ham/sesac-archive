// const add = require('./m1');
// console.log(add(1, 2));

const math = require('./m1');
// console.log(math.add(1,2));
// console.log(math.sub(1,2));

const {add, sub} = math;
console.log(add(1,2));
console.log(sub(1,2));

