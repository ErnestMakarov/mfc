import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

import contactBackground from "../../assets/images/contact-bg.png";

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle
        cx="12"
        cy="7"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5 20V18C5 14.7 7.7 12 11 12H13C16.3 12 19 14.7 19 18V20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3V6M17 3V6M4 9H20M6 5H18C19.1 5 20 5.9 20 7V19C20 20.1 19.1 21 18 21H6C4.9 21 4 20.1 4 19V7C4 5.9 4.9 5 6 5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 4H5.8C4.8 4 4 4.8 4 5.8C4 13.6 10.4 20 18.2 20C19.2 20 20 19.2 20 18.2V16.5L15.7 15.5L14.7 17.5C11.1 16 8 12.9 6.5 9.3L8.5 8.3L7.5 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 5H19C20.1 5 21 5.9 21 7V16C21 17.1 20.1 18 19 18H10L5 21V18C3.9 18 3 17.1 3 16V7C3 5.9 3.9 5 5 5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10H17M7 14H14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle
        cx="8"
        cy="8"
        r="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="17"
        cy="9"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3 20V17.5C3 14.5 5.5 12 8.5 12C11.5 12 14 14.5 14 17.5V20H3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M15 14C18.3 13.5 21 15.5 21 18.5V20H16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L20 6V11C20 16.1 16.7 20.4 12 22C7.3 20.4 4 16.1 4 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15.5 9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeadphonesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 13V11C4 6.6 7.6 3 12 3C16.4 3 20 6.6 20 11V13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 13C4 11.9 4.9 11 6 11H7V18H6C4.9 18 4 17.1 4 16V13ZM20 13C20 11.9 19.1 11 18 11H17V18H18C19.1 18 20 17.1 20 16V13Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M17 18C16.3 20 14.7 21 12 21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 10C20 15.5 12 21 12 21C12 21 4 15.5 4 10C4 5.6 7.6 2 12 2C16.4 2 20 5.6 20 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 10H16M12 6L16 10L12 14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const advantages = [
  {
    key: "response",
    icon: <MessageIcon />,
  },
  {
    key: "approach",
    icon: <TeamIcon />,
  },
  {
    key: "privacy",
    icon: <ShieldIcon />,
  },
];

const inputClass =
  "h-[54px] w-full rounded-[10px] border border-[#DEE5EF] bg-white px-12 text-[13px] font-medium text-[#121722] outline-none transition-all duration-300 placeholder:text-[#8A95A5] hover:border-[#C8D5E8] focus:border-[#2A66EA] focus:ring-4 focus:ring-[#2A66EA]/10";

