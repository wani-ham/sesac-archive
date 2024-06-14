console.log(1);
// setTimeout(code, delay)
// wait for delay and execute code
/*
setTimeout(() => {
    console.log(2);
}, 2000);
console.log(3);
*/
// result: 1 -> 3 -> 2
// js 에서는 setTimeout 함수를 사용했을 때, 기다리지 않고 
// 바로 다음 구문을 실행함.

/*
function goMart() {
    console.log("What drink should I buy at the mart!");
}

function pickDrink() {
    setTimeout(() => {
        console.log("Aha!");
        product = "Diet Coke";
        price = 2000;
    }, 3000);
}

function pay(product, price) {
    console.log(`Name: ${product}, Price: ${price}`);
}

let product;
let price;
goMart();
pickDrink();
pay(product, price);
*/

function goMart() {
    console.log("What drink should I buy at the mart!");
}

function pickDrink(callback) {
    setTimeout(() => {
        console.log("Aha!");
        product = "Diet Coke";
        price = 2000;
        callback(product, price);
    }, 3000);
}

function pay(product, price) {
    console.log(`Name: ${product}, Price: ${price}`);
}

let product;
let price;
goMart();
pickDrink(pay);  // prevent asynchrounous by using callback function

