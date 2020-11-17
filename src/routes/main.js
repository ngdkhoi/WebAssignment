const express = require('express');
const route = express.Router();

const mainController=require('../app/controllers/mainController');

route.use('/', mainController.index);

module.exports=route;