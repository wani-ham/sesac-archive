// 구조분해 할당

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

const [x, y, z, w] = arr2;
console.log(x, y, z, w);  // w: undefined

console.log("========");

let num1 = 1, num2 = 2;
console.log(`Before swap: num1 is "${num1}" and num2 is "${num2}"`);
[num1, num2] = [num2, num1];
console.log(`After swap: num1 is "${num1}" and num2 is "${num2}"`);

console.log("=======");

let lists = ['apple', 'grape'];
[f1, f2, f3 = 'peach'] = lists;  // if f3 becomes undefined, f3 becomes 'peach' in default
console.log(f1, f2, f3);

console.log("=======");

// Object
const obj = {
    title: 'title',
    content: 'content', 
    num: 0,
};
const {num, title, content, star = 10} = obj;  // 이름이 중요하다. 이름이 다르면 undefined
console.log(title, num, content, star);  

console.log("======");

const lectureInfo = {
    name: 'SeSAC',
    part: 'web', 
    leader: 'Kim',
};

function getInfo(lecture) {
    const {name, part, leader} = lecture;
    const output = `Lecture ${name} teaches ${part} by ${leader}`;
    return output;
};

console.log(getInfo(lectureInfo));

console.log("=======");

// ... spread operator
const a = [1,2,3];
const b = [4,5];
const spread = [...a, ...b];
console.log(spread);

const c = [..."Hello"];  // method 1
const d = "Hello".split('');  // method 2
console.log(c);
console.log(d);

const chip = {
    base: 'chip',
    company: 'lotte',
}

const potatoChip = {
    ...chip,
    flavor: 'potato',
}

console.log(potatoChip);

console.log("======");

// rest parameter
const values = [10, 20, 30];

function get(a, ...rest) {
    console.log(rest);
}

get(...values);

const icecream = {
    company: 'lotte',
    flavor: 'choco',
    price: 1000,
};

const {flavor, ...rest} = icecream;
console.log(flavor);
console.log(rest);