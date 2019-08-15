const express = require('express');
const router = express.Router();

// Require the controllers
const product_controller = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.
router.post('/create', product_controller.product_create);
// router.get('/:id', product_controller.product_detail);
router.get('/all', product_controller.products);

module.exports = router;
