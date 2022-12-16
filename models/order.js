const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemSchema = require("./item");

const CartItemSchema = new Schema(
  {
    quantity: { type: Number, default: 1 },
    item: itemSchema,
  },
  {
    toJSON: { virtuals: true },
  }
);

CartItemSchema.virtual("extPrice").get(function () {
  return this.quantity * this.item.price;
});

const OrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    IsPaid: { type: Boolean, default: false },
    cartItems: [CartItemSchema],
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

OrderSchema.statics.getCart = function (userId) {
  return this.findOneAndUpdate(
    { user: userId, IsPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
};

orderSchema.methods.addToCart = async function (itemId) {
  const cart = this;
  const cartItem = cart.cartItems.find((item) =>
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

orderSchema.methods.changeQuantity = function (itemId, quantity) {
  const cart = this;
  const cartItem = cart.cartItems.find((item) =>
    cartItem.item._id.equals(itemId)
  );
  if (cartItem && quantity <= 0) {
    cartItem.remove();
  } else if (cartItem) {
    cartItem.quantity = quantity;
  }
  return cart.save();
};

module.exports = mongoose.model("Order", OrderSchema);