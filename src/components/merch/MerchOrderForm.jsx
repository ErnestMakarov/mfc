import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { sizeLabel } from "../../data/merchProducts.js";
import { useMerchCart } from "../../context/MerchCartContext.jsx";
import MerchIcon from "./MerchIcon.jsx";

export default function MerchOrderForm({ product }) {
  const { t } = useTranslation("merch");
  const { addItem, count } = useMerchCart();
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(false);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    if (!product.sizes.includes(size)) { setError(true); return; }
    addItem(product.slug, size, quantity);
    setError(false);
    setAdded(true);
  }

  return (
    <div className="merch-order-form">
      <fieldset className="merch-size-field">
        <legend>{t("form.size")} <span aria-hidden="true">*</span></legend>
        <div className="merch-sizes">
          {product.sizes.map((value) => (
            <label key={value} className={size === value ? "is-selected" : ""}>
              <input type="radio" name={`size-${product.slug}`} value={value} checked={size === value} onChange={() => { setSize(value); setError(false); setAdded(false); }} aria-invalid={error} />
              <span>{sizeLabel(product, value, t)}</span>
            </label>
          ))}
        </div>
        {error && <p className="merch-field-error">{t("cart.errors.size")}</p>}
      </fieldset>

      <details className="merch-size-guide">
        <summary>{t("sizeGuide.title")}<span aria-hidden="true">+</span></summary>
        <div>
          <p>{t("sizeGuide.description")}</p>
          <a href={product.sizeGuide} target="_blank" rel="noreferrer" aria-label={t("sizeGuide.open")}>
            <img src={product.sizeGuide} alt={t("sizeGuide.alt", { product: t(`products.${product.key}.name`) })} loading="lazy" />
          </a>
          <p className="merch-size-guide-note">{t("sizeGuide.note")}</p>
        </div>
      </details>

      <div className="merch-form-heading">
        <h2>{t("cart.addTitle")}</h2>
        <p>{t("cart.addDescription")}</p>
      </div>
      <label className="merch-cart-quantity" htmlFor={`merch-quantity-${product.slug}`}>
        <span>{t("cart.quantity")}</span>
        <div className="merch-quantity-control">
          <button type="button" aria-label={t("cart.decreaseQuantity")} onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
          <input id={`merch-quantity-${product.slug}`} type="number" min="1" max="99" value={quantity} onChange={(event) => setQuantity(Math.max(1, Math.min(99, Number(event.target.value) || 1)))} />
          <button type="button" aria-label={t("cart.increaseQuantity")} onClick={() => setQuantity((value) => Math.min(99, value + 1))}>+</button>
        </div>
      </label>
      <button type="button" className="merch-button merch-submit" onClick={handleAdd}>
        {t("cart.addToCart")} <MerchIcon name="bag" />
      </button>
      {added && <div className="merch-cart-added" role="status" aria-live="polite">
        <p>{t("cart.added", { count })}</p>
        <Link className="merch-button merch-button-secondary" to="/merch/cart">{t("cart.goToCart")} <span aria-hidden="true">↗</span></Link>
      </div>}
      <p className="merch-form-note">{t("cart.priceNote")}</p>
    </div>
  );
}
