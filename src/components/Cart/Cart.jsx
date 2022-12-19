import "./Cart.css";
import CartItem from "../CartItem/CartItem";

export default function Cart({ order, handleChangeQuantity, handleCheckout }) {
  if (!order) return null;

  const cartItems = order.cartItems.map(item => (
    <CartItem
      cartItem={item}
      isPaid={order.isPaid}
      handleChangeQuantity={handleChangeQuantity}
      key={item._id}
    />
  ));
  return (
    <div className="Cart">
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {cartItems.length ?
          <>
            {cartItems}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!cartItems.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal}</span>
            </section>
          </>
          :
          <div className="hungry">How Can We Help?</div>
        }
      </div>
    </div>
  );
}
