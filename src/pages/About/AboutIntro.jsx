import { useTranslation } from "react-i18next";

import aboutImage from "../../assets/images/aboutImg.png";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3V6M17 3V6M4 9H20M6 5H18C19.1 5 20 5.9 20 7V19C20 20.1 19.1 21 18 21H6C4.9 21 4 20.1 4 19V7C4 5.9 4.9 5 6 5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13H10M14 13H16M8 17H10M14 17H16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
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
        cx="5.5"
        cy="9"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="18.5"
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

function MedalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3H16L15 9H9L8 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="15"
        r="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 12.5L12.8 14.1L14.5 14.4L13.2 15.7L13.5 17.5L12 16.7L10.5 17.5L10.8 15.7L9.5 14.4L11.2 14.1L12 12.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 10C20 15.5 12 21 12 21C12 21 4 15.5 4 10C4 5.6 7.6 2 12 2C16.4 2 20 5.6 20 10Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
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
    icon: <TeamIcon />,
  },
  {
    key: "medals",
    icon: <MedalIcon />,
  },
  {
    key: "representation",
    icon: <LocationIcon />,
  },
];

export default function AboutIntro() {
  const { t } = useTranslation("about");

  return (
    <section className="overflow-hidden bg-white py-[clamp(64px,7vw,120px)]">
      <div className="page-container">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-24">
          <div className="max-w-[650px]">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2A66EA] sm:text-[12px]">
              {t("intro.eyebrow")}
            </p>

            <h2 className="mt-5 text-[clamp(32px,3.3vw,58px)] font-semibold leading-[1.08] tracking-[-0.045em] text-[#121722]">
              {t("intro.titleFirst")}

              <span className="block text-[#2A66EA]">
                {t("intro.titleAccent")}
              </span>
            </h2>

            <div className="mt-7 max-w-[610px] space-y-4 text-[13px] leading-[1.75] text-[#707B8D] sm:text-[14px] lg:text-[15px]">
              <p>{t("intro.firstParagraph")}</p>
              <p>{t("intro.secondParagraph")}</p>
            </div>
          </div>

          <div className="group relative">
            <div className="pointer-events-none absolute -inset-6 rounded-full bg-[#EAF2FF]/70 blur-[55px]" />

            <div className="relative aspect-[16/9] overflow-hidden rounded-[18px] bg-[#EEF3F8] shadow-[0_24px_70px_rgba(20,50,100,0.12)] sm:rounded-[24px]">
              <img
                src={aboutImage}
                alt={t("intro.imageAlt")}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
                decoding="async"
                draggable="false"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10203A]/15 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-[clamp(48px,6vw,82px)] overflow-hidden rounded-[18px] border border-[#DDE6F2] bg-[#FBFCFF] shadow-[0_18px_55px_rgba(20,50,100,0.05)]">
            <div className="grid sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat, index) => (
                <div
                    key={stat.key}
                    className={[
                    "group flex min-h-[120px] items-center gap-4 border-[#E2E8F1] px-5 py-6 sm:px-7",

                    index === 0
                        ? "border-b sm:border-r xl:border-b-0"
                        : "",

                    index === 1
                        ? "border-b xl:border-b-0 xl:border-r"
                        : "",

                    index === 2
                        ? "border-b sm:border-b-0 sm:border-r"
                        : "",
                    ].join(" ")}
                >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] bg-[#EDF3FF] text-[#2A66EA] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#2A66EA] group-hover:text-white group-hover:shadow-[0_10px_24px_rgba(42,102,234,0.25)]">
                    <span className="h-6 w-6">
                        {stat.icon}
                    </span>
                    </span>

                    <div>
                    <p className="text-[18px] font-bold leading-none tracking-[-0.035em] text-[#121722] sm:text-[20px]">
                        {t(`intro.stats.${stat.key}.value`)}
                    </p>

                    <p className="mt-2 max-w-[170px] text-[10px] font-medium leading-[1.5] text-[#7A8494] sm:text-[11px]">
                        {t(`intro.stats.${stat.key}.label`)}
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