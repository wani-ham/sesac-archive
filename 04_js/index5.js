// Operator 

let a = 5;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a % b);
console.log(a ** b);
console.log("================");


// ==, != 은 값만 비교. type은 비교하지 않는다 
//     * (예기치 못한 결과를 유래할 수 있다)
//     ex: undefined == null --> true
// ===, !== 은 값과 type을 모두 비교. 
// ===: value 동일 && type 동일
// !==: value 동일X or type 동일X
let c = "string";
console.log(a === b);
console.log(a !== c);
console.log("================");

// + 이외의 연산은 숫자로 자동 형변환 (JS 특징)
console.log('5' + '2');  // '52'
console.log('5' - '2');  // 3
console.log('5' * '2');  // 10
console.log('5' / '2');  // 2.5
console.log("================");

// postfix operator (후위 연산자)
//      * 변수에 대입한 후 연산 수행.
//      ex: result = num++;
// prefix operator (전위 연산자)
//      * 연산 수행 후 변수에 대입. 
//      ex: result = ++num;