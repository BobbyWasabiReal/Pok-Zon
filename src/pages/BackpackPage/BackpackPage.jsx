import { useEffect, useState } from "react";
import OrdersList from "../../components/OrdersList/OrdersList";
import * as ordersAPI from "../../utilities/orders-api";
import Cart from "../../components/Cart/Cart";
import "./BackpackPage.css";

export default function BackpackPage() {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      setActiveOrder(orders[0] || null);
      setOrders(orders);
    }
    getOrders();
  }, []);

  return (
    <div className="BackpackPage">
      <OrdersList
        orders={orders}
        activeOrder={activeOrder}
        setActiveOrder={setActiveOrder}
      />
      <Cart order={activeOrder} />
    </div>
  );
}
