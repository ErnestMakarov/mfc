import { useTranslation } from "react-i18next";

import borderImage from "../../assets/images/BORDER.png";

export default function PageHero({ namespace }) {
  const { t } = useTranslation(namespace);

  const translatedLines = t("hero.lines", {
    returnObjects: true,
  });

  const lines = Array.isArray(translatedLines)
    ? translatedLines
    : [];

  return (
    <section className="relative isolate overflow-hidden bg-white pt-[clamp(110px,10vw,180px)]">
      <div className="pointer-events-none absolute left-[-180px] top-[-200px] -z-10 h-[500px] w-[500px] rounded-full bg-[#EAF2FF]/60 blur-[130px]" />

      <div className="page-container">
        <div className="max-w-[1150px]">
          <p className="page-hero-reveal text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2A66EA] sm:text-[12px]">
            {t("hero.eyebrow")}
          </p>

          <h1 className="page-hero-reveal page-hero-delay-1 mt-6 text-[clamp(38px,5vw,78px)] font-semibold leading-[1.04] tracking-[-0.055em] text-[#121722]">
            {lines.map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {Array.isArray(line) &&
                  line.map((part, partIndex) => (
                    <span
                      key={partIndex}
                      className={
                        part.accent
                          ? "text-[#2A66EA]"
                          : "text-[#121722]"
                      }
                    >
                      {part.text}
                    </span>
                  ))}
              </span>
            ))}
          </h1>

          <p className="page-hero-reveal page-hero-delay-2 mt-7 max-w-[720px] text-[13px] leading-[1.75] text-[#707B8D] sm:text-[15px] lg:text-[16px]">
            {t("hero.description")}
          </p>
        </div>
      </div>

      <div className="page-hero-border relative mt-[clamp(48px,6vw,88px)] h-[54px] w-full overflow-hidden sm:h-[68px] lg:h-[92px]">
        <img
          src={borderImage}
          alt=""
          aria-hidden="true"
          className="block h-full w-full object-cover object-center"
          draggable="false"
        />
      </div>

      <div className="h-[clamp(32px,4vw,64px)]" />
    </section>
  );
}