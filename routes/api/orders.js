const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// GET /api/orders/
router.get('/', ordersCtrl.getAllForUser);
// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addItemToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// POST /api/order/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQuantity);

module.exports = router;