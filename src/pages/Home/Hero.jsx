import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import heroImage from "../../assets/images/hero-img.png";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M7.5 3.5V7.5M16.5 3.5V7.5M3.5 10H20.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M7 13.5H9M11 13.5H13M15 13.5H17M7 17H9M11 17H13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AthletesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle
        cx="9"
        cy="7"
        r="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="17"
        cy="8"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M3.5 20V17C3.5 14.2 5.7 12 8.5 12H9.5C12.3 12 14.5 14.2 14.5 17V20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M15 13C17.8 13 20 15.2 20 18V20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M8 3H16L15 9H9L8 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="14"
        r="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M12 19V22M9 21H15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M12 11.5L12.8 13.1L14.5 13.3L13.2 14.6L13.5 16.4L12 15.5L10.5 16.4L10.8 14.6L9.5 13.3L11.2 13.1L12 11.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21C12 21 19 15.2 19 9.5C19 5.6 15.9 3 12 3C8.1 3 5 5.6 5 9.5C5 15.2 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="9.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

const stats = [
  {
    key: "founded",
    icon: <CalendarIcon />,
  },
  {
    key: "athletes",
    icon: <AthletesIcon />,
  },
  {
    key: "medals",
    icon: <MedalIcon />,
  },
  {
    key: "estonia",
    icon: <LocationIcon />,
  },
];

export default function Hero() {
  const { t } = useTranslation("home");

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="xl:hidden">
        <div className="page-container relative z-10 pt-8 sm:pt-12">
          <div className="max-w-[500px]">
            <p className="hero-reveal hero-delay-1 max-w-[250px] text-[10px] font-extrabold uppercase leading-[1.5] tracking-[0.04em] text-[#2A66EA] sm:text-[12px]">
              {t("hero.eyebrow")}
            </p>

            <h1 className="hero-reveal hero-delay-2 mt-4 text-[clamp(40px,12vw,64px)] font-semibold uppercase leading-[0.89] tracking-[-0.055em] text-[#121722]">
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

            <div className="hero-reveal hero-delay-3 mt-4 flex items-center gap-3">
              <span className="h-px w-7 shrink-0 bg-[#2A66EA]" />

              <p className="text-[12px] font-medium text-[#687385] sm:text-[14px]">
                {t("hero.description")}
              </p>
            </div>
          </div>
        </div>

        <div className="hero-image-reveal relative mt-5 h-[285px] w-full overflow-hidden sm:mt-7 sm:h-[400px]">
          <img
            src={heroImage}
            alt={t("hero.imageAlt")}
            className="absolute left-1/2 top-0 h-auto w-[720px] max-w-none -translate-x-[44%] sm:w-[1050px] sm:-translate-x-[45%]"
            fetchPriority="high"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white/95" />
        </div>

        <div className="page-container relative z-20 -mt-7">
          <div className="hero-reveal hero-delay-4 grid grid-cols-2 gap-2.5">
            <Link
              to="/about"
              className="group flex h-[50px] items-center justify-center gap-2 rounded-[9px] bg-[#2A66EA] px-4 text-[10px] font-extrabold uppercase tracking-[0.04em] !text-white shadow-[0_12px_30px_rgba(42,102,234,0.28)] transition-all duration-300 active:scale-[0.98]"
            >
              {t("hero.aboutButton")}

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

            <Link
              to="/contacts"
              className="flex h-[50px] items-center justify-center rounded-[9px] border border-[#D9E0EA] bg-white px-4 text-[10px] font-extrabold uppercase tracking-[0.04em] text-[#121722] shadow-[0_10px_25px_rgba(20,40,80,0.08)] transition-all duration-300 active:scale-[0.98]"
            >
              {t("hero.joinButton")}
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 border-y border-[#E6EBF2]">
            {stats.map((stat, index) => (
              <div
                key={stat.key}
                className={[
                  "hero-stat flex min-h-[105px] items-center gap-3 py-5",
                  index % 2 === 0
                    ? "border-r border-[#E6EBF2] pr-3"
                    : "pl-4",
                  index < 2
                    ? "border-b border-[#E6EBF2]"
                    : "",
                ].join(" ")}
                style={{
                  animationDelay: `${500 + index * 90}ms`,
                }}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] bg-[#EDF3FF] text-[#2A66EA]">
                  <span className="h-5 w-5">
                    {stat.icon}
                  </span>
                </span>

                <div>
                  <p className="text-[9px] font-medium leading-tight text-[#929BAA]">
                    {t(`hero.stats.${stat.key}.label`)}
                  </p>

                  <p className="mt-1 max-w-[120px] text-[10px] font-bold leading-[1.35] tracking-[-0.02em] text-[#121722] min-[400px]:text-[11px]">
                    {t(`hero.stats.${stat.key}.value`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-8" />
      </div>

      <div className="relative hidden min-h-[calc(100svh-80px)] xl:block">
        <div className="pointer-events-none absolute right-[calc((100vw-100%)/-2)] top-0 z-0 aspect-[1500/940] w-[clamp(1250px,78.125vw,1500px)]">
          <img
            src={heroImage}
            alt={t("hero.imageAlt")}
            className="h-full w-full max-w-none object-fill"
            fetchPriority="high"
          />
        </div>

        <div className="page-container relative z-10 flex min-h-[calc(100svh-80px)] flex-col pb-12 pt-[clamp(70px,8vh,105px)]">
          <div className="max-w-[430px]">
            <p className="hero-reveal hero-delay-1 max-w-[300px] text-[13px] font-extrabold uppercase leading-[1.45] tracking-[0.04em] text-[#2A66EA]">
              {t("hero.eyebrow")}
            </p>

            <h1 className="hero-reveal hero-delay-2 mt-7 text-[clamp(66px,4.45vw,86px)] font-semibold uppercase leading-[0.9] tracking-[-0.055em] text-[#121722]">
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

            <div className="hero-reveal hero-delay-3 mt-7 flex items-center gap-3">
              <span className="h-px w-7 bg-[#2A66EA]" />

              <p className="text-[15px] font-medium text-[#687385]">
                {t("hero.description")}
              </p>
            </div>

            <div className="hero-reveal hero-delay-4 mt-10 flex gap-3">
              <Link
                to="/about"
                className="group flex h-14 min-w-[200px] items-center justify-center gap-2 rounded-[8px] bg-[#2A66EA] px-6 text-[11px] font-extrabold uppercase tracking-[0.04em] !text-white shadow-[0_10px_28px_rgba(42,102,234,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2059D5] hover:shadow-[0_14px_34px_rgba(42,102,234,0.32)]"
              >
                {t("hero.aboutButton")}

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

              <Link
                to="/contacts"
                className="flex h-14 min-w-[180px] items-center justify-center rounded-[8px] border border-[#D9E0EA] bg-white/80 px-6 text-[11px] font-extrabold uppercase tracking-[0.04em] text-[#121722] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2A66EA] hover:bg-white hover:text-[#2A66EA]"
              >
                {t("hero.joinButton")}
              </Link>
            </div>
          </div>

          <div className="relative z-20 mt-auto grid max-w-[1120px] grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.key}
                className="hero-stat group flex items-start gap-3"
                style={{
                  animationDelay: `${600 + index * 100}ms`,
                }}
              >
                <span className="h-7 w-7 shrink-0 text-[#2A66EA] transition-transform duration-300 group-hover:-translate-y-1">
                  {stat.icon}
                </span>

                <div>
                  <p className="text-[11px] font-medium leading-tight text-[#8A93A2]">
                    {t(`hero.stats.${stat.key}.label`)}
                  </p>

                  <p className="mt-1 max-w-[190px] text-[14px] font-bold leading-[1.3] tracking-[-0.02em] text-[#121722]">
                    {t(`hero.stats.${stat.key}.value`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}