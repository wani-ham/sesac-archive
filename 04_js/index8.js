// // built-in object

// let str = "    Happy Birthday    ";

// let str2 = str.trim();
// console.log(str2);
// console.log(str.length, " ", str2.length);
// // cf
// // length는 메소드가 아니라 속성이다!!

// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());

// // cf. if not in string / parameter is empty: returns -1
// console.log(str2.indexOf('y'));  

// console.log(str2.replace('p', 'w'));
// console.log(str2.replaceAll('p', 'w'));

// // split
// let str3 = "dinner";
// console.log(str3.split('n'));

// let arr = [1, 2, 3, 4, 5];
// let arr2 = ['dog', 'cat', 'parrot'];

// arr[arr.length] = 6;
// console.log(arr);
// arr.push(7);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr2.unshift("snake");
// console.log(arr2);
// arr2.shift();
// console.log(arr2);

// console.log(arr2.includes("random animal"));

// console.log(arr2.reverse());
// console.log(arr2);

// console.log(arr2.join(' / '));

// //================================

const arr = [1,2,5,6,7];
const alphabets = ['a', 'b', 'c', 'd'];

for (a of arr) {console.log(a);}

arr.forEach((element) => {console.log(element);});
arr.forEach((element, index) => {console.log(element, index);});
arr.forEach((element, index, array) => {console.log(element, index, array);});

// map filter find
const doubleArr = arr.map((element) => {return element*2;});
console.log(doubleArr);