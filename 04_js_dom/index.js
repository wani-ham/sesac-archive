/* 1. Pass bt Value
    - primitive type은 값이 복사되어 전달된다. 

*/

let num = 1;
let num2 = num;
console.log(num === num2);

num = 5;
console.log(num === num2);

function changeValue(x) {
    x = 10;
    console.log();
}

console.log("========================");

// 함수로 전달될때, 변수의 값이 복사되어 함수의 매개변수로 전달
// 따라서 함수 내에서 매겨변수의 값을 변경하더라도 원본은 변화 x
// 함수 내에서 사용되는 변수는 함수 내에서만 유효한 지역 변수


/*
    2. pass by reference
        - 객체나 배열 같은 참조 타입 전달될때 사용
        - 변수의 메모리 위치가 전달되므로, 함수 내에서 요소를 변경하면 원래 변수도 변경됨
*/

const obj = {one: 1, two: 2};
const obj2 = obj;

console.log(obj, obj2);

obj.five = 5;  // obj2 에도 반영됨!
console.log(obj, obj2);  
console.log(obj === obj2);  // true

const obj3 = {one: 1, two: 2, five: 5};
console.log(obj === obj3);  // false
//  값은 같지만 참조값(address)가 다르다!



