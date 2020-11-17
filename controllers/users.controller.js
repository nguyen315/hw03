var db=require('../db');
var shordid= require('shortid');

module.exports.login = function (req, res) {
    res.render('users/login', {
        title: 'Login Page'
    });
}

module.exports.register = function (req, res) {
    res.render('users/register', {
        title: 'Register Page'
    });
}
module.exports.postRegister = function (req, res) {
    req.body.id=shordid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users');
};
