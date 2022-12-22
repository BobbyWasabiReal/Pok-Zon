import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import CategoryList from "../../components/CategoryList/CategoryList";
import ItemList from "../../components/ItemList/ItemList";
import Cart from "../../components/Cart/Cart";
import './ShopPage.css'

export default function ShopPage({ handleRefreshChange }) {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [cart, setCart] = useState(null);
  const [descText, setDescText] = useState("...");
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
  }, [handleRefreshChange]);

  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addToCart(itemId);
    handleRefreshChange();
    setCart(updatedCart);
  }

  async function handleChangeQuantity(itemId, qty) {
    const updatedCart = await ordersAPI.changeQuantity(itemId, qty);
    handleRefreshChange();
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate("/backpack");
  }

  return (
    <main className="ShopPage">
      <aside>
        <CategoryList
          categories={categories.current}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </aside>
      <ItemList
        items={items.filter(item => item.category === activeCategory)}
        handleAddToOrder={handleAddToOrder}
        setDescText={setDescText}
      />
      <Cart
        order={cart}
        handleChangeQuantity={handleChangeQuantity}
        handleCheckout={handleCheckout}
      />
      <div className="TextBox">{descText}</div>
    </main>
  );
}
