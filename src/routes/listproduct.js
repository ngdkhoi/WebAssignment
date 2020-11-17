const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/productController');

/* GET list of products. */
router.get('/', productController.index);

module.exports = router;