export default function CartItem({ cartItem, isPaid, handleChangeQuantity}) {
    return (
        <div className="CartItem">
            <div className="flex-ctr-ctr">{cartItem.item.image}</div>
            <div className="item-name">{cartItem.item.name}</div>
        </div>
    );
}