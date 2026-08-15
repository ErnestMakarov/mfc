import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import aboutImageOne from "../../assets/images/home-about-1.png";
import aboutImageTwo from "../../assets/images/home-about-2.png";

function ParentAndBabyIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="22"
        cy="16"
        r="7"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <path
        d="M10 39V34C10 27.9 14.9 23 21 23H23C27.7 23 31.8 26 33.4 30.3"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M14 31L25.5 39.5C29.5 42.4 35.1 41.9 38.4 38.2L41 35.3"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="42.5"
        cy="29"
        r="5.5"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <path
        d="M38.5 33.2C42.5 34 46 36.3 48.2 39.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M5 44C9.5 41.8 14 41.8 18.5 44C23 46.2 27.5 46.2 32 44C36.5 41.8 41 41.8 45.5 44C50 46.2 54.5 46.2 59 44"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M8 51C12 49.2 16 49.2 20 51C24 52.8 28 52.8 32 51C36 49.2 40 49.2 44 51C48 52.8 52 52.8 56 51"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="14"
        r="7"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <circle
        cx="14"
        cy="21"
        r="5.5"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <circle
        cx="50"
        cy="21"
        r="5.5"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <path
        d="M22 34C22 28.5 26.5 24 32 24C37.5 24 42 28.5 42 34V53H22V34Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      <path
        d="M6 39C6 33.5 9.6 29 14 29C18.4 29 22 33.5 22 39V52H6V39Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      <path
        d="M42 39C42 33.5 45.6 29 50 29C54.4 29 58 33.5 58 39V52H42V39Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      <path
        d="M32 37V53M14 41V52M50 41V52"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PersonalIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="16"
        r="8"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <path
        d="M17 42C17 33.7 23.7 27 32 27C40.3 27 47 33.7 47 42V53H17V42Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      <path
        d="M32 37V53"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M11 53H53"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const advantages = [
  {
    key: "baby",
    icon: <ParentAndBabyIcon />,
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
    <section className="overflow-hidden bg-white pb-[clamp(44px,3.5vw,70px)] pt-[clamp(72px,6vw,120px)]">
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

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#2A66EA] transition-[width] duration-300 group-hover:w-full" />
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
                draggable="false"
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
                draggable="false"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10203A]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid border-y border-[#E6EBF2] md:grid-cols-3 md:border-y-0 xl:mt-16">
          {advantages.map((advantage, index) => (
            <article
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
              <span className="flex h-12 w-12 shrink-0 items-center justify-center text-[#2A66EA] transition-transform duration-300 group-hover:-translate-y-1 sm:h-14 sm:w-14">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}