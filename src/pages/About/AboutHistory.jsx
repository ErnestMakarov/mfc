import { useTranslation } from "react-i18next";

import aboutImageOne from "../../assets/images/about1.png";
import aboutImageTwo from "../../assets/images/about2.png";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L20 6V11C20 16.1 16.7 20.4 12 22C7.3 20.4 4 16.1 4 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15.5 9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle
        cx="12"
        cy="7"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="5"
        cy="9"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="19"
        cy="9"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M7.5 20V16.5C7.5 14 9.5 12 12 12C14.5 12 16.5 14 16.5 16.5V20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M3 19V16.5C3 14.6 4.5 13 6.5 13M21 19V16.5C21 14.6 19.5 13 17.5 13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 18L9 13L13 16L20 8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8H20V13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const milestones = [
  "foundation",
  "development",
  "international",
  "today",
];

const principles = [
  {
    key: "safety",
    icon: <ShieldIcon />,
  },
  {
    key: "team",
    icon: <TeamIcon />,
  },
  {
    key: "growth",
    icon: <GrowthIcon />,
  },
];

export default function AboutHistory() {
  const { t } = useTranslation("about");

  return (
    <section className="overflow-hidden bg-[#FAFCFF] py-[clamp(64px,7vw,120px)]">
      <div className="page-container">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2A66EA] sm:text-[12px]">
            {t("history.eyebrow")}
          </p>

          <h2 className="mt-4 text-[clamp(32px,3.2vw,56px)] font-semibold leading-[1.06] tracking-[-0.045em] text-[#121722]">
            {t("history.title")}
          </h2>
        </div>

        <div className="mt-10 lg:mt-14">
          <div className="relative">
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-[#DCE5F2] lg:bottom-auto lg:left-0 lg:right-0 lg:top-[7px] lg:h-px lg:w-auto" />

            <div className="relative grid gap-9 lg:grid-cols-4 lg:gap-8">
              {milestones.map((milestone) => (
                <article
                  key={milestone}
                  className="relative pl-10 lg:pl-0 lg:pt-10"
                >
                  <span className="absolute left-0 top-[5px] z-10 h-[15px] w-[15px] rounded-full border-[4px] border-[#DDE9FF] bg-[#2A66EA] lg:left-0 lg:top-0" />

                  <p className="text-[18px] font-bold tracking-[-0.035em] text-[#2A66EA] sm:text-[20px]">
                    {t(`history.timeline.${milestone}.year`)}
                  </p>

                  <h3 className="mt-3 text-[14px] font-bold leading-[1.4] tracking-[-0.02em] text-[#121722] sm:text-[15px]">
                    {t(`history.timeline.${milestone}.title`)}
                  </h3>

                  <p className="mt-3 max-w-[320px] text-[12px] leading-[1.7] text-[#727D8D] sm:text-[13px]">
                    {t(`history.timeline.${milestone}.description`)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[clamp(52px,6vw,90px)] grid gap-4 md:grid-cols-2 lg:gap-6">
          <div className="group relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#EAF1FA] sm:rounded-[22px]">
            <img
              src={aboutImageOne}
              alt={t("history.firstImageAlt")}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              loading="lazy"
              decoding="async"
              draggable="false"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10203A]/20 via-transparent to-transparent" />
          </div>

          <div className="group relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#EAF1FA] sm:rounded-[22px]">
            <img
              src={aboutImageTwo}
              alt={t("history.secondImageAlt")}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              loading="lazy"
              decoding="async"
              draggable="false"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10203A]/20 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-[clamp(48px,6vw,80px)] rounded-[20px] border border-[#DCE6F4] bg-white p-5 shadow-[0_20px_60px_rgba(20,50,100,0.06)] sm:p-8 lg:p-10">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2A66EA] sm:text-[12px]">
            {t("history.principles.eyebrow")}
          </p>

          <h2 className="mt-3 text-[clamp(27px,2.5vw,42px)] font-semibold leading-[1.1] tracking-[-0.04em] text-[#121722]">
            {t("history.principles.title")}
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.key}
                className="group/card rounded-[16px] border border-[#E1E8F2] bg-[#FCFDFF] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#BFD2F5] hover:shadow-[0_16px_40px_rgba(42,102,234,0.09)] sm:p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-[13px] bg-[#EDF3FF] text-[#2A66EA] transition-colors duration-300 group-hover/card:bg-[#2A66EA] group-hover/card:text-white">
                  <span className="h-6 w-6">
                    {principle.icon}
                  </span>
                </span>

                <h3 className="mt-5 text-[15px] font-bold tracking-[-0.025em] text-[#121722] sm:text-[16px]">
                  {t(
                    `history.principles.items.${principle.key}.title`,
                  )}
                </h3>

                <p className="mt-3 text-[12px] leading-[1.7] text-[#727D8D] sm:text-[13px]">
                  {t(
                    `history.principles.items.${principle.key}.description`,
                  )}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}