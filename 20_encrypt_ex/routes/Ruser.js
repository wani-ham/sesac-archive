const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.main);

router.get('/login', controller.getLogin);

router.get('/register', controller.getRegister);

router.get('/profile', controller.getProfile);

router.get('/users', controller.getUsers);

module.exports = router;