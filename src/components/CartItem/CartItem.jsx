import "./CartItem.css";

export default function CartItem({ cartItem, IsPaid, handleChangeQuantity }) {
  return (
    <div className="CartItem">
      <div className="flex-ctr-ctr">
        <img
          src={cartItem.item.image}
          alt="item"
          style={{ width: "12vmin", height: "12vmin", marginBottom: "-4vmin" }}
        />
      </div>
      <div className="item">
        {cartItem.item.name}
        <span style={{ marginLeft: "2vmin", marginRight: "2vmin" }}> ₽{cartItem.item.price}</span>
      </div>
      <div className="qty" style={{ justifyContent: IsPaid && "center" }}>
        {!IsPaid && (
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
        {!IsPaid && (
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
      <div 
      className="ext-price"
      style={{ marginLeft: "2vmin" }}
      >₽{cartItem.extPrice}</div>
    </div>
  );
}
