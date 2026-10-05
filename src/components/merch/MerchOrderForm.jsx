import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { merchEmailConfig } from "../../config/merchEmail.js";
import { sizeLabel } from "../../data/merchProducts.js";
import MerchIcon from "./MerchIcon.jsx";

export default function MerchOrderForm({ product }) {
  const { t, i18n } = useTranslation("merch");
  const formRef = useRef(null);
  const sending = useRef(false);
  const [size, setSize] = useState("");
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [receipt, setReceipt] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (sending.current) return;
    const form = formRef.current;
    const data = new FormData(form);
    if (data.get("website")) return;
    const values = Object.fromEntries(["first_name", "last_name", "email"].map((key) => [key, String(data.get(key) || "").trim()]));
    const invalid = {};
    if (!product.sizes.includes(size)) invalid.size = "size";
    for (const field of ["first_name", "last_name"]) {
      if (!values[field] || values[field].length > 80 || /[\r\n]/.test(values[field])) invalid[field] = "required";
    }
    if (!values.email || values.email.length > 120 || form.elements.email.validity.typeMismatch || /[\s\r\n]/.test(values.email)) invalid.email = "email";
    if (!data.get("consent")) invalid.consent = "consent";
    setErrors(invalid);
    if (Object.keys(invalid).length) {
      const first = Object.keys(invalid)[0];
      if (first === "size") form.querySelector('input[name="size"]')?.focus();
      else form.elements.namedItem(first)?.focus();
      return;
    }
    if (!merchEmailConfig.templateId) { setStatus("notConfigured"); return; }

    sending.current = true;
    setStatus("sending");
    // Product, SKU and size come from the catalogue, not hidden form inputs.
    const language = i18n.resolvedLanguage?.split("-")[0] || "et";
    const et = i18n.getFixedT("et", "merch");
    const reference = `MFC-${crypto.randomUUID()}`;
    const params = {
      ...values,
      customer_name: `${values.first_name} ${values.last_name}`,
      reply_to: values.email,
      product_name: et(`products.${product.key}.name`),
      product_name_local: t(`products.${product.key}.name`),
      product_id: product.slug,
      product_sku: product.sku,
      product_model: product.model,
      product_size: sizeLabel(product, size, et),
      product_color: et(`colors.${product.color}`),
      quantity: "1",
      price: et("priceOnRequest"),
      product_url: new URL(`/merch/${product.slug}`, window.location.origin).href,
      language: language.toUpperCase(),
      request_id: reference,
      submitted_at: new Intl.DateTimeFormat("et-EE", { dateStyle: "medium", timeStyle: "short", timeZone: "Europe/Tallinn" }).format(new Date()),
      consent: "Jah",
    };
    try {
      await emailjs.send(merchEmailConfig.serviceId, merchEmailConfig.templateId, params, { publicKey: merchEmailConfig.publicKey, limitRate: { id: "mfc-merch-form", throttle: 10000 } });
      setReceipt({ size, reference });
      setStatus("success");
      form.reset();
      setSize("");
    } catch (error) {
      setStatus(error?.status === 429 ? "rateLimited" : "error");
    } finally {
      sending.current = false;
    }
  }

  if (status === "success") return <div className="merch-success" role="status" aria-live="polite"><span className="merch-success-icon"><MerchIcon name="check" /></span><h2>{t("form.successTitle")}</h2><p>{t("form.successDescription")}</p><div className="merch-success-summary"><strong>{t(`products.${product.key}.name`)}</strong><span>{t("form.size")}: {sizeLabel(product, receipt.size, t)}</span></div><button type="button" className="merch-button merch-button-secondary" onClick={() => { setStatus("idle"); setReceipt(null); }}>{t("form.another")}</button></div>;

  return <form ref={formRef} onSubmit={handleSubmit} noValidate className="merch-order-form" aria-busy={status === "sending"}>
    <fieldset disabled={status === "sending"} className="merch-form-fields">
      <fieldset className="merch-size-field"><legend>{t("form.size")} <span aria-hidden="true">*</span></legend><div className="merch-sizes">{product.sizes.map((value) => <label key={value} className={size === value ? "is-selected" : ""}><input type="radio" name="size" value={value} checked={size === value} onChange={() => { setSize(value); setErrors((current) => ({ ...current, size: undefined })); }} required aria-invalid={Boolean(errors.size)} aria-describedby={errors.size ? "merch-size-error" : undefined} /><span>{sizeLabel(product, value, t)}</span></label>)}</div>{errors.size && <p className="merch-field-error" id="merch-size-error">{t(`form.errors.${errors.size}`)}</p>}</fieldset>
      <details className="merch-size-guide"><summary>{t("sizeGuide.title")}<span aria-hidden="true">+</span></summary><div><p>{t("sizeGuide.description")}</p><a href={product.sizeGuide} target="_blank" rel="noreferrer" aria-label={t("sizeGuide.open")}><img src={product.sizeGuide} alt={t("sizeGuide.alt", { product: t(`products.${product.key}.name`) })} loading="lazy" /></a><p className="merch-size-guide-note">{t("sizeGuide.note")}</p></div></details>
      <div className="merch-form-heading"><h2>{t("form.title")}</h2><p>{t("form.description")}</p></div>
      <div className="merch-input-grid">{["first_name", "last_name", "email"].map((field) => <label key={field} className={field === "email" ? "merch-input-wide" : ""} htmlFor={`merch-${field}`}><span>{t(`form.fields.${field}`)} <span aria-hidden="true">*</span></span><input id={`merch-${field}`} name={field} type={field === "email" ? "email" : "text"} autoComplete={{ first_name: "given-name", last_name: "family-name", email: "email" }[field]} maxLength={field === "email" ? 120 : 80} required aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `merch-${field}-error` : undefined} onChange={() => setErrors((current) => ({ ...current, [field]: undefined }))} />{errors[field] && <span className="merch-field-error" id={`merch-${field}-error`}>{t(`form.errors.${errors[field]}`)}</span>}</label>)}</div>
      <div className="merch-honeypot" aria-hidden="true"><label htmlFor="merch-website">Website</label><input id="merch-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <label className="merch-consent"><input type="checkbox" name="consent" value="yes" required aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "merch-consent-error" : undefined} onChange={() => setErrors((current) => ({ ...current, consent: undefined }))} /><span>{t("form.consent")} <Link to="/privacy">{t("form.privacy")}</Link></span></label>
      {errors.consent && <p className="merch-field-error" id="merch-consent-error">{t("form.errors.consent")}</p>}
      {["error", "notConfigured", "rateLimited"].includes(status) && <p className="merch-form-status" role="alert">{t(`form.status.${status}`)} <Link to="/contacts">{t("contactClub")}</Link></p>}
      <button type="submit" className="merch-button merch-submit" disabled={status === "sending"}>{t(status === "sending" ? "form.sending" : "form.submit")}<MerchIcon name="bag" /></button>
      <p className="merch-form-note">{t("form.note")}</p>
    </fieldset>
  </form>;
}
