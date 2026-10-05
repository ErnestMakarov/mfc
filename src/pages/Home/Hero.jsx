import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import heroImage from "../../assets/images/hero-img.webp";
import "./hero-desktop.css";

const stats = [
  {
    key: "athletes",
    value: "100+",
  },
  {
    key: "medals",
    value: "50+",
  },
  {
    key: "experience",
    value: "30+",
  },
];

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

function ScrollIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4V19M6.5 13.5L12 19L17.5 13.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  const { t, i18n } = useTranslation("home");
  const language = i18n.resolvedLanguage?.split("-")[0] || "et";

  function scrollToContent() {
    const nextSection =
      document.querySelector("#home-hero")?.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
          ? "instant"
          : "smooth",
        block: "start",
      });
    }
  }

  return (
    <section
      id="home-hero"
      className="relative isolate overflow-hidden bg-white"
    >
      <div className="home-hero-desktop" data-language={language}>
        <div className="home-hero-stage page-container">
          <span className="home-hero-monogram" aria-hidden="true">MFC</span>
          <div
            className="home-hero-art"
            role="img"
            aria-label={t("hero.imageAlt")}
          />

          <div className="home-hero-copy">
            <p className="home-hero-eyebrow home-hero-reveal">
              {t("hero.eyebrow")}
            </p>

            <h1 className="home-hero-title home-hero-reveal home-hero-delay-1">
              <span>{t("hero.titleFirst")}</span>
              <span className="home-hero-title-accent">{t("hero.titleAccent")}</span>
              <span>{t("hero.titleLast")}</span>
            </h1>

            <p className="home-hero-description home-hero-reveal home-hero-delay-2">
              {t("hero.description")}
            </p>

            <div className="home-hero-actions home-hero-reveal home-hero-delay-3">
              <Link to="/training" className="home-hero-cta home-hero-cta-primary">
                {t("hero.trainingButton")}
                <span><ArrowIcon /></span>
              </Link>
              <Link to="/contacts" className="home-hero-cta home-hero-cta-secondary">
                {t("hero.joinButton")}
              </Link>
            </div>
          </div>
        </div>

        <div className="home-hero-bottom page-container home-hero-reveal home-hero-delay-4">
          <dl className="home-hero-statistics">
            {stats.map((stat) => (
              <div key={stat.key} className="home-hero-statistic">
                <dt>{t(`hero.stats.${stat.key}`)}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
          <button
            type="button"
            onClick={scrollToContent}
            aria-label={t("hero.scrollDown")}
            className="home-hero-scroll"
          >
            <ScrollIcon />
          </button>
        </div>
      </div>

      <div className="relative lg:hidden">
        <div className="relative h-[clamp(300px,92vw,440px)] overflow-hidden">
          <img
            src={heroImage}
            alt={t("hero.imageAlt")}
            className="absolute inset-0 h-full w-full object-cover object-[67%_center]"
            fetchPriority="high"
            draggable="false"
          />
        </div>

        <div className="page-container relative z-10 pb-8 pt-7">
          <p className="home-hero-reveal text-[9px] font-extrabold uppercase leading-[1.5] tracking-[0.065em] text-[#2A66EA] min-[390px]:text-[10px]">
            {t("hero.eyebrow")}
          </p>

          <h1 className="home-hero-reveal home-hero-delay-1 mt-3 text-[clamp(42px,12vw,58px)] font-extrabold uppercase leading-[0.88] tracking-[-0.065em] text-[#121722]">
            <span className="block">
              {t("hero.titleFirst")}
            </span>

            <span className="block text-[#2A66EA]">
              {t("hero.titleAccent")}
            </span>

            <span className="block">
              {t("hero.titleLast")}
            </span>
          </h1>

          <p className="home-hero-reveal home-hero-delay-2 mt-5 max-w-[340px] text-[12px] font-medium leading-[1.65] text-[#697486]">
            {t("hero.description")}
          </p>

          <div className="home-hero-reveal home-hero-delay-3 mt-6 grid gap-2.5">
            <Link
              to="/training"
              className="group flex h-[52px] items-center justify-center gap-2 rounded-[9px] bg-[#2A66EA] px-5 text-[10px] font-extrabold uppercase tracking-[0.04em] !text-white shadow-[0_12px_30px_rgba(42,102,234,0.25)] transition-all duration-300 active:scale-[0.98]"
            >
              {t("hero.trainingButton")}

              <span className="h-4 w-4">
                <ArrowIcon />
              </span>
            </Link>

            <Link
              to="/contacts"
              className="flex h-[52px] items-center justify-center rounded-[9px] border border-[#CBD5E3] bg-white px-5 text-[10px] font-extrabold uppercase tracking-[0.04em] text-[#121722] transition-all duration-300 active:scale-[0.98]"
            >
              {t("hero.joinButton")}
            </Link>
          </div>

          <div className="home-hero-reveal home-hero-delay-4 mt-7 grid grid-cols-3 border-y border-[#E2E8F1]">
            {stats.map((stat, index) => (
              <div
                key={stat.key}
                className={[
                  "flex min-h-[86px] flex-col justify-center py-4",
                  index === 0 ? "pr-3" : "",
                  index > 0
                    ? "border-l border-[#E2E8F1] px-3"
                    : "",
                ].join(" ")}
              >
                <p className="text-[15px] font-extrabold leading-none tracking-[-0.035em] text-[#121722]">
                  {stat.value}
                </p>

                <p className="mt-2 text-[8px] font-bold uppercase leading-[1.35] tracking-[0.035em] text-[#7D8796]">
                  {t(`hero.stats.${stat.key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}