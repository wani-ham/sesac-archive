// es6 module 형식, 확장자:mjs
// 가져올 때 import 사용
// 프로젝트로 es6를 작성할 때는 package.json에 "type" : "module"을 적어야 함.

const add = (a,b) => {
    return a+b;
}

export default add;