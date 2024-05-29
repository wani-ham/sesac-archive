// function multiply(x, y) {
//     return x * y;
// }

// console.log(multiply(3, 4));


// const square = function(x) {
//     return x**2;
// }

// console.log(square(3));


let age = prompt("Enter Age: ");

function ageClassifier(age) {
    if(age >= 20) {
        return "성인";
    }
    
    else if(age >= 17) {
        return "고등학생";
    }
    
    else if(age >= 14) {
        return "중학생";
    }
    
    else if(age >= 8) {
        return "중학생";
    }
    
    else if(age >= 0) {
        return "초등학생";
    }
    
    else {
        return "wrong input";
    }
}

console.log(ageClassifier(age));