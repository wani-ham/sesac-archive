const person = {
    name: "이몽룡",
    age: 18,
    like: ['강아지', '고양이'],
    isMarried: true,
    girlfriend: {
        name: '성춘향',
        age: 16
    }
};

console.log(person);



let mathScore = prompt("Enter math score: ");
let engScore = prompt("Enter english score: ");

let avgScore = (parseInt(mathScore) + parseInt(engScore)) * 0.5;
console.log(`Math score: ${mathScore}, English score: ${engScore}`);
console.log(`Average score: ${avgScore}`);
