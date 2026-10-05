import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MerchIcon from "./MerchIcon.jsx";

export default function ProductCard({ product }) {
  const { t } = useTranslation("merch");
  const name = t(`products.${product.key}.name`);
  const image = product.images[0];
  return <Link to={`/merch/${product.slug}`} className="merch-card">
    <div className="merch-card-photo">
      <span className="merch-card-badge">{t(`audiences.${product.audience}`)}</span>
      <img src={image.thumbnail} srcSet={`${image.thumbnail} 600w, ${image.src} 1200w`} sizes="(max-width: 599px) 50vw, (max-width: 1099px) 33vw, 25vw" alt={name} width="600" height="800" loading="lazy" decoding="async" />
      <span className="merch-card-open"><MerchIcon /></span>
    </div>
    <div className="merch-card-copy">
      <p className="merch-card-category">{t(`categories.${product.category}`)}</p>
      <h3>{name}</h3>
      <div className="merch-card-bottom"><span>{t("priceOnRequest")}</span><span>{t("sizeRange", { first: product.sizes[0], last: product.sizes.at(-1) })}</span></div>
    </div>
  </Link>;
}
