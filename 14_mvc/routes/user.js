const express = require('express');
const controller = require('../controller/user.js');
const router = express.Router();


router.get('/', controller.getUser)

module.exports = router;

