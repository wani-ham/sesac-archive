// TODO: 컨트롤러 코드
const User = require('../model/User');


// Get, localhost:PORT/user
exports.main = (req, res) => {
    console.log("GET / MAIN")
    res.render('index');
}

// Get, localhost:PORT/user/signup
exports.getSignup = (req, res) => {
    res.render('signup');
}

// Get, localhost:PORT/user/signin
exports.getSignin = (req, res) => {
    res.render('signin');
}

// post, localhost:PORT/user/signup
exports.postSignup = (req, res) => {
    console.log(req.body);
    User.postSignup(req.body, (result) => {
        console.log(result);
        res.send({
            id: req.body.id,
            pw: req.body.pw,
            name: req.body.name
        })
    })
}

// post, signin
exports.postSignin = (req, res) => {
    console.log(req.body);
    User.postSignin(req.body, (result) => {
        console.log(result);
        res.send({
            id: req.body.id,
            pw: req.body.pw
        })
    })
}