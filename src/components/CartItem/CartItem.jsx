import "./CartItem.css";

export default function CartItem({ cartItem, isPaid, handleChangeQuantity }) {
  return (
    <div className="CartItem">
      <div className="flex-ctr-ctr">
        <img
          src={cartItem.item.image}
          alt="item"
          style={{ width: "12vmin", height: "12vmin", marginBottom: "-6vmin" }}
        />
      </div>
      <div className="item-name">
        {cartItem.item.name}
        <span style={{ marginLeft: "2vmin" }}>
        ₽{cartItem.item.price}
        </span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && "center" }}>
        {!isPaid && (
          <button
            className="btn-xs"
            onClick={() =>
              handleChangeQuantity(cartItem.item._id, cartItem.quantity - 1)
            }
          >
            −
          </button>
        )}
        <span>{cartItem.quantity}</span>
        {!isPaid && (
          <button
            className="btn-xs"
            onClick={() =>
              handleChangeQuantity(cartItem.item._id, cartItem.quantity + 1)
            }
          >
            +
          </button>
        )}
      </div>
      <div className="ext-price">₽{cartItem.extPrice}</div>
    </div>
  );
}
