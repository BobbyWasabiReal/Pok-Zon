import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import CategoryList from "../../components/CategoryList/CategoryList";
import ItemList from "../../components/ItemList/ItemList";
import Cart from "../../components/Cart/Cart";
import './ShopPage.css'

export default function ShopPage() {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [cart, setCart] = useState(null);
  const categories = useRef([]);
    const navigate = useNavigate();

  useEffect(() => {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categories.current = [...new Set(items.map((item) => item.category))];
      setItems(items);
      setActiveCategory(categories.current[0]);
    }
    getItems();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addToCart(itemId);
    setCart(updatedCart);
  }

  async function handleChangeQuantity(itemId, quantity) {
    const updatedCart = await ordersAPI.changeQuantity(itemId, quantity);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate("/backpack");
  }

  return (
    <main className="ShopPage">
      <aside>
        {/* <Logo /> */}
        <CategoryList
          categories={categories.current}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </aside>
      <ItemList
        items={items.filter(item => item.category === activeCategory)}
        handleAddToOrder={handleAddToOrder}
      />
      <Cart
        order={cart}
        handleChangeQuantity={handleChangeQuantity}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}
