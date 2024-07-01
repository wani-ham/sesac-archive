const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cookieParser = require('cookie-parser');
const router = require('../routes/Rindex');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, '../.env')
})

// cookie-parser middleware
app.use(cookieParser(process.env.COOKIE_SECRET));
const cookieConfig = {
    httpOnly: true,  // 웹 서버를 통해서만 쿠키에 접근 가능 -> front js에서 document.cookie로 접근하는 것을 제한
    maxAge: 60 * 1000,  // 쿠키 수명 (unit: ms)
    // expires: expire date (date and time)
    signed: true, // 쿠키의 암호화
    // secure: 웹 브라우저와 서버가 https 통신하는 경우만 쿠키를 서버에 전송
}

exports.index = (req, res) => {
    res.render('index');
}

exports.setCookie = (req, res) => {
    //const hide = req.body.hide;
    console.log(req.body);
    res.cookie('hideBanner', 'true', cookieConfig);
    res.send('set signed cookie!');
}

// app.get('/setCookie', (req, res) => {
//     // res.cookie(key, value, option)
//     // --> 응답이 아니라 쿠키를 설정하는 method (!= send, render, end)
//     res.cookie('myKeyTest', 'myValueTest', cookieConfig);

//     // response to client
//     res.send('set signed cookie!');
// })

// app.get('viewCookie', (req, res) => {
//     // req.signedCookies
//     // : cookie-parser가 만든 요청의 서명된 쿠키 해석
//     res.send(req.signedCookies);
// })

// app.get('deleteCookie', (req, res) => {
//     // res.clearCookie(키, 값, 옵션)
//     // : 쿠키를 삭제하는 메서드 =/= 서버가 클라이언트 응답
//     // : 쿠키를 생성할 때의 키, 값, 옵션이 일치해야 함!! (단, maxAge/expires 키는 일치할 필요 없음)
//     res.clearCookie('myKeyTest', 'myValueTest', cookieConfig);
//     res.send('Deleted signed cookie');
// })