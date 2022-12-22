import ItemListItem from '../ItemListItem/ItemListItem';
import './ItemList.css';

export default function ItemList({ items, handleAddToOrder, setDescText }) {
    const itemElements = items.map(item => (
        <ItemListItem
            key={item._id}
            item={item}
            handleAddToOrder={handleAddToOrder}
            setDescText={setDescText}
        />
    ));
  return (
    <main className="ItemList">
        {itemElements}
    </main>
    );
}