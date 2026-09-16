import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { MenuItem } from "@/data/menu";
import type { ComboItem } from "@/data/combos";

const CART_STORAGE_KEY = "sithara-grand-cart";

export type CartItem = Pick<MenuItem, "id" | "name" | "category" | "price"> & {
  image?: string;
  includedItems?: ComboItem[];
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  addItem: (item: MenuItem, image?: string) => void;
  addCombo: (combo: { id: string; name: string; price: number; image: string; items: ComboItem[] }) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStoredCart(): CartItem[] {
  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) return [];
    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is CartItem =>
        typeof item === "object" &&
        item !== null &&
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        typeof item.category === "string" &&
        typeof item.price === "number" &&
        typeof item.quantity === "number" &&
        item.quantity > 0,
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readStoredCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (item: MenuItem, image?: string) => {
    setItems((current) => {
      const existing = current.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return current.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1, image: image ?? cartItem.image }
            : cartItem,
        );
      }
      return [...current, { id: item.id, name: item.name, category: item.category, price: item.price, image, quantity: 1 }];
    });
  };

  const addCombo = (combo: { id: string; name: string; price: number; image: string; items: ComboItem[] }) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === combo.id);
      if (existing) {
        return current.map((item) => item.id === combo.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...current, { id: combo.id, name: combo.name, category: "COMBOS", price: combo.price, image: combo.image, includedItems: combo.items, quantity: 1 }];
    });
  };

  const increaseQuantity = (id: string) => {
    setItems((current) => current.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const decreaseQuantity = (id: string) => {
    setItems((current) =>
      current.flatMap((item) =>
        item.id !== id ? [item] : item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : [],
      ),
    );
  };

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        subtotal,
        addItem,
        addCombo,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart: () => setItems([]),
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
