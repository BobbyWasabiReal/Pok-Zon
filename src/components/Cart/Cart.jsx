import "./Cart.css";
import CartItem from "../CartItem/CartItem";

export default function Cart({ order, handleChangeQuantity, handleCheckout }) {
  if (!order) return null;

  const cartItems = order.cartItems.map((item) => (
    <CartItem
      cartItem={item}
      isPaid={order.isPaid}
      handleChangeQuantity={handleChangeQuantity}
      key={item._id}
    />
  ));
  return (
    <div className="Cart">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
      </div>
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
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="hungry">Hungry?</div>
        }
      </div>
    </div>
  );
}
