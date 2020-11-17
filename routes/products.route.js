var express = require('express');
var router = express.Router();
var controller =require('../controllers/products.controller');

router.get('/', controller.list)
router.get('/:productId', controller.detail)
// router.get('/detail',controller.detail);

module.exports = router;