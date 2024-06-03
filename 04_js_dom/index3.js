console.log(document);
console.log(document.domain);
// 취소선이 그어지는 이유
//  * 해당 속성 사용을 권장하지 않거나, 더 이상 지원하지 않음
// 최신 보안 정책에서는 domain 사용한 접근 제어 방식이 보안상 취약할 수 있기 때문에 지양.


console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

// html collection
console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName('pink')[1]);

// html collection
console.log(document.getElementsByTagName('div'));

// node list
console.log(document.getElementsByName('id'));

console.log(document.querySelector('.pink'));
console.log(document.querySelector('[name = "id"]'));

// node list
console.log(document.querySelectorAll('.pink'));
console.log("======================");

// 유사배열 (HTML collection, node list)
//  * 배열은 아니지만 []식으로 생김
//  * 배열과 달리 사용할 수 있는 method가 제한됨
//  * node list -> for each 반복문 사용 가능
document.querySelectorAll('.pink').forEach((element) => {console.log(element);})
console.log("=====================");

//  * html collection -> for each 메소드 사용 X
//      * 반복을 해야한다면 array 로 변경해야함. Array.from()
Array.from(document.getElementsByClassName('pink')).forEach((element) => {console.log(element);})

const pinks = document.querySelectorAll('.pink');
for(let pink of pinks) {
    console.log(pink);
}