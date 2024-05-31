// built-in object

let str = "    Happy Birthday    ";

let str2 = str.trim();
console.log(str2);
console.log(str.length, " ", str2.length);
// cf
// length는 메소드가 아니라 속성이다!!

console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

// cf. if not in string / parameter is empty: returns -1
console.log(str2.indexOf('y'));  

console.log(str2.replace('p', 'w'));
console.log(str2.replaceAll('p', 'w'));

// split
let str3 = "dinner";
console.log(str3.split('n'));