export default function ContactForm() {
  const { t } = useTranslation("common");
  const formRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("notConfigured");
      return;
    }

    setIsSending(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey,
        },
      );

      formRef.current.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="application-form"
      className="relative isolate overflow-hidden bg-white py-[clamp(72px,8vw,140px)]"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[70%] overflow-hidden">
        <img
          src={contactBackground}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-left-bottom opacity-95"
          loading="lazy"
          draggable="false"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-white" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      </div>

      <div className="page-container">
        <div className="mx-auto grid max-w-[1460px] overflow-hidden rounded-[24px] border border-white/80 bg-white/95 shadow-[0_28px_90px_rgba(18,45,90,0.16)] backdrop-blur-xl lg:grid-cols-[1.62fr_0.88fr]">
          <div className="p-5 sm:p-8 lg:p-10 xl:px-14 xl:py-12">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.065em] text-[#2A66EA] sm:text-[11px]">
              {t("contactForm.eyebrow")}
            </p>

            <h2 className="mt-4 max-w-[680px] text-[clamp(32px,3vw,52px)] font-semibold leading-[1.05] tracking-[-0.045em] text-[#121722]">
              {t("contactForm.titleFirst")}

              <span className="block">
                {t("contactForm.titleSecond")}{" "}

                <span className="text-[#2A66EA]">
                  {t("contactForm.titleAccent")}
                </span>
              </span>
            </h2>

            <p className="mt-4 max-w-[650px] text-[12px] leading-[1.7] text-[#727D8D] sm:text-[13px]">
              {t("contactForm.description")}
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-8"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="relative block">
                  <span className="sr-only">
                    {t("contactForm.fields.childName")}
                  </span>

                  <span className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-[#718098]">
                    <UserIcon />
                  </span>

                  <input
                    type="text"
                    name="child_name"
                    required
                    autoComplete="name"
                    placeholder={t(
                      "contactForm.fields.childName",
                    )}
                    className={inputClass}
                  />
                </label>

                <label className="relative block">
                  <span className="sr-only">
                    {t("contactForm.fields.parentName")}
                  </span>

                  <span className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-[#718098]">
                    <UserIcon />
                  </span>

                  <input
                    type="text"
                    name="parent_name"
                    required
                    autoComplete="name"
                    placeholder={t(
                      "contactForm.fields.parentName",
                    )}
                    className={inputClass}
                  />
                </label>

                <label className="relative block">
                  <span className="sr-only">
                    {t("contactForm.fields.childAge")}
                  </span>

                  <span className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-[#718098]">
                    <CalendarIcon />
                  </span>

                  <input
                    type="text"
                    name="child_age"
                    required
                    inputMode="decimal"
                    placeholder={t(
                      "contactForm.fields.childAge",
                    )}
                    className={inputClass}
                  />
                </label>

                <label className="relative block">
                  <span className="sr-only">
                    {t("contactForm.fields.phone")}
                  </span>

                  <span className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-[#718098]">
                    <PhoneIcon />
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    placeholder={t("contactForm.fields.phone")}
                    className={inputClass}
                  />
                </label>

                <label className="relative block sm:col-span-2">
                  <span className="sr-only">
                    {t("contactForm.fields.email")}
                  </span>

                  <span className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-[#718098]">
                    <MailIcon />
                  </span>

                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder={t("contactForm.fields.email")}
                    className={inputClass}
                  />
                </label>

                <label className="relative block sm:col-span-2">
                  <span className="sr-only">
                    {t("contactForm.fields.message")}
                  </span>

                  <span className="pointer-events-none absolute left-4 top-[17px] z-10 h-5 w-5 text-[#718098]">
                    <MessageIcon />
                  </span>

                  <textarea
                    name="message"
                    rows="4"
                    placeholder={t(
                      "contactForm.fields.message",
                    )}
                    className="min-h-[110px] w-full resize-y rounded-[10px] border border-[#DEE5EF] bg-white px-12 py-[17px] text-[13px] font-medium text-[#121722] outline-none transition-all duration-300 placeholder:text-[#8A95A5] hover:border-[#C8D5E8] focus:border-[#2A66EA] focus:ring-4 focus:ring-[#2A66EA]/10"
                  />
                </label>
              </div>

              <label className="mt-4 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="peer sr-only"
                />

                <span className="mt-[2px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] border border-[#BBC7D8] bg-white text-white transition-all peer-checked:border-[#2A66EA] peer-checked:bg-[#2A66EA] peer-focus-visible:ring-4 peer-focus-visible:ring-[#2A66EA]/15">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8.5L6.5 12L13 4.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className="text-[10px] leading-[1.55] text-[#748093] sm:text-[11px]">
                  {t("contactForm.consent.before")}{" "}

                  <Link
                    to="/privacy"
                    className="font-semibold text-[#2A66EA] underline decoration-[#2A66EA]/30 underline-offset-2 transition-colors hover:text-[#2059D5]"
                  >
                    {t("contactForm.consent.link")}
                  </Link>

                  {t("contactForm.consent.after")}
                </span>
              </label>

              {status !== "idle" && (
                <div
                  role="status"
                  className={[
                    "mt-4 rounded-[9px] border px-4 py-3 text-[11px] font-semibold leading-[1.55]",
                    status === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "",
                    status === "error"
                      ? "border-red-200 bg-red-50 text-red-700"
                      : "",
                    status === "notConfigured"
                      ? "border-amber-200 bg-amber-50 text-amber-700"
                      : "",
                  ].join(" ")}
                >
                  {t(`contactForm.status.${status}`)}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="group mt-5 flex h-[56px] w-full items-center justify-center gap-3 rounded-[10px] bg-[#2A66EA] px-7 text-[10px] font-extrabold uppercase tracking-[0.04em] !text-white shadow-[0_12px_30px_rgba(42,102,234,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2059D5] hover:shadow-[0_16px_38px_rgba(42,102,234,0.3)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSending
                  ? t("contactForm.sending")
                  : t("contactForm.submit")}

                {!isSending && (
                  <span className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                )}
              </button>
            </form>
          </div>

          <aside className="border-t border-[#E5EAF1] bg-[#FBFCFF] p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-9 xl:p-10">
            <div className="divide-y divide-[#E5EAF1]">
              {advantages.map((advantage) => (
                <div
                  key={advantage.key}
                  className="flex items-start gap-4 py-5 first:pt-0"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-white text-[#2A66EA] shadow-[0_8px_24px_rgba(20,50,100,0.08)]">
                    <span className="h-6 w-6">
                      {advantage.icon}
                    </span>
                  </span>

                  <div>
                    <h3 className="text-[13px] font-bold tracking-[-0.02em] text-[#121722]">
                      {t(
                        `contactForm.advantages.${advantage.key}.title`,
                      )}
                    </h3>

                    <p className="mt-1.5 text-[11px] leading-[1.55] text-[#748093]">
                      {t(
                        `contactForm.advantages.${advantage.key}.description`,
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-[18px] border border-[#E2E8F1] bg-white p-5 shadow-[0_14px_40px_rgba(20,50,100,0.08)] sm:p-6">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EDF3FF] text-[#2A66EA]">
                  <span className="h-6 w-6">
                    <HeadphonesIcon />
                  </span>
                </span>

                <div>
                  <h3 className="text-[14px] font-bold tracking-[-0.02em] text-[#121722]">
                    {t("contactForm.contacts.title")}
                  </h3>

                  <p className="mt-1 text-[10px] text-[#7A8595]">
                    {t("contactForm.contacts.description")}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <a
                  href="tel:+3725570865"
                  className="group flex items-center gap-3 text-[12px] font-semibold text-[#394456] transition-colors hover:text-[#2A66EA]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#F0F5FF] text-[#2A66EA]">
                    <span className="h-[18px] w-[18px]">
                      <PhoneIcon />
                    </span>
                  </span>

                  +372 557 0865
                </a>

                <a
                  href="mailto:email.finswim@gmail.com"
                  className="group flex items-center gap-3 break-all text-[12px] font-semibold text-[#394456] transition-colors hover:text-[#2A66EA]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#F0F5FF] text-[#2A66EA]">
                    <span className="h-[18px] w-[18px]">
                      <MailIcon />
                    </span>
                  </span>

                  email.finswim@gmail.com
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ringi+tn+64+Maardu+74112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-[12px] font-semibold leading-[1.55] text-[#394456] transition-colors hover:text-[#2A66EA]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#F0F5FF] text-[#2A66EA]">
                    <span className="h-[18px] w-[18px]">
                      <LocationIcon />
                    </span>
                  </span>

                  Ringi tn 64, Maardu, Estonia, 74112
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}