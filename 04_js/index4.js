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

// 3-dimensional array
const nums = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
];

console.log(nums[1][0][1]);


// 7. 객체 object
// - 프로그래밍에서 실제 존재하는 개체나 개념을 표현하는 데이터 구조
// 속성 - 메소드
// 속성: key와 value의 쌍으로 이루어짐 (상태나 특징)
// 메소드: 함수를 값으로 가진다 (동작이나 행위)

const cat = {
    name: "장화", // key: name. 장화: value
    age: 10,
    isCute: true,
    mew: function() {
        return "meow";
    },
};

console.log(cat);
console.log(cat.mew());  // 1. dot 표기법
console.log(cat['name']);  // 2. [] 표기법

const tempVal = 'name';
console.log(cat[tempVal]);  // 3. if key is stored in a variable


// 8. typeof: 자료형 확인 키워드
// typeof X , typeof(X)
console.log(typeof 12345);
// null을 object로 분류하는 것은 공식적으로 인정한 언어의 초기구현 중 설계상 오류
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof cat);

// 9. 형변환
// #1 Sting(): 문자로 형변환
let str1 = true;
let str2 = 123;
let str3 = undefined;

console.log(String(str1), typeof String(str1));
console.log(String(str2), typeof String(str2));
console.log(String(str3), typeof String(str3));
console.log(str1.toString(), typeof str1.toString());

// #2 Number(): 숫자로 형변환
let n1 = true;
let n2 = false;
let n3 = 123.9;

console.log(n1, typeof n1);
console.log(Number(n1), typeof Number(n1));
console.log(Number(n2), typeof Number(n2));
console.log(Number(n3), typeof Number(n3));
console.log(parseInt(n3), typeof parseInt(n3));
console.log(parseInt(n3, 10), typeof parseInt(n3, 10));  // 10 digit
console.log(Number(undefined), typeof Number(undefined));  // NaN: Not a Number
console.log(Number(null), typeof Number(null));
