var express = require('express');
var router = express.Router();

var controller =require('../controllers/users.controller');

router.get('/',controller.login);
router.get('/register',controller.register);
router.post('/register',controller.postRegister);

module.exports =router;