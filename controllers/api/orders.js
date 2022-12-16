const Order = require('../../models/order');

module.exports = {
    cart,
    addItemToCart,
    setItemQuantity,
    checkout
};

async function cart() {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}

async function addItemToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addToCart(req.params.id);
    res.json(cart);
}

async function setItemQuantity(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.changeQuantity(req.body.itemId, req.body.quantity);
    res.json(cart);
}

async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.IsPaid = true;
    await cart.save();
    res.json(cart);
}