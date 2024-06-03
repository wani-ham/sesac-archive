// JS Event

// 1. onXXX 속성으로 등록
function click1() {
    alert("Click!!");
}

// 2. addEventListener
const btn1 = document.querySelector('.btn--black');
const btn2 = document.querySelector('.btn--green');
const btn3 = document.querySelector('.btn--red');
const btn4 = document.querySelector('.btn--blue');
const container = document.getElementById('container');

btn1.addEventListener("click", function() {
    alert("Button 1 !!");
})

btn1.addEventListener("mouseover", function() {
    btn1.style.backgroundColor = 'aqua';
})

btn1.addEventListener("mouseout", function() {
    btn1.style.backgroundColor = 'palegreen';
})

btn2.addEventListener('click', () => {
    const div = document.createElement('div');
    div.style.backgroundColor = 'pink';
    div.innerHTML = 'Hello World!';
    container.append('div');
})