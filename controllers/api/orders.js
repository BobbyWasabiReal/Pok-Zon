const Order = require("../../models/order");

module.exports = {
  cart,
  addItemToCart,
  setItemQuantity,
  checkout,
  getAllForUser
};

async function getAllForUser(req, res) {
  const orders = await Order.find({ user: req.user._id, IsPaid: true }).sort("-updatedAt").populate("cartItems.item").exec();
  res.json(orders);
}

async function cart(req, res) {
  const cart = await Order.getCart(req.user._id).populate("cartItems.item").exec();
  res.json(cart);
}

async function addItemToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addToCart(req.params.id);
  res.json(cart);
}

async function setItemQuantity(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.changeQuantity(req.body.itemId, req.body.qty);
  res.json(cart);
}

async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.IsPaid = true;
  await cart.save();
  res.json(cart);
}
