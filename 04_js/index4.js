// Datatypes

// Datatype의 종류
// - Primitive: String, number, boolean, undefined, null
// - Object: Primitive이 아닌 나머지

// 1. String (문자열)
let text = "Hello World!";
let text2 = "Hiii";
let gender = "Male";

console.log(text);
console.log(text2);
console.log(text + gender);
console.log(text2 + " / " + gender);
console.log(`${text2} Je m'appelle Tay! Je suis ${gender}`);  // ES6  (template literal)
console.log(text, text2, "Great!");

// 2. number
let num = 100;
let num2 = 0.12;

console.log(num, num2);
console.log(num + num2);
console.log(num / num2);

// 3. Boolean
let flag = true;
console.log(flag);
if (flag) {
    console.log(
        `There is a Flag that is ${flag}!`
    );
}

// 4. null
let temp = null;
console.log(temp);

// 5. undefined
let x;
console.log(x);

// 6. array
let fruits = ["orange", "pineapple", "apple"];

console.log(fruits);  // before sort
console.log(fruits.length);
console.log(fruits.sort());
console.log(fruits);  // after sort

let mixedArray = [1, "Tay", true, undefined, null, {gender: "Male"}];  // {} -> object
console.log(mixedArray);

let arrayWithinArray = [[1, 2, 3], 
                        [4, 5, 6], 
                        [7, 8, 9]];
console.log(arrayWithinArray[1][1]);

console.log(korean[0][0] + korean[2][2]);
console.log(korean[2][0] + korean[0][2]);
