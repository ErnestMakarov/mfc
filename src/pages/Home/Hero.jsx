import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import heroImage from "../../assets/images/hero-img.png";

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
  const { t } = useTranslation("home");

  function scrollToContent() {
    const nextSection =
      document.querySelector("#home-hero")?.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <section
      id="home-hero"
      className="relative isolate overflow-hidden bg-white"
    >
      <div className="relative hidden min-h-[max(760px,100svh)] lg:block">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={t("hero.imageAlt")}
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
            draggable="false"
          />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-[72px] bg-gradient-to-b from-white/75 via-white/20 to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-white via-white/95 via-[42%] to-transparent" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[80px] bg-gradient-to-t from-white/25 to-transparent" />
        </div>

        <div className="page-container relative z-10 flex min-h-[max(760px,100svh)] flex-col pb-10 pt-[clamp(115px,12vh,165px)]">
          <div className="max-w-[660px]">
            <p className="home-hero-reveal text-[11px] font-extrabold uppercase leading-[1.5] tracking-[0.075em] text-[#2A66EA] xl:text-[13px]">
              {t("hero.eyebrow")}
            </p>

            <h1 className="home-hero-reveal home-hero-delay-1 mt-5 text-[clamp(64px,5.2vw,100px)] font-extrabold uppercase leading-[0.88] tracking-[-0.065em] text-[#111722]">
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

            <p className="home-hero-reveal home-hero-delay-2 mt-7 max-w-[530px] text-[14px] font-medium leading-[1.7] text-[#667184] xl:text-[16px]">
              {t("hero.description")}
            </p>

            <div className="home-hero-reveal home-hero-delay-3 mt-9 flex items-center gap-3">
              <Link
                to="/training"
                className="group flex h-[56px] min-w-[220px] items-center justify-center gap-2 rounded-[9px] bg-[#2A66EA] px-7 text-[11px] font-extrabold uppercase tracking-[0.04em] !text-white shadow-[0_14px_35px_rgba(42,102,234,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2059D5] hover:shadow-[0_18px_42px_rgba(42,102,234,0.32)]"
              >
                {t("hero.trainingButton")}

                <span className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>

              <Link
                to="/contacts"
                className="flex h-[56px] min-w-[190px] items-center justify-center rounded-[9px] border border-[#BCCAE0] bg-white/75 px-7 text-[11px] font-extrabold uppercase tracking-[0.04em] text-[#121722] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2A66EA] hover:bg-white hover:text-[#2A66EA]"
              >
                {t("hero.joinButton")}
              </Link>
            </div>

            <div className="home-hero-reveal home-hero-delay-4 mt-10 flex items-stretch">
              {stats.map((stat, index) => (
                <div
                  key={stat.key}
                  className={[
                    "pr-8",
                    index > 0
                      ? "border-l border-[#CAD3E0] px-8"
                      : "",
                  ].join(" ")}
                >
                  <p className="text-[18px] font-extrabold leading-none tracking-[-0.035em] text-[#121722]">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.055em] text-[#7D8796]">
                    {t(`hero.stats.${stat.key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToContent}
            aria-label={t("hero.scrollDown")}
            className="absolute bottom-[72px] left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-[#2A66EA]/20 bg-white/75 text-[#2A66EA] shadow-[0_8px_24px_rgba(20,50,100,0.08)] backdrop-blur-md transition-all duration-300 hover:translate-y-1 hover:border-[#2A66EA]/40 hover:bg-white"
          >
            <span className="h-5 w-5">
              <ScrollIcon />
            </span>
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