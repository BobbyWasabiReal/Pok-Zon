import './OrderListItem.css';

export default function OrderListItem({ order, activeOrder, setActiveOrder }) {
  return (
    <div
      className={`OrderListItem ${order === activeOrder ? "selected" : ""}`}
      onClick={() => setActiveOrder(order)}
    >
      <div className="OrderId">Order Id: {order.orderId}</div>
      <div className="OrderDate">
        Order Date: {new Date(order.updatedAt).toLocaleDateString()}
      </div>
      <div className="align-rt">
        <div>Total: ₽{order.orderTotal}</div>
      </div>
    </div>
  );
}
