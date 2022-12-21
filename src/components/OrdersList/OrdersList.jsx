import OrderListItem from "../OrderListItem/OrderListItem";
import "./OrderList.css";

export default function OrdersList({ orders, activeOrder, setActiveOrder }) {
  const orderList = orders.map(order => 
    <OrderListItem
      order={order}
      activeOrder={activeOrder}
      setActiveOrder={setActiveOrder}
      key={order.id}
    />
    );

  return <div className={`OrderList ${orders.length ? '' : 'no-orders'}`}>{orderList}</div>;
}
