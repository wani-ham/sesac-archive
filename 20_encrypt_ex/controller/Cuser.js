exports.main = (req, res) => {
    res.render('index');
}

exports.getLogin = (req, res) => {
    res.render('login');
}

exports.getRegister = (req, res) => {
    res.render('register');
}

exports.getProfile = (req, res) => {
    res.render('profile');
}

exports.getUsers = (req, res) => {
    res.render('users');
}