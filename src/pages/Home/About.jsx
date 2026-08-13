import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import aboutImageOne from "../../assets/images/home-about-1.png";
import aboutImageTwo from "../../assets/images/home-about-2.png";

function BabySwimmingIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none">
      <path
        d="M19 29C19 20.7 24.8 14 32 14C39.2 14 45 20.7 45 29V34C45 43.4 39.2 50 32 50C24.8 50 19 43.4 19 34V29Z"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M24 19C25.8 14.3 28.5 11 32 8C35.5 11 38.2 14.3 40 19"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M32 8V4"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <circle cx="27" cy="30" r="1.8" fill="currentColor" />
      <circle cx="37" cy="30" r="1.8" fill="currentColor" />

      <path
        d="M27 38C28.5 40 30.1 41 32 41C33.9 41 35.5 40 37 38"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <path
        d="M19 31C14 31 11 28.5 9 25M45 31C50 31 53 28.5 55 25"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <path
        d="M9 25L5 27M55 25L59 27"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <path
        d="M21 46L17 53M43 46L47 53"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none">
      <circle
        cx="32"
        cy="14"
        r="7"
        stroke="currentColor"
        strokeWidth="2.3"
      />

      <circle
        cx="15"
        cy="20"
        r="6"
        stroke="currentColor"
        strokeWidth="2.3"
      />

      <circle
        cx="49"
        cy="20"
        r="6"
        stroke="currentColor"
        strokeWidth="2.3"
      />

      <path
        d="M23 32C23 27.6 26.6 24 31 24H33C37.4 24 41 27.6 41 32V52H23V32Z"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinejoin="round"
      />

      <path
        d="M8 35C8 31.1 11.1 28 15 28C18.9 28 22 31.1 22 35V51H8V35Z"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinejoin="round"
      />

      <path
        d="M42 35C42 31.1 45.1 28 49 28C52.9 28 56 31.1 56 35V51H42V35Z"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinejoin="round"
      />

      <path
        d="M32 36V52M15 39V51M49 39V51"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PersonalIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none">
      <circle
        cx="32"
        cy="16"
        r="9"
        stroke="currentColor"
        strokeWidth="2.3"
      />

      <path
        d="M17 41C17 33.3 23.3 27 31 27H33C40.7 27 47 33.3 47 41V53H17V41Z"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinejoin="round"
      />

      <path
        d="M32 36V53"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <path
        d="M12 53H52"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

const advantages = [
  {
    key: "baby",
    icon: <BabySwimmingIcon />,
  },
  {
    key: "group",
    icon: <GroupIcon />,
  },
  {
    key: "personal",
    icon: <PersonalIcon />,
  },
];

export default function About() {
  const { t } = useTranslation("home");

  return (
    <section className="overflow-hidden bg-white pt-[clamp(72px,6vw,120px)] pb-[clamp(44px,3.5vw,70px)]">
      <div className="page-container">
        <div className="grid items-end gap-10 lg:grid-cols-[0.72fr_1.28fr] xl:gap-16">
          <div className="max-w-[560px]">
            <div className="relative">
              <span className="block text-[clamp(82px,9vw,150px)] font-light leading-[0.72] tracking-[-0.065em] text-[#EDF3FD]">
                1992
              </span>

              <p className="mt-5 text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2A66EA]">
                {t("aboutPreview.eyebrow")}
              </p>
            </div>

            <h2 className="mt-5 max-w-[540px] text-[clamp(30px,3vw,52px)] font-semibold leading-[1.08] tracking-[-0.045em] text-[#121722]">
              {t("aboutPreview.title")}
            </h2>

            <div className="mt-7 max-w-[520px] space-y-4 text-[13px] leading-[1.7] text-[#737D8D] sm:text-[14px]">
              <p>{t("aboutPreview.firstParagraph")}</p>
              <p>{t("aboutPreview.secondParagraph")}</p>
            </div>

            <Link
              to="/about"
              className="group mt-7 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.035em] text-[#2A66EA]"
            >
              <span className="relative">
                {t("aboutPreview.link")}

                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#2A66EA] transition-[width] duration-300 group-hover:w-full" />
              </span>

              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  d="M4 10H16M12 6L16 10L12 14"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="grid h-[clamp(270px,35vw,500px)] grid-cols-[2.15fr_1fr] gap-3 sm:gap-4">
            <div className="group relative overflow-hidden rounded-[18px] bg-[#EEF3F8] sm:rounded-[22px]">
              <img
                src={aboutImageOne}
                alt={t("aboutPreview.firstImageAlt")}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                loading="lazy"
                decoding="async"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10203A]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            <div className="group relative overflow-hidden rounded-[18px] bg-[#EEF3F8] sm:rounded-[22px]">
              <img
                src={aboutImageTwo}
                alt={t("aboutPreview.secondImageAlt")}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10203A]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid border-y border-[#E6EBF2] md:grid-cols-3 md:border-y-0 xl:mt-16">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.key}
              className={[
                "group flex items-start gap-4 py-6",
                "md:min-h-[140px] md:px-7 md:py-5",
                index !== advantages.length - 1
                  ? "border-b border-[#E6EBF2] md:border-b-0 md:border-r"
                  : "",
                index === 0 ? "md:pl-0" : "",
                index === advantages.length - 1
                  ? "md:pr-0"
                  : "",
              ].join(" ")}
            >
              <span className="h-12 w-12 shrink-0 text-[#2A66EA] transition-transform duration-300 group-hover:-translate-y-1 sm:h-14 sm:w-14">
                {advantage.icon}
              </span>

              <div className="pt-1">
                <h3 className="text-[13px] font-bold leading-[1.35] tracking-[-0.02em] text-[#121722] sm:text-[14px]">
                  {t(
                    `aboutPreview.advantages.${advantage.key}.title`,
                  )}
                </h3>

                <p className="mt-2 max-w-[390px] text-[11px] leading-[1.6] text-[#7A8494] sm:text-[12px]">
                  {t(
                    `aboutPreview.advantages.${advantage.key}.description`,
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}