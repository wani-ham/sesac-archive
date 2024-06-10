// const add = require('./math');

// console.log(add(2, 3));

// console.log(__dirname);
// console.log(__filename);

// const add = require('./add');

// console.log(add(1,2));
// console.log('From index.js');


// scope 모듈은 각각의 범위를 가지고 있음
// 다른 모듈에서 같은 변수 써도 ok
// require('./batman');
// require('./superman');

// 모듈의 기초 형태
// ()() 함수의 자동실행 
(function(){
    const superHero = "Superman";
    console.log(superHero);
})();
// 모듈의 형태
(function(exports, require, module, __filename, __dirname){
    //code
})();
