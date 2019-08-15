const express = require('express');
const router = express.Router();

// Require the controllers
const user_controller = require('../controllers/user.controller');

// a simple test url to check that all of our files are communicating correctly.
router.post('/register', user_controller.register);
router.post('/login', user_controller.login);

module.exports = router;
