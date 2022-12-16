import ItemListItem from '../ItemListItem/ItemListItem';
import './ItemList.css';

export default function ItemList({ items, handleAddToOrder }) {
    const itemElements = items.map(item => (
        <ItemListItem
            key={item._id}
            item={item}
            handleAddToOrder={handleAddToOrder}
        />
    ));
  return (
    <main className="ItemList">
        {itemElements}
    </main>
    );
}