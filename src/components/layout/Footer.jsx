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
                href="https://maps.google.com/?q=Ringi+tn+64+Maardu+Estonia"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] leading-[1.6] text-[#657083] transition-colors duration-300 hover:text-[#2A66EA] sm:text-[13px]"
              >
                Ringi tn 64, Maardu
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
                  06:30–21:00
                </dd>
              </div>

              <div className="flex items-start justify-between gap-4 text-[12px] sm:text-[13px]">
                <dt className="text-[#8A94A3]">
                  {t("footer.days.saturday")}
                </dt>

                <dd className="font-semibold text-[#4F5B6D]">
                  08:00–18:00
                </dd>
              </div>

              <div className="flex items-start justify-between gap-4 text-[12px] sm:text-[13px]">
                <dt className="text-[#8A94A3]">
                  {t("footer.days.sunday")}
                </dt>

                <dd className="font-semibold text-[#4F5B6D]">
                  10:00–16:00
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