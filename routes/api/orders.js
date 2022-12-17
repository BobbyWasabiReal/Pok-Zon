const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addItemToCart);
// POST /api/order/cart/qty
router.post('/cart/qty', ordersCtrl.setItemQuantity);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);

module.exports = router;