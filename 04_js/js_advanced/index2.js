const x = 5;
const result1 = x || 100;
console.log(result1);

const y = 7;
const result2 = x < y && 'yy is bigger';
console.log(result2);

// falsy: undefined, null, 0, false, '', NaN
// falsy 가 아닌 값들은 전부 truth라고 간주.
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;  // if userColor is falsy(undefined, null..), defaultColor
console.log(currentColor);