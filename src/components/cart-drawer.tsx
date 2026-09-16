import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { whatsappUrlForMessage } from "@/data/menu";

const formatPrice = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export function CartDrawer() {
  const { items, totalItems, subtotal, increaseQuantity, decreaseQuantity, removeItem, clearCart, isOpen, closeCart } = useCart();

  if (!isOpen) return null;

  const enquiryMessage = [
    "Hello Sithara Grand,",
    "",
    "I would like to enquire/order the following items:",
    "",
    ...items.flatMap((item, index) => [
      `${index + 1}. ${item.name}`,
      `   Quantity: ${item.quantity}`,
      `   Price: ${formatPrice(item.price)}`,
      `   Total: ${formatPrice(item.price * item.quantity)}`,
      ...(item.includedItems ? ["", "   Includes:", ...item.includedItems.map((included) => `   - ${included.name} - ${included.quantity}`)] : []),
      "",
    ]),
    `Total Items: ${totalItems}`,
    `Estimated Total: ${formatPrice(subtotal)}`,
    "",
    "Please confirm the availability and order details.",
    "",
    "Thank you.",
  ].join("\n");

  return (
    <div className="cart-layer" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && closeCart()}>
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="cart-header">
          <div>
            <p className="eyebrow"><ShoppingBag /> Your selection</p>
            <h2 id="cart-title">Cart <span>({totalItems})</span></h2>
          </div>
          <button className="cart-close" type="button" onClick={closeCart} aria-label="Close cart"><X /></button>
        </div>
        <div className="cart-content">
          {items.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag />
              <h3>Your cart is empty</h3>
              <p>Add dishes from the menu to begin your enquiry.</p>
            </div>
          ) : (
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  {item.image ? <img src={item.image} alt="" width={72} height={72} /> : <div className="cart-item-image" aria-hidden="true"><ShoppingBag /></div>}
                  <div className="cart-item-details">
                    <p>{item.category}</p>
                    <h3>{item.name}</h3>
                    <span>{formatPrice(item.price)} each</span>
                    <div className="cart-item-controls">
                      <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                        <button type="button" onClick={() => decreaseQuantity(item.id)} aria-label={`Decrease ${item.name} quantity`}><Minus /></button>
                        <strong>{item.quantity}</strong>
                        <button type="button" onClick={() => increaseQuantity(item.id)} aria-label={`Increase ${item.name} quantity`}><Plus /></button>
                      </div>
                      <strong className="cart-item-total">{formatPrice(item.price * item.quantity)}</strong>
                      <button className="cart-remove" type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}><Trash2 /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary"><span>Total items</span><strong>{totalItems}</strong><span>Estimated total</span><strong>{formatPrice(subtotal)}</strong></div>
            <button className="cart-clear" type="button" onClick={clearCart}>Clear cart</button>
            <a className="cart-whatsapp" href={whatsappUrlForMessage(enquiryMessage)} target="_blank" rel="noreferrer">Send enquiry on WhatsApp</a>
          </div>
        )}
      </aside>
    </div>
  );
}
