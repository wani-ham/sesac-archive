const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cookieParser = require('cookie-parser');
const router = require('./routes/Rindex');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config({
    path: path.resolve(__dirname, '.env')
})

const port = process.env.PORT;

// // cookie-parser middleware
// app.use(cookieParser(process.env.COOKIE_SECRET));
// const cookieConfig = {
//     httpOnly: true,  // 웹 서버를 통해서만 쿠키에 접근 가능 -> front js에서 document.cookie로 접근하는 것을 제한
//     maxAge: 60 * 1000,  // 쿠키 수명 (unit: ms)
//     // expires: expire date (date and time)
//     signed: true, // 쿠키의 암호화
//     // secure: 웹 브라우저와 서버가 https 통신하는 경우만 쿠키를 서버에 전송
// }


app.use('/', router);


app.listen(port, () => {
    console.log(`Server running at PORT ${port}`);
    //console.log(`Secret Key: ${process.env.COOKIE_SECRET}`);
})