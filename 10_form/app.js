const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

// middleware: request와 response의 중간에서 작업함
app.use(express.urlencoded({ extended: true }));  // urlencoded로 parsing된 body를 요청 
// -> post 요청으로 들어오는 모든 형식의 데이터를 parsing
app.use(express.json());  // request의 body object에 json 형태로 옴

// Routing
app.get('/', (req, res) => {
    res.render('index', {title: 'Input Test'});
})

app.get('/getForm', (req, res) => {
    console.log(req.query);  // result: { id: ' ', pw: ' ' }
    res.render('result', {title: 'GET Result', userInfo: req.query});
})

app.post('/postForm', (req, res) => {
    console.log(req.body);  // result: { id: ' ', pw: ' ' }
    // => (body-parser 미들웨어가 없을 때 result: undefined)
    res.render('result', {title: 'POST Result', userInfo: req.body});
})

// res.send() 와 res.render()의 차이
// res.render(): 템플릿 엔진을 사용해서 서버 측에서 "동적으로" HTML을 생성하고 클라이언트에게 응답
//     => 서버 측에서 동적으로 페이지를 렌더링 할 때 사용
// res.send(): 문자열, JSON, 파일 등을 클라이언트에게 응답 (보통 JSON을 가장많이 응답)
//     => 서버가 데이터를 응답할 때 사용

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
})



