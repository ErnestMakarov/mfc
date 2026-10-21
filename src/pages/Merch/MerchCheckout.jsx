import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { merchEmailConfig } from "../../config/merchEmail.js";
import { getMerchProduct, sizeLabel } from "../../data/merchProducts.js";
import { useMerchCart } from "../../context/MerchCartContext.jsx";
import MerchIcon from "../../components/merch/MerchIcon.jsx";
import "./merch.css";

export default function MerchCheckout() {
  const { t, i18n } = useTranslation("merch");
  const { items, count, clearCart } = useMerchCart();
  const formRef = useRef(null);
  const sending = useRef(false);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [reference, setReference] = useState("");
  const [submittedCount, setSubmittedCount] = useState(0);
  const [retryValues, setRetryValues] = useState(null);

  useEffect(() => {
    const previous = document.title;
    document.title = `${t("cart.checkout")} | Maardu Finswimming Club`;
    return () => { document.title = previous; };
  }, [t]);

  const orderLines = items.map((item) => {
    const product = getMerchProduct(item.slug);
    return product ? { ...item, product, name: t(`products.${product.key}.name`), sizeText: sizeLabel(product, item.size, t) } : null;
  }).filter(Boolean);

  async function handleSubmit(event) {
    event.preventDefault();
    if (sending.current || !formRef.current) return;
    const data = new FormData(formRef.current);
    if (data.get("website")) return;
    const values = Object.fromEntries(["first_name", "last_name", "email", "phone"].map((key) => [key, String(data.get(key) || "").trim()]));
    const invalid = {};
    for (const field of ["first_name", "last_name"]) if (!values[field] || values[field].length > 80 || /[\r\n]/.test(values[field])) invalid[field] = "required";
    if (!values.email || values.email.length > 120 || formRef.current.elements.email.validity.typeMismatch || /[\s\r\n]/.test(values.email)) invalid.email = "email";
    const digits = values.phone.replace(/\D/g, "");
    if (!values.phone || values.phone.length > 25 || !/^[+\d().\-\s]+$/.test(values.phone) || digits.length < 7 || digits.length > 15) invalid.phone = "phone";
    if (!data.get("consent")) invalid.consent = "consent";
    if (!orderLines.length) invalid.cart = "cart";
    setErrors(invalid);
    if (Object.keys(invalid).length) {
      const first = Object.keys(invalid)[0];
      if (first !== "cart") formRef.current.elements.namedItem(first)?.focus();
      return;
    }
    if (!merchEmailConfig.templateId) { setRetryValues(values); setStatus("notConfigured"); return; }

    sending.current = true;
    setStatus("sending");
    const language = i18n.resolvedLanguage?.split("-")[0] || "et";
    const et = i18n.getFixedT("et", "merch");
    const requestId = `MFC-${typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`}`;
    const submittedAt = new Intl.DateTimeFormat("et-EE", { dateStyle: "medium", timeStyle: "short", timeZone: "Europe/Tallinn" }).format(new Date());
    const ru = i18n.getFixedT("ru", "merch");

const orderItems = orderLines
  .map((line, index) => {
    const name = ru(`products.${line.product.key}.name`);
    const size = sizeLabel(line.product, line.size, ru);

    return `${index + 1}. ${name}\nРазмер: ${size}\nКоличество: ${line.quantity}`;
  })
  .join("\n\n");
    const params = {
      ...values,
      customer_name: `${values.first_name} ${values.last_name}`,
      reply_to: values.email,
      product_name: orderLines.map((line) => `${et(`products.${line.product.key}.name`)} (${sizeLabel(line.product, line.size, et)}) × ${line.quantity}`).join("; "),
      product_name_local: orderLines.map((line) => `${line.name} (${line.sizeText}) × ${line.quantity}`).join("; "),
      product_id: orderLines.map((line) => line.product.slug).join(", "),
      product_sku: orderLines.map((line) => line.product.sku).join(", "),
      product_model: orderLines.map((line) => line.product.model).join(", "),
      product_size: orderLines.map((line) => `${et(`products.${line.product.key}.name`)}: ${sizeLabel(line.product, line.size, et)} × ${line.quantity}`).join("; "),
      product_color: [...new Set(orderLines.map((line) => et(`colors.${line.product.color}`)))].join(", "),
      quantity: String(count),
      price: et("priceOnRequest"),
      product_url: new URL("/merch/cart", window.location.origin).href,
      order_items: orderItems,
      order_items_html: orderItems.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>"),
      language: language.toUpperCase(),
      request_id: requestId,
      submitted_at: submittedAt,
      consent: "Jah",
    };
    try {
      await emailjs.send(merchEmailConfig.serviceId, merchEmailConfig.templateId, params, { publicKey: merchEmailConfig.publicKey, limitRate: { id: "mfc-merch-cart", throttle: 10000 } });
      setReference(requestId);
      setSubmittedCount(count);
      setStatus("success");
      clearCart();
      formRef.current.reset();
      setRetryValues(null);
    } catch (error) {
      setStatus(error?.status === 429 ? "rateLimited" : "error");
      setRetryValues(values);
    } finally {
      sending.current = false;
    }
  }

  if (status === "success") return <div className="merch"><section className="page-container merch-checkout-page"><div className="merch-success" role="status" aria-live="polite"><span className="merch-success-icon"><MerchIcon name="check" /></span><h1>{t("cart.successTitle")}</h1><p>{t("cart.successDescription")}</p><div className="merch-success-summary"><strong>{t("cart.requestId")}: {reference}</strong><span>{t("cart.sentItems", { count: submittedCount })}</span></div><Link to="/merch" className="merch-button">{t("cart.backToCatalog")}</Link></div></section></div>;

  if (!orderLines.length) return <div className="merch"><section className="page-container merch-checkout-page"><nav className="merch-breadcrumb"><Link to="/merch/cart"><MerchIcon name="back" />{t("cart.title")}</Link><span aria-hidden="true">/</span><span>{t("cart.checkout")}</span></nav><div className="merch-cart-empty"><span className="merch-cart-empty-icon"><MerchIcon name="bag" /></span><h1>{t("cart.emptyTitle")}</h1><p>{t("cart.checkoutEmpty")}</p><Link className="merch-button" to="/merch">{t("cart.backToCatalog")}</Link></div></section></div>;

  return <div className="merch"><section className="page-container merch-checkout-page">
    <nav className="merch-breadcrumb" aria-label={t("breadcrumbs")}><Link to="/merch/cart"><MerchIcon name="back" />{t("cart.title")}</Link><span aria-hidden="true">/</span><span>{t("cart.checkout")}</span></nav>
    <div className="merch-cart-heading"><div><p className="eyebrow">MFC / MERCH</p><h1>{t("cart.checkout")}</h1><p>{t("cart.checkoutDescription")}</p></div></div>
    <div className="merch-checkout-layout"><form ref={formRef} className="merch-checkout-form" onSubmit={handleSubmit} noValidate aria-busy={status === "sending"}>
      <div className="merch-form-heading"><h2>{t("cart.contactDetails")}</h2><p>{t("cart.contactDescription")}</p></div>
      <div className="merch-input-grid">{["first_name", "last_name", "email", "phone"].map((field) => <label key={field} className={field === "email" || field === "phone" ? "merch-input-wide" : ""} htmlFor={`checkout-${field}`}><span>{t(`form.fields.${field}`)}{field !== "phone" && <span aria-hidden="true"> *</span>}</span><input id={`checkout-${field}`} name={field} type={field === "email" ? "email" : field === "phone" ? "tel" : "text"} autoComplete={{ first_name: "given-name", last_name: "family-name", email: "email", phone: "tel" }[field]} maxLength={field === "email" ? 120 : field === "phone" ? 25 : 80} required defaultValue={retryValues?.[field] || ""} aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `checkout-${field}-error` : undefined} onChange={() => setErrors((current) => ({ ...current, [field]: undefined }))}/>{errors[field] && <span className="merch-field-error" id={`checkout-${field}-error`}>{t(`form.errors.${errors[field]}`)}</span>}</label>)}</div>
      <div className="merch-honeypot" aria-hidden="true"><label htmlFor="checkout-website">Website</label><input id="checkout-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <label className="merch-consent"><input type="checkbox" name="consent" value="yes" required aria-invalid={Boolean(errors.consent)} onChange={() => setErrors((current) => ({ ...current, consent: undefined }))}/><span>{t("form.consent")} <Link to="/privacy">{t("form.privacy")}</Link></span></label>
      {errors.consent && <p className="merch-field-error">{t("form.errors.consent")}</p>}
      {status !== "idle" && status !== "sending" && <p className="merch-form-status" role="alert">{t(`form.status.${status}`)} <Link to="/contacts">{t("contactClub")}</Link></p>}
      <button type="submit" className="merch-button merch-submit" disabled={status === "sending"}>{t(status === "sending" ? "form.sending" : "cart.sendRequest")} <MerchIcon name="bag" /></button>
      <p className="merch-form-note">{t("cart.noPaymentNote")}</p>
    </form>
    <aside className="merch-checkout-summary"><p className="eyebrow">{t("cart.summary")}</p>{orderLines.map((line) => <div className="merch-checkout-line" key={`${line.slug}-${line.size}`}><img src={line.product.images[0].thumbnail} alt=""/><div><strong>{line.name}</strong><span>{t("form.size")}: {line.sizeText} · {t("cart.quantity")}: {line.quantity}</span><small>{line.product.sku}</small></div></div>)}<div className="merch-cart-summary-row"><span>{t("cart.itemCount")}</span><strong>{count}</strong></div><div className="merch-cart-summary-row"><span>{t("cart.totalPrice")}</span><strong>{t("priceOnRequest")}</strong></div><Link className="merch-cart-continue" to="/merch/cart">{t("cart.editCart")}</Link></aside></div>
  </section></div>;
}
