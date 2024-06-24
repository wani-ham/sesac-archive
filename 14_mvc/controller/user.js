const { getDbUser } = require('../model/users');

exports.getUser = (req,res) => {
    res.render('user', { user: getDbUser() });
}