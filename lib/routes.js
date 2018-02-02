var express = require('express');
var router = express.Router();

// Required controllers
var users_controller = require(appRoot + '/app/controllers/users');

router.get('/signup', users_controller.signup);
router.get('/create', users_controller.create);
router.get('/update', users_controller.update);

module.exports = router;