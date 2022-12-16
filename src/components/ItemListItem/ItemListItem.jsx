import "./ItemListItem.css";

export default function ItemListItem({ item, handleAddToOrder }) {
  return (
    <div className="ItemListItem">
      <div className="image">
        <img
          src={item.image}
          alt="item"
          style={{ width: "12vmin", height: "12vmin", marginBottom: "-6vmin" }}
        />
      </div>
      <div className="name">{item.name}</div>
      <div className="price">
        <span>₽{item.price}</span>
        <button
          className="btn-sm"
          onClick={() => handleAddToOrder(item._id)}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
