// 선수와 관련된 라우터를 정의하는 파일
const express = require('express');
const router = express.Router();
const controller = require('../controller/Cplayer');

// localhost:PORT/players

router.get('/', controller.getPlayers);

module.exports = router;