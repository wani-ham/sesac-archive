const express = require('express');
const dotenv = require('dotenv');
const app = express();
const session = require('express-session');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', './views');

dotenv.config({
    path: path.resolve(__dirname, '.env')
})

const port = process.env.PORT;

// express-session middleware
app.use(session({
    // 필수 옵션, 세션 암호화하는데 쓰는 키
    secret: process.env.COOKIE_SECRET,
    // 세션이 변경되지 않더라도 매번 다시 저장할건지 설정
    resave: false,
    // 세션을 초기값이 지정되지 않은 상태에서도 처음부터 세션을 생성할 건지
    saveUninitialized: false
}))

app.get('/', (req, res) => {
    res.render('session');
})

app.get('/set', (req, res) => {
    //req.session.keyName = value;
    
    req.session.name = 'banana';
    req.session.age = 10;
    res.send('Session Set!');
})

app.get('/name', (req, res) => {
    console.log("req.session >> ", req.session);
    res.send({id: req.sessionID, name: req.session.name});
})

app.listen(port, () => {
    console.log(`Server running at PORT ${port}`);
})