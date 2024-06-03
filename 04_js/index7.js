// Javascript Statement

// if (3 < 5) {
//     console.log("True");
// }

// let number = Number(prompt("Enter Number: "));
// if (number > 10) {
//     console.log("Bigger than 10");
// }
// else {
//     console.log("Smaller than 10");
// }


// 실습

// let score = parseInt(prompt("Enter your score: "));
// switch (true) {
//     case score >= 90:
//         console.log("A");
//         break;
//     case score >= 80:
//         console.log("B");
//         break;
//     case score >= 70:
//         console.log("C");
//         break;
//     case score >= 60:
//         console.log("D");
//         break;
//     default:
//         console.log("F");
//         break;
// }


// let now = new Date().getHours();
// now >= 12 ? console.log("Good evening!") : console.log("Good morning!");

// let sum = 0;
// for(let i = 1;
//     i <= 20;
//     i%2 === 0 ? sum += i: false,
//     i++
// );
// console.log(sum);

// let i = 2, j = 1;
// while (i < 10) {
//     while (j < 10) {
//         console.log(`KukuDan!: ${i} * ${j} = ${i*(j++)}`);
//     }
//     i++;
//     j = 1;
// }

// for (let i = 1; i < 10; i++){
//     for(let j = 1; 
//         j < 10; 
//         console.log(`Kuku: ${i} x ${j} = ${i*(j++)}`)
//     );
// }

// do while example
// do {
    // number = parseInt(prompt("Enter num bigger than 10: "));
// } while (number <= 10);


// let n = Number(prompt("Enter num: "));
// let n = 10000;
// for(let i = 1; 
//     i <= n; 
//     !(i%13) ? console.log(i) : false,
//     i += 2
// );

let sum = 0;
for(let i = 0; i <= 100; i++) {
    if(!(i%2) || !(i%5)) {
        sum += i;
    }
}
console.log(sum);
