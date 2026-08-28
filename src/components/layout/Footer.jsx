import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../assets/images/header-logo.png";

const navigation = [
  {
    path: "/about",
    key: "about",
  },
  {
    path: "/coaches",
    key: "coaches",
  },
  {
    path: "/training",
    key: "training",
  },
  {
    path: "/news",
    key: "news",
  },
  {
    path: "/contacts",
    key: "contacts",
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/mfc_est/";
const FACEBOOK_URL = "https://www.facebook.com/maardufinswim/";
const VIBER_URL = "viber://chat?number=%2B3725570865";

export default function Footer() {
  const { t } = useTranslation("common");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E6EAF0] bg-white">
      <div className="page-container">
        <div className="grid gap-12 py-[clamp(56px,6vw,95px)] sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_0.9fr] lg:gap-10 xl:gap-16">
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
              aria-label={t("footer.homeLabel")}
            >
              <img
                src={logo}
                alt=""
                className="h-14 w-14 shrink-0 object-contain transition-transform duration-500 group-hover:scale-105"
                draggable="false"
              />

              <span className="max-w-[170px] text-[14px] font-bold leading-[1.3] tracking-[-0.025em] text-[#121722]">
                {t("footer.clubName")}
              </span>
            </Link>

            <p className="mt-5 max-w-[340px] text-[12px] leading-[1.75] text-[#7A8494] sm:text-[13px]">
              {t("footer.description")}
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE4F0] text-[#2A66EA] transition-all duration-300 hover:-translate-y-1 hover:border-[#2A66EA] hover:bg-[#2A66EA] hover:text-white hover:shadow-[0_10px_25px_rgba(42,102,234,0.24)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[19px] w-[19px]"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="17.4"
                    cy="6.7"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {FACEBOOK_URL && (
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE4F0] text-[#2A66EA] transition-all duration-300 hover:-translate-y-1 hover:border-[#2A66EA] hover:bg-[#2A66EA] hover:text-white hover:shadow-[0_10px_25px_rgba(42,102,234,0.24)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-[18px] w-[18px]"
                    aria-hidden="true"
                  >
                    <path d="M13.7 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V13h2.8v8h3.4Z" />
                  </svg>
                </a>
              )}
              {VIBER_URL && (
                <a
                  href={VIBER_URL}
                  rel="noreferrer"
                  aria-label="Viber"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE4F0] text-[#2A66EA] transition-all duration-300 hover:-translate-y-1 hover:border-[#2A66EA] hover:bg-[#2A66EA] hover:text-white hover:shadow-[0_10px_25px_rgba(42,102,234,0.24)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-[19px] w-[19px]"
                    aria-hidden="true"
                  >
                    <path d="M11.4 0C9.47.03 5.33.34 3.02 2.47.3 5.19.7 9.82.63 9.82c-.06 3.12-.15 8.96 5.49 10.54l-.01 2.42s-.04.98.61 1.18c.78.24 1.23-.5 1.98-1.3l1.4-1.58c3.85.33 6.81-.42 7.15-.53.78-.25 5.18-.82 5.89-6.66.74-6.02-.36-9.83-2.34-11.55C20.2 1.79 17.79.04 12.42.02c0 0-.4-.03-1.02-.02ZM12 1.71c.55 0 .88.02.88.02 4.54.02 6.72 1.39 7.22 1.85 1.68 1.44 2.53 4.87 1.91 9.9-.6 4.88-4.17 5.18-4.83 5.4-.28.09-2.88.74-6.15.52 0 0-2.44 2.94-3.2 3.7-.12.12-.26.17-.35.14-.13-.03-.17-.19-.16-.41l.02-4.02c-4.76-1.32-4.48-6.29-4.43-8.9.05-2.6.54-4.74 2-6.17C6.87 1.98 10.37 1.73 12 1.71Zm-.16 2.58c-.17 0-.3.14-.3.3s.13.31.3.31c1.62.01 2.95.54 4.03 1.59 1.07 1.05 1.62 2.47 1.63 4.33 0 .17.14.3.31.3s.3-.14.3-.3c-.01-1.98-.62-3.6-1.82-4.76-1.19-1.16-2.69-1.75-4.45-1.77Zm-3.96.7c-.19-.03-.4 0-.62.12l-.01.01c-.43.25-.82.56-1.15.93-.27.32-.42.64-.46.95-.01.05-.01.09-.01.14 0 .14.02.27.07.4l.01.01c.14.48.47 1.28 1.2 2.6.42.77.9 1.5 1.45 2.19.27.34.56.67.87.98l.13.13c.31.31.64.6.98.87.69.54 1.42 1.03 2.19 1.45 1.33.73 2.13 1.07 2.6 1.21l.01.01c.13.04.27.06.4.06.05 0 .09 0 .14-.01.31-.04.63-.19.95-.46h.01c.37-.33.68-.72.93-1.15l.01-.01c.22-.43.15-.84-.18-1.12-.01 0-.7-.58-1.04-.83-.36-.26-.73-.49-1.11-.71-.51-.29-1.03-.11-1.25.17l-.45.56c-.23.28-.66.25-.66.25-3.12-.8-3.96-3.96-3.96-3.96s-.04-.43.25-.66l.56-.45c.28-.22.46-.74.17-1.25-.22-.38-.45-.76-.71-1.12-.25-.34-.83-1.03-.83-1.04-.14-.16-.31-.27-.5-.3Z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-[12px] font-extrabold uppercase tracking-[0.06em] text-[#121722]">
              {t("footer.navigation")}
            </h2>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    [
                      "group relative text-[12px] font-medium transition-colors duration-300 sm:text-[13px]",
                      isActive
                        ? "text-[#2A66EA]"
                        : "text-[#657083] hover:text-[#2A66EA]",
                    ].join(" ")
                  }
                >
                  {t(`footer.links.${item.key}`)}

                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#2A66EA] transition-[width] duration-300 group-hover:w-full" />
                </NavLink>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-[12px] font-extrabold uppercase tracking-[0.06em] text-[#121722]">
              {t("footer.contacts")}
            </h2>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href="https://maps.google.com/?q=Ringi+tn+64a+Maardu+Estonia"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] leading-[1.6] text-[#657083] transition-colors duration-300 hover:text-[#2A66EA] sm:text-[13px]"
              >
                Ringi tn 64A, Maardu
              </a>

              <a
                href="mailto:email.finswim@gmail.com"
                className="break-all text-[12px] text-[#657083] transition-colors duration-300 hover:text-[#2A66EA] sm:text-[13px]"
              >
                email.finswim@gmail.com
              </a>

              <a
                href="tel:+3725570865"
                className="text-[12px] text-[#657083] transition-colors duration-300 hover:text-[#2A66EA] sm:text-[13px]"
              >
                +372 557 0865
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[12px] font-extrabold uppercase tracking-[0.06em] text-[#121722]">
              {t("footer.workingHours")}
            </h2>

            <dl className="mt-5 space-y-3">
              <div className="flex items-start justify-between gap-4 text-[12px] sm:text-[13px]">
                <dt className="text-[#8A94A3]">
                  {t("footer.days.weekdays")}
                </dt>

                <dd className="font-semibold text-[#4F5B6D]">
                  08:00–20:00
                </dd>
              </div>

              <div className="flex items-start justify-between gap-4 text-[12px] sm:text-[13px]">
                <dt className="text-[#8A94A3]">
                  {t("footer.days.saturday")}
                </dt>

                <dd className="font-semibold text-[#4F5B6D]">
                  -
                </dd>
              </div>

              <div className="flex items-start justify-between gap-4 text-[12px] sm:text-[13px]">
                <dt className="text-[#8A94A3]">
                  {t("footer.days.sunday")}
                </dt>

                <dd className="font-semibold text-[#4F5B6D]">
                  -
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#E6EAF0] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] leading-relaxed text-[#A0A8B4] sm:text-[11px]">
            © {currentYear} {t("footer.copyright")}
          </p>

          <Link
            to="/privacy"
            className="group relative w-fit text-[10px] font-medium text-[#A0A8B4] transition-colors duration-300 hover:text-[#2A66EA] sm:text-[11px]"
          >
            {t("footer.privacy")}

            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#2A66EA] transition-[width] duration-300 group-hover:w-full" />
          </Link>
        </div>
      </div>
    </footer>
  );
}