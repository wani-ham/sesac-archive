// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();


// get / user
router.get('/', controller.main);

// get /user/signup
router.get('/signup', controller.getSignup);

// post /user/signup
router.post('/signup', controller.postSignup);

// get /user/signin
router.get('/signin', controller.getSignin);

// post /user/signin
router.post('/signin', controller.postSignin);

// post /user/profile
router.post('/profile', controller.getUser);

// patch /user/profile/edit
router.patch('/profile/edit', controller.updateUser);

// delete /user/profile/delete
router.delete('/profile/delete', controller.deleteUser);

module.exports = router;