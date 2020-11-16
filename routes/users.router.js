var express = require('express');
var router = express.Router();
var controller =require('../controllers/users.controller');

router.get('/',controller.login);
router.get('/register',controller.register);

module.exports =router;