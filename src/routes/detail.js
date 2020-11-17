const express = require('express');
const router = express.Router();
const detailController = require('../app/controllers/detailProductController');

/* GET list of products. */
router.get('/', detailController.index);

module.exports = router;