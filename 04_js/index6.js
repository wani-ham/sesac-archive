// #1 명시적 함수 선언
//     - 스크립트 어디에서든 호출가능.
function helloWorld() {
    console.log("Hello World!");
};

function helloWorld2() {
    return "Hello World 2";
};

helloWorld();
console.log(helloWorld2());

// #2 함수 포현식
//     - 변수에 익명 함수를 할당.
//     - 변수가 선언된 이후에만 호출할 수 있음.
// 익명함수: 말 그대로 이름이 없는 함수.
// 이름을 지정할 수도 있지만 블록 스코프 안에서만 사용이 가능. 
const sayHello = function hello() {
    console.log("Hello World 3");
};

sayHello();
// hello(); --> error!

const sayHello2 = function() {
    return "Hello World 4";
};

console.log(sayHello2());

// parameter
function food(text) {
    return text + " is yummy!";
};

pizza = "Potato Pizza"
console.log(food(pizza));
// cf: 매개변수는 어떤 datatype이든 상관이 없다

function music(name, title) {
    return `${name} - ${title}`;
}
console.log(music("Radiohead", "Creep"));

// #3 화살표 함수 (arrow function) (ES6부터 지원)
//     - 함수 표현식의 축약형, 간결하게 정의
//     - 단일 표현식의 경우에는 중괄호와  return 키워드 생략가능
//     - 코드가 길어진다면 중괄호와 return 표시

// function square(x) {
//     return x * x;
// }  
const square = (x) => x * x;  // arrow function version

// function triangle(base, height) {
//     const area = (base, height) * 0.5;
//     return area;
// }
const triangle = (base, height) => {  // arrow function version
    const area = (base, height) * 0.5;
    return area;
}

// cf: 함수 표현식은 호이스팅의 대상이 될 수 없다 (함수 선언문만 호이스팅의 대상)
