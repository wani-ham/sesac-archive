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

h1.classList.add('add-h1');
h1.classList.remove('add-h1');
console.log(h1.classList.contains('add-h1'));
h1.classList.toggle('add-h1')

console.log('-------------------------');
// 요소 찾기
// 계층 구조 (형제, 자식, 부모, 조상, 자손)
const friends = document.querySelector('#friends');
const kevin = document.querySelector('#kevin');

// 1. 자식 요소
console.log(friends.children); // 유사 배열, 자식 모두 선택
console.log(friends.children[0]); // 인덱스 접근.

// 2. 부모 요소
console.log(kevin.parentNode);
console.log(kevin.parentNode.parentNode);

// 3. 형제 요소
console.log(kevin.previousElementSibling); // 이전
console.log(kevin.nextElementSibling); // 다음
console.log(kevin.nextElementSibling.nextElementSibling);

// 실습 1
console.log("============================");
const taste = document.querySelector('div > span');
taste.innerText = "맛없다 ㅡㅡ;;";
taste.style.fontSize = 'larger';
taste.style.fontWeight = 'bold';
taste.style.color = 'red';
console.log("============================");



// // 새로운 요소 생성
// const container = document.querySelector('.container');
// const p = document.createElement('p'); // 요소 생성
// console.log(p); // js로 <p></p> 태그를 만듦.
// p.innerText = '새로 추가된 p 요소 입니다~;' 
// p.style.fontWeight = 700;
// p.style.backgroundColor ='red';

// // 새로 만든 요소를 추가해보자!
// // x.append(y): x 요소의 맨 마지막 자식으로 y 요소가 추가
// // x.appendChild(y)
// div1.appendChild(p);

// const p2 = document.createElement('p');
// const p3 = document.createElement('p');

// p2.innerHTML = 'p2';
// p3.innerHTML = 'p3';

// p2.classList.add('p-2');
// p3.classList.add('p-3');

// container.append(p2, p3); // 여러개 추가 가능!

// // x.prepend(y): x요소의 맨 처음 자식으로 y 요소가 추가
// const li1 = document.createElement('li');
// li1.textContent = "캉가";
// friends.prepend(li1);

// const li0 = document.createElement('li');
// li0.innerHTML = '<b>친구들을 소개합니다</b>';
// friends.prepend(li0);

// // 요소 삭제
// // x.remove(): x 요소 자체를 삭제
// // x.removeChild(y) : x의 자식요소인 y가 삭제
// const firstLi = document.querySelector('li');
// console.log(firstLi); // 친구들을 소개합니다 li 태그

// const ul = firstLi.parentNode;
// // ul.removeChild(firstLi);

// firstLi.remove();
// ul.remove();

