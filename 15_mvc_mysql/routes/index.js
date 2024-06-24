const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// 작업 순서
// read all -> create -> delete -> update

router.get('/', controller.main);
router.get('/visitor', controller.getVisitors);  // read all

router.post('/visitor', controller.postVisitor);

module.exports = router;