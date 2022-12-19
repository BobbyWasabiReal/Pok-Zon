const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartItemSchema = new Schema(
  {
    quantity: { type: Number, default: 1 },
    item: { type: Schema.Types.ObjectId, ref: "Item"}
  },
  {
    toJSON: { virtuals: true },
  }
);

cartItemSchema.virtual("extPrice").get(function () {
  return this.quantity * this.item.price;
});

const OrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    IsPaid: { type: Boolean, default: false },
    cartItems: [cartItemSchema],
  },
  {
    toJSON: { virtuals: true },
  }
);

OrderSchema.virtual("orderTotal").get(function () {
  return this.cartItems.reduce((total, item) => total + item.extPrice, 0);
});

OrderSchema.virtual("orderQty").get(function () {
  return this.cartItems.reduce((total, item) => total + item.quantity, 0);
});

OrderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

OrderSchema.statics.getCart = function (userId) {
  return this.findOneAndUpdate(
    { user: userId, IsPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
};

OrderSchema.methods.addToCart = async function (itemId) {
  const cart = this;
  const cartItem = cart.cartItems.find(cartItem =>
    cartItem.item._id.equals(itemId)
  );
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    const Item = mongoose.model("Item");
    const item = await Item.findById(itemId);
    cart.cartItems.push({ item });
  }
  return cart.save();
};

OrderSchema.methods.changeQuantity = function (itemId, newQuantity) {
  const cart = this;
  const cartItem = cart.cartItems.find(cartItem =>
    cartItem.item._id.equals(itemId)
  );
  if (cartItem && newQuantity <= 0) {
    cartItem.remove();
  } else if (cartItem) {
    cartItem.quantity = newQuantity;
  }
  return cart.save();
};

module.exports = mongoose.model("Order", OrderSchema);