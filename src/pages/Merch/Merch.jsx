import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { merchProducts } from "../../data/merchProducts.js";
import ProductCard from "../../components/merch/ProductCard.jsx";
import MerchIcon from "../../components/merch/MerchIcon.jsx";
import "./merch.css";

const audiences = ["all", "kids", "men", "women", "unisex"];
const categories = ["all", "tshirts", "hoodies", "shorts", "trousers"];

export default function Merch() {
  const { t } = useTranslation("merch");
  const [params, setParams] = useSearchParams();
  const audience = audiences.includes(params.get("audience")) ? params.get("audience") : "all";
  const category = categories.includes(params.get("category")) ? params.get("category") : "all";
  const products = merchProducts.filter((product) => (audience === "all" || product.audience === audience) && (category === "all" || product.category === category));

  useEffect(() => {
    const previous = document.title;
    document.title = `${t("catalogTitle")} | Maardu Finswimming Club`;
    return () => { document.title = previous; };
  }, [t]);

  function filter(key, value) {
    const next = new URLSearchParams(params);
    if (value === "all") next.delete(key); else next.set(key, value);
    setParams(next, { preventScrollReset: true });
  }

  return <div className="merch">
    <section className="merch-hero">
      <div className="page-container merch-hero-grid">
        <div className="merch-hero-copy">
          <p className="eyebrow">{t("hero.eyebrow")}</p>
          <h1>{t("hero.title")}<span>{t("hero.accent")}</span></h1>
          <p className="merch-hero-description">{t("hero.description")}</p>
          <a className="merch-button" href="#merch-catalog">{t("hero.browse")}<MerchIcon /></a>
          <div className="merch-hero-caption"><span />{t("hero.caption")}</div>
        </div>
        <div className="merch-hero-visual" aria-hidden="true">
          <span className="merch-watermark">MFC</span>
          <img className="merch-hero-image" src="/images/merch/07-urban-men-hoodie-on-model-front.webp" width="1200" height="1600" alt="" fetchPriority="high" />
          <div className="merch-hero-inset"><img src="/images/merch/thumbs/01-bahrain-kids-tshirt-on-model-front.webp" width="600" height="800" alt="" /><span>MAARDU<br />FINSWIMMING CLUB</span></div>
          <div className="merch-hero-tag"><MerchIcon name="bag" /><span>{t("hero.tag")}</span></div>
        </div>
      </div>
    </section>

    <section id="merch-catalog" className="page-container merch-catalog">
      <div className="merch-section-heading"><div><p className="eyebrow">{t("collection")}</p><h2>{t("catalogTitle")}</h2></div><p aria-live="polite">{t("productCount", { count: products.length })}</p></div>
      <div className="merch-toolbar">
        <div className="merch-filters" role="group" aria-label={t("filterAudience")}>
          {audiences.map((value) => <button key={value} type="button" aria-pressed={audience === value} onClick={() => filter("audience", value)}>{t(`audiences.${value}`)}</button>)}
        </div>
        <label className="merch-category-filter"><span className="sr-only">{t("filterCategory")}</span><select value={category} onChange={(event) => filter("category", event.target.value)}>{categories.map((value) => <option key={value} value={value}>{t(`categories.${value}`)}</option>)}</select></label>
      </div>
      {products.length > 0 ? <div className="merch-product-grid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <div className="merch-empty"><h3>{t("empty.title")}</h3><p>{t("empty.description")}</p><button type="button" className="merch-button" onClick={() => setParams({}, { preventScrollReset: true })}>{t("empty.reset")}</button></div>}
      <div className="merch-how"><div><p className="eyebrow">{t("how.eyebrow")}</p><h2>{t("how.title")}</h2></div><ol>{["choose", "request", "confirm"].map((step, index) => <li key={step}><span>0{index + 1}</span><h3>{t(`how.${step}.title`)}</h3><p>{t(`how.${step}.description`)}</p></li>)}</ol></div>
      <p className="merch-contact-note">{t("questions")} <Link to="/contacts">{t("contactClub")} <span aria-hidden="true">↗</span></Link></p>
    </section>
  </div>;
}
