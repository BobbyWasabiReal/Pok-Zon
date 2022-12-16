import "./CategoryList.css";

export default function CategoryList({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  const cats = categories.map(category => 
    <li
      key={category}
      className={category === activeCategory ? "active" : ""}
      onClick={() => setActiveCategory(category)}
    >
      {category}
    </li>
  );
  return (
    <div className="CategoryListPage">
      <h1
      style={{textAlign: "left"}}
      >Categories</h1>
      <ul className="CategoryList">{cats}</ul>
    </div>
  );
}
