import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import MerchIcon from "./MerchIcon.jsx";

export default function ProductGallery({ product }) {
  const { t } = useTranslation("merch");
  const [active, setActive] = useState(0);
  const dialog = useRef(null);
  const image = product.images[active];
  const name = t(`products.${product.key}.name`);
  const alt = `${name} — ${t(`views.${image.label}`)}`;
  const move = (direction) => setActive((index) => (index + direction + product.images.length) % product.images.length);

  return <div className="merch-gallery">
    <div className="merch-gallery-main">
      <button type="button" className="merch-gallery-zoom" onClick={() => dialog.current.showModal()} aria-label={t("gallery.zoom")}><img key={image.src} src={image.src} alt={alt} width="1200" height="1600" fetchPriority="high" /><span><MerchIcon name="zoom" /></span></button>
      <span className="merch-gallery-label">{t(`views.${image.label}`)}</span>
      {product.images.length > 1 && <div className="merch-gallery-controls"><button type="button" onClick={() => move(-1)} aria-label={t("gallery.previous")}><MerchIcon name="back" /></button><span aria-live="polite">{active + 1} / {product.images.length}</span><button type="button" onClick={() => move(1)} aria-label={t("gallery.next")}><MerchIcon /></button></div>}
    </div>
    {product.images.length > 1 && <div className="merch-thumbnails" role="group" aria-label={t("gallery.label")}>{product.images.map((photo, index) => <button key={photo.src} type="button" aria-pressed={active === index} aria-label={t(`views.${photo.label}`)} onClick={() => setActive(index)}><img src={photo.thumbnail} alt="" width="600" height="800" loading="lazy" /></button>)}</div>}
    <dialog ref={dialog} className="merch-image-dialog" aria-label={t("gallery.zoom")} onClick={(event) => { if (event.target === event.currentTarget) dialog.current.close(); }} onKeyDown={(event) => { if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } if (event.key === "ArrowRight") { event.preventDefault(); move(1); } }}>
      <button type="button" className="merch-dialog-close" autoFocus onClick={() => dialog.current.close()} aria-label={t("gallery.close")}><MerchIcon name="close" /></button>
      <img src={image.src} alt={alt} width="1200" height="1600" />
      {product.images.length > 1 && <div className="merch-dialog-controls"><button type="button" onClick={() => move(-1)} aria-label={t("gallery.previous")}><MerchIcon name="back" /></button><span aria-live="polite">{active + 1} / {product.images.length}</span><button type="button" onClick={() => move(1)} aria-label={t("gallery.next")}><MerchIcon /></button></div>}
    </dialog>
  </div>;
}
