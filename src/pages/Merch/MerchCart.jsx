import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getMerchProduct, sizeLabel } from "../../data/merchProducts.js";
import { useMerchCart } from "../../context/MerchCartContext.jsx";
import MerchIcon from "../../components/merch/MerchIcon.jsx";
import "./merch.css";

export default function MerchCart() {
  const { t } = useTranslation("merch");
  const { items, count, setQuantity, removeItem, clearCart } = useMerchCart();
  useEffect(() => {
    const previous = document.title;
    document.title = `${t("cart.title")} | Maardu Finswimming Club`;
    return () => { document.title = previous; };
  }, [t]);

  return <div className="merch"><section className="page-container merch-cart-page">
    <nav className="merch-breadcrumb" aria-label={t("breadcrumbs")}><Link to="/merch"><MerchIcon name="back" />{t("catalogTitle")}</Link><span aria-hidden="true">/</span><span>{t("cart.title")}</span></nav>
    <div className="merch-cart-heading"><div><p className="eyebrow">MFC / MERCH</p><h1>{t("cart.title")}</h1><p>{t("cart.description")}</p></div>{items.length > 0 && <button type="button" className="merch-text-button" onClick={clearCart}>{t("cart.clear")}</button>}</div>
    {items.length === 0 ? <div className="merch-cart-empty"><span className="merch-cart-empty-icon"><MerchIcon name="bag" /></span><h2>{t("cart.emptyTitle")}</h2><p>{t("cart.emptyDescription")}</p><Link className="merch-button" to="/merch">{t("cart.backToCatalog")} <span aria-hidden="true">↗</span></Link></div> : <>
      <div className="merch-cart-layout"><div className="merch-cart-items" aria-label={t("cart.itemsLabel")}>
        {items.map((item) => {
          const product = getMerchProduct(item.slug);
          if (!product) return null;
          const name = t(`products.${product.key}.name`);
          return <article className="merch-cart-item" key={`${item.slug}-${item.size}`}>
            <Link to={`/merch/${product.slug}`} className="merch-cart-item-image"><img src={product.images[0].thumbnail} alt={name} loading="lazy" /></Link>
            <div className="merch-cart-item-info"><p className="merch-cart-item-category">{t(`categories.${product.category}`)} · {product.sku}</p><h2><Link to={`/merch/${product.slug}`}>{name}</Link></h2><p>{t("form.size")}: <strong>{sizeLabel(product, item.size, t)}</strong></p><p>{t("specs.color")}: {t(`colors.${product.color}`)}</p>
              <div className="merch-cart-item-actions"><label className="merch-cart-quantity" htmlFor={`cart-quantity-${item.slug}-${item.size}`}><span>{t("cart.quantity")}</span><div className="merch-quantity-control"><button type="button" aria-label={t("cart.decreaseQuantity")} onClick={() => setQuantity(item.slug, item.size, item.quantity - 1)}>−</button><input id={`cart-quantity-${item.slug}-${item.size}`} type="number" min="1" max="99" value={item.quantity} onChange={(event) => setQuantity(item.slug, item.size, event.target.value)} /><button type="button" aria-label={t("cart.increaseQuantity")} onClick={() => setQuantity(item.slug, item.size, item.quantity + 1)}>+</button></div></label><button type="button" className="merch-remove-button" onClick={() => removeItem(item.slug, item.size)}>{t("cart.remove")}</button></div>
            </div>
          </article>;
        })}
      </div>
      <aside className="merch-cart-summary"><p className="eyebrow">MFC</p><h2>{t("cart.summary")}</h2><div className="merch-cart-summary-row"><span>{t("cart.itemCount")}</span><strong>{count}</strong></div><div className="merch-cart-summary-row"><span>{t("cart.totalPrice")}</span><strong>{t("priceOnRequest")}</strong></div><p>{t("cart.summaryNote")}</p><Link className="merch-button" to="/merch/checkout">{t("cart.checkout")} <span aria-hidden="true">↗</span></Link><Link className="merch-cart-continue" to="/merch">{t("cart.continueShopping")}</Link></aside></div>
    </>}
  </section></div>;
}
