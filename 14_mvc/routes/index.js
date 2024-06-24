const express = require('express');
const controller = require('../controller/main.js');
const router = express.Router();


router.get('/', controller.getMain);

router.get('/comments', controller.getComments);

// 요청의 주소에서 "변수"를 사용하는 방법 -> :
router.get('/comment/:id', controller.getComment);

module.exports = router;