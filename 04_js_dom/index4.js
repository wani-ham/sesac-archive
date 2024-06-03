// 요소 가져오기
const div1 = document.getElementById('div1');
console.log(div1);

// 태그 내부 내용 변경
// innerHTML: 태그 사용 가능
// innerText, textContent: 태그가 문자(기호)로 그대로 노출
console.log(div1.innerText);
console.log(div1.textContent);

div1.innerHTML = "<b> NEW </b>";

const naver = document.getElementById('naver');
naver.setAttribute('href', 'https://www.google.com');

console.log(document.getElementById('naver').getAttribute('href'));
console.log(document.getElementById('naver').href);
document.getElementById('naver').href = 'https://www.naver.com';
console.log(document.getElementById('naver').href);
// 참고: # -> 내부 앵커, 현재 페이지의 상단으로 스크롤.
document.getElementById('naver').href = '#';

const h1 = document.querySelector('h1');
const list = document.querySelectorAll('ul > li');

list[0].style.backgroundColor = 'palegreen';
for(let li of list) {
    li.style.fontSize = '20px';
}

// # 2. classList 활용
// xxx.classList.add
// xxx.classList.remove
// xxx.classList.contains : 있는지 없는지 확인 (t/f)
// xxx.classList.toggle : 있으면 제거, 없으면 추가

// h1.classList.add('add-h1');
h1.classList.remove('add-h1');
console.log(h1.classList.contains('add-h1'));
h1.classList.toggle('add-h1')

console.log('-------------------------');
// 요소 찾기
// 계층 구조 (형제, 자식, 부모, 조상, 자손)
const friends = document.querySelector('#friends');
const tigger = document.querySelector('#tigger');

// 1. 자식 요소
console.log(friends.children); // 유사 배열, 자식 모두 선택
console.log(friends.children[0]); // 인덱스 접근.

// 2. 부모 요소
console.log(tigger.parentNode);
console.log(tigger.parentNode.parentNode);

// 3. 형제 요소
console.log(tigger.previousElementSibling); // 이전
console.log(tigger.nextElementSibling); // 다음
console.log(tigger.nextElementSibling.nextElementSibling);

// 실습 1
const taste = document.querySelector('div > span');
taste.innerText = "맛없다 ㅡㅡ;;";
taste.style.fontSize = 'larger';
taste.style.fontWeight = 'bold';
taste.style.color = 'red';


