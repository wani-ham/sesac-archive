const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.index);
router.post('/', controller.setCookie);



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

module.exports = router;