import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../assets/images/header-logo.png";

const navItems = [
  { path: "/about", key: "about" },
  { path: "/coaches", key: "coaches" },
  { path: "/training", key: "training" },
  { path: "/news", key: "news" },
  { path: "/contacts", key: "contacts" },
  { path: "/documents", key: "documents" },
];

const languages = [
  { code: "et", label: "ET", name: "Eesti" },
  { code: "en", label: "EN", name: "English" },
  { code: "ru", label: "RU", name: "Русский" },
];

export default function Header() {
  const { t, i18n } = useTranslation("common");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const languageRef = useRef(null);

  const currentLanguage =
    i18n.resolvedLanguage?.split("-")[0] || "et";

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function changeLanguage(language) {
    i18n.changeLanguage(language);
    setIsLanguageOpen(false);
  }

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsLanguageOpen(false);
      }
    }

    function handleResize() {
      if (window.innerWidth >= 1200) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 h-16 border-b",
          "transition-all duration-500 lg:h-20",
          isScrolled
            ? "border-white/60 bg-white/[0.76] shadow-[0_10px_40px_rgba(20,40,80,0.09)] backdrop-blur-2xl backdrop-saturate-[1.35]"
            : "border-[#E6EAF1] bg-white shadow-none",
        ].join(" ")}
      >
        <div className="page-container grid h-full grid-cols-[1fr_auto] items-center gap-5 min-[1200px]:grid-cols-[1fr_auto_1fr]">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex w-fit items-center gap-2.5"
            aria-label={t("header.clubName")}
          >
            <img
              src={logo}
              alt=""
              className="h-9 w-9 shrink-0 object-contain lg:h-11 lg:w-11"
            />

            <span className="whitespace-nowrap text-[11px] font-bold leading-none tracking-[-0.025em] text-[#121722] sm:text-[13px] lg:text-[14px]">
              {t("header.clubName")}
            </span>
          </NavLink>

          <nav
            className="hidden items-center justify-center gap-[18px] min-[1200px]:flex min-[1450px]:gap-7 min-[1650px]:gap-9"
            aria-label={t("header.navigation")}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "group relative whitespace-nowrap py-3",
                    "text-[13px] font-semibold tracking-[-0.015em]",
                    "transition-colors duration-300 min-[1450px]:text-[14px]",
                    isActive
                      ? "text-[#2A66EA]"
                      : "text-[#121722] hover:text-[#2A66EA]",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    {t(`header.${item.key}`)}

                    <span
                      className={[
                        "absolute bottom-1 left-1/2 h-[2px]",
                        "-translate-x-1/2 rounded-full bg-[#2A66EA]",
                        "transition-[width] duration-300 ease-out",
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full",
                      ].join(" ")}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 min-[1450px]:gap-3">
            <NavLink
              to="/contacts"
              className="hidden h-11 items-center justify-center whitespace-nowrap rounded-[9px] bg-[#2A66EA] px-5 text-[11px] font-extrabold uppercase tracking-[0.03em] !text-white shadow-[0_8px_24px_rgba(42,102,234,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2059D5] hover:shadow-[0_12px_30px_rgba(42,102,234,0.28)] min-[1200px]:flex min-[1450px]:h-[46px] min-[1450px]:px-7 min-[1450px]:text-[12px]"
            >
              {t("header.join")}
            </NavLink>

            <div
              ref={languageRef}
              className="relative hidden min-[1200px]:block"
            >
              <button
                type="button"
                onClick={() =>
                  setIsLanguageOpen((open) => !open)
                }
                className="flex h-11 min-w-[62px] items-center justify-center gap-1.5 rounded-[9px] text-[13px] font-bold text-[#121722] transition-colors duration-300 hover:bg-[#F0F4FA] min-[1450px]:h-[46px] min-[1450px]:min-w-[68px]"
                aria-label={t("header.changeLanguage")}
                aria-expanded={isLanguageOpen}
              >
                {currentLanguage.toUpperCase()}

                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <path
                    d="M6 8L10 12L14 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={[
                  "absolute right-0 top-[calc(100%+10px)] w-[164px]",
                  "origin-top-right rounded-[14px]",
                  "border border-white/70 bg-white/[0.88] p-1.5",
                  "shadow-[0_20px_60px_rgba(20,40,80,0.16)]",
                  "backdrop-blur-xl transition-all duration-200",
                  isLanguageOpen
                    ? "visible translate-y-0 scale-100 opacity-100"
                    : "invisible -translate-y-2 scale-95 opacity-0",
                ].join(" ")}
              >
                {languages.map((language) => {
                  const isActive =
                    currentLanguage === language.code;

                  return (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() =>
                        changeLanguage(language.code)
                      }
                      className={[
                        "flex w-full items-center justify-between",
                        "rounded-[9px] px-3 py-2.5 text-[12px]",
                        "transition-colors duration-200",
                        isActive
                          ? "bg-[#EDF3FF] font-bold text-[#2A66EA]"
                          : "font-semibold text-[#566070] hover:bg-[#F3F6FA] hover:text-[#121722]",
                      ].join(" ")}
                    >
                      <span>{language.name}</span>
                      <span className="text-[10px]">
                        {language.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="group flex h-10 w-10 items-center justify-center text-[#121722] min-[1200px]:hidden"
              aria-label={t("header.openMenu")}
              aria-expanded={isMenuOpen}
            >
              <span className="flex w-[23px] flex-col gap-[5px]">
                <span className="h-[1.5px] w-full rounded-full bg-current transition-transform duration-300 group-hover:translate-x-1" />
                <span className="h-[1.5px] w-full rounded-full bg-current" />
                <span className="h-[1.5px] w-full rounded-full bg-current transition-transform duration-300 group-hover:-translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="h-16 lg:h-20" />

      <div
        className={[
          "fixed inset-0 z-[100] h-[100dvh] w-screen",
          "bg-white/[0.96] backdrop-blur-2xl",
          "transition-all duration-500",
          "ease-[cubic-bezier(0.76,0,0.24,1)] min-[1200px]:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-8 opacity-0",
        ].join(" ")}
        aria-hidden={!isMenuOpen}
      >
        <div className="mx-auto flex h-full w-[calc(100%-40px)] max-w-[600px] flex-col">
          <div className="relative flex h-[108px] shrink-0 items-center justify-center">
            <NavLink
              to="/"
              onClick={closeMenu}
              className="flex flex-col items-center gap-2"
            >
              <img
                src={logo}
                alt=""
                className="h-12 w-12 object-contain"
              />

              <span className="text-center text-[13px] font-bold tracking-[-0.025em] text-[#121722]">
                {t("header.clubName")}
              </span>
            </NavLink>

            <button
              type="button"
              onClick={closeMenu}
              className="group absolute right-0 top-5 flex h-10 w-10 items-center justify-center text-[#121722]"
              aria-label={t("header.closeMenu")}
            >
              <span className="relative h-6 w-6 transition-transform duration-300 group-hover:rotate-90">
                <span className="absolute left-0 top-[11px] h-[1.5px] w-6 rotate-45 bg-current" />
                <span className="absolute left-0 top-[11px] h-[1.5px] w-6 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-[clamp(16px,3.5vh,28px)]">
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${100 + index * 55}ms`
                    : "0ms",
                }}
                className={({ isActive }) =>
                  [
                    "group relative text-center text-[15px]",
                    "font-bold tracking-[-0.02em]",
                    "transition-all duration-500",
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0",
                    isActive
                      ? "text-[#2A66EA]"
                      : "text-[#121722] hover:text-[#2A66EA]",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    {t(`header.${item.key}`)}

                    <span
                      className={[
                        "absolute -bottom-2 left-1/2 h-[2px]",
                        "-translate-x-1/2 rounded-full bg-[#2A66EA]",
                        "transition-[width] duration-300",
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full",
                      ].join(" ")}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div
            style={{
              transitionDelay: isMenuOpen ? "430ms" : "0ms",
            }}
            className={[
              "shrink-0 pb-6 transition-all duration-500 sm:pb-8",
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0",
            ].join(" ")}
          >
            <div className="mx-auto mb-3 grid max-w-[330px] grid-cols-3 gap-1 rounded-[9px] bg-[#F2F5FA] p-1">
              {languages.map((language) => {
                const isActive =
                  currentLanguage === language.code;

                return (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() =>
                      changeLanguage(language.code)
                    }
                    className={[
                      "h-9 rounded-[7px] text-[10px]",
                      "font-extrabold transition-all duration-300",
                      isActive
                        ? "bg-[#2A66EA] text-white shadow-[0_5px_15px_rgba(42,102,234,0.18)]"
                        : "text-[#647083] hover:bg-white hover:text-[#2A66EA]",
                    ].join(" ")}
                  >
                    {language.label}
                  </button>
                );
              })}
            </div>

            <NavLink
              to="/contacts"
              onClick={closeMenu}
              className="mx-auto flex h-12 max-w-[300px] items-center justify-center rounded-[9px] bg-[#2A66EA] text-[11px] font-extrabold uppercase tracking-[0.04em] !text-white shadow-[0_10px_25px_rgba(42,102,234,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2059D5]"
            >
              {t("header.join")}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}