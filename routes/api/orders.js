const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const ordersCtrl = require('../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ensureLoggedIn, ordersCtrl.cart);
// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ensureLoggedIn, ordersCtrl.addItemToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ensureLoggedIn, ordersCtrl.checkout);
// POST /api/order/cart/quanity
router.post('/cart/quantity', ensureLoggedIn, ordersCtrl.setItemQuantity);

module.exports = router;