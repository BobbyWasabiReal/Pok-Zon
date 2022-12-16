import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as itemsAPI from "../../utilities/items-api";
import CategoryList from "../../components/CategoryList/CategoryList";

export default function ShopPage() {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [cart, setCart] = useState(null);
  const categories = useRef([]);
  //   const navigate = useNavigate();

  useEffect(() => {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categories.current = [...new Set(items.map(item => item.category))];
      setItems(items);
      setActiveCategory(categories.current[0]);
    }
    getItems();
  }, []);

  return (
    <main>
      <h1>Shop</h1>
      <aside>
        {/* <Logo /> */}
        <CategoryList
          categories={categories.current}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {/* <UserLogOut user={user} setUser={setUser} /> */}
      </aside>
      {/* <ItemList
        items={items.filter((item) => item.category === activeCategory)}
      />
      <OrderDetail
        order={cart}
      /> */}
    </main>
  );
}
