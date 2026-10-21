import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { merchProducts } from "../data/merchProducts.js";

const STORAGE_KEY = "mfc-merch-cart-v1";
const MerchCartContext = createContext(null);

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter((item) => {
      const product = merchProducts.find((candidate) => candidate.slug === item.slug);
      return product && product.sizes.includes(item.size) && Number.isInteger(item.quantity) && item.quantity > 0;
    }).map((item) => ({ slug: item.slug, size: item.size, quantity: Math.min(item.quantity, 99) }));
  } catch {
    return [];
  }
}

export function MerchCartProvider({ children }) {
  const [items, setItems] = useState(readCart);

  const update = useCallback((updater) => {
    setItems((current) => {
      const next = typeof updater === "function" ? updater(current) : updater;
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* Cart remains usable for this session. */ }
      return next;
    });
  }, []);

  const addItem = useCallback((slug, size, quantity = 1) => {
    const product = merchProducts.find((candidate) => candidate.slug === slug);
    if (!product || !product.sizes.includes(size)) return false;
    update((current) => {
      const existing = current.find((item) => item.slug === slug && item.size === size);
      if (existing) return current.map((item) => item.slug === slug && item.size === size ? { ...item, quantity: Math.min(99, item.quantity + quantity) } : item);
      return [...current, { slug, size, quantity: Math.min(99, Math.max(1, quantity)) }];
    });
    return true;
  }, [update]);

  const setQuantity = useCallback((slug, size, quantity) => {
    const nextQuantity = Math.floor(Number(quantity));
    if (!Number.isFinite(nextQuantity)) return;
    update((current) => nextQuantity <= 0
      ? current.filter((item) => !(item.slug === slug && item.size === size))
      : current.map((item) => item.slug === slug && item.size === size ? { ...item, quantity: Math.min(99, nextQuantity) } : item));
  }, [update]);

  const removeItem = useCallback((slug, size) => update((current) => current.filter((item) => !(item.slug === slug && item.size === size))), [update]);
  const clearCart = useCallback(() => update([]), [update]);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const value = useMemo(() => ({ items, count, addItem, setQuantity, removeItem, clearCart }), [items, count, addItem, setQuantity, removeItem, clearCart]);

  return <MerchCartContext.Provider value={value}>{children}</MerchCartContext.Provider>;
}

export function useMerchCart() {
  const context = useContext(MerchCartContext);
  if (!context) throw new Error("useMerchCart must be used inside MerchCartProvider");
  return context;
}
