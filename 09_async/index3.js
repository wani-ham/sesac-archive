// 비동기처리의 또다른 방법: async/await

// async function f1() {
//     return 1;
// }

// async function f2() {
//     return Promise.resolve(2);
// }

// const f3 = async () => {
//     return 3;
// }

// console.log("f1() >>", f1());  // Promise { 1 }
// console.log("f2() >>", f2());  // Promise { Pending }
// console.log("f3() >>", f3());  // Promise { 3 }

// f1().then((result) => {
//     console.log(result);
// })

// f2().then((result) => {
//     console.log(result);
// })

// f3().then((result) => {
//     console.log(result);
// })

// 왜 결과가 1 3 2 ??


// async/await
// await: 기다리다 
// - 성공/실패로 프로미스 객체의 실행이 완료되기를 기다림
// - await 뒤에는 프로미스가 오게 됨
// - **async 키워드를 사용한 함수 안에서만 await를 사용 가능

// async/await는 세트다!!!!!!!!!!!!!!!!!!!

function fetchFruits() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const fruits = ['🥝', '🍇', '🍋'];
            // resolve(fruits);
            reject(new Error("ERRRRORORRORO"));
        }, 100);
    });
}

fetchFruits()
    .then((f) => {
        console.log(f);
    })
    .catch((err) => {
        console.log("Error occured - promise chain");
    })

async function printItem() {
    try {
        const fruits = await fetchFruits();
        console.log(fruits);
    } catch(err) {
        console.log("Error occured - async/await");
    }
}

printItem();