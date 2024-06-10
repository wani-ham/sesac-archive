/*
path.join() : 여러 인자를 넣으면 하나의 경로로 합져준다
path.resolve() : path.join()과 비슷하지만 약간의 차이 존재
path.parse() : 파일 경로를 root, dir, base, ext, name 으로 구분
path.format() : path.parse()한 객체를 파일 경로로 합친다
*/

const path = require('path');

console.log(__dirname);
console.log(__filename);
console.log("=====");
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.join('a', 'b', 'index.html'));
console.log("=====");
let pathname = path.parse('/home/usr/dir/file.txt');
console.log(pathname);
console.log("=====");
console.log(path.extname('/home/usr/dir/file.txt'));
console.log(path.basename('/home/usr/dir/file.txt'));
console.log("=====");
console.log(path.join('a', 'b', 'index.html'));  // 상대경로
console.log(path.resolve('a', 'b', 'index.html'));  // 절대경로




