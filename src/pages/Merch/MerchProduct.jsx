import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getMerchProduct, merchProducts } from "../../data/merchProducts.js";
import ProductGallery from "../../components/merch/ProductGallery.jsx";
import MerchOrderForm from "../../components/merch/MerchOrderForm.jsx";
import ProductCard from "../../components/merch/ProductCard.jsx";
import MerchIcon from "../../components/merch/MerchIcon.jsx";
import "./merch.css";

export default function MerchProduct() {
  const { slug } = useParams();
  const { t } = useTranslation("merch");
  const product = getMerchProduct(slug);
  const name = product ? t(`products.${product.key}.name`) : t("notFound.title");
  useEffect(() => {
    const previous = document.title;
    document.title = `${name} | Maardu Finswimming Club`;
    return () => { document.title = previous; };
  }, [name]);

  if (!product) return <div className="merch"><div className="page-container merch-not-found"><p className="eyebrow">MFC / 404</p><h1>{t("notFound.title")}</h1><p>{t("notFound.description")}</p><Link to="/merch" className="merch-button"><MerchIcon name="back" />{t("backToCatalog")}</Link></div></div>;
  const related = merchProducts.filter((item) => item.slug !== product.slug && (item.audience === product.audience || item.category === product.category)).slice(0, 4);

  return <div className="merch"><div className="page-container merch-product-page">
    <nav className="merch-breadcrumb" aria-label={t("breadcrumbs")}><Link to="/merch"><MerchIcon name="back" />{t("catalogTitle")}</Link><span aria-hidden="true">/</span><span>{name}</span></nav>
    <div className="merch-detail-grid">
      <ProductGallery key={product.slug} product={product} />
      <div className="merch-detail-copy">
        <p className="eyebrow">MFC · {t(`audiences.${product.audience}`)}</p><h1>{name}</h1>
        <p className="merch-detail-description">{t(`products.${product.key}.description`)}</p>
        <div className="merch-detail-price"><span>{t("priceOnRequest")}</span><p>{t("priceNote")}</p></div>
        <dl className="merch-specs"><div><dt>{t("specs.color")}</dt><dd><span className={`merch-color-dot merch-color-${product.color}`} />{t(`colors.${product.color}`)}</dd></div><div><dt>{t("specs.material")}</dt><dd>{t(`materials.${product.material}`)}</dd></div><div><dt>{t("specs.weight")}</dt><dd>{t("weight", { value: product.weight })}</dd></div></dl>
        <MerchOrderForm key={product.slug} product={product} />
      </div>
    </div>
    <section className="merch-related"><div className="merch-section-heading"><h2>{t("related")}</h2><Link to="/merch">{t("allProducts")} <span aria-hidden="true">↗</span></Link></div><div className="merch-product-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div></section>
  </div></div>;
}
