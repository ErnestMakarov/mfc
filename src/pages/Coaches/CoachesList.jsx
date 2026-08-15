import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import coach1 from "../../assets/images/coaches/coach1.png";
import coach2 from "../../assets/images/coaches/coach2.png";
import coach3 from "../../assets/images/coaches/coach3.png";
import coach4 from "../../assets/images/coaches/coach4.png";
import coach5 from "../../assets/images/coaches/coach5.png";
import coach6 from "../../assets/images/coaches/coach6.png";

const coaches = [
  {
    key: "maksim",
    image: coach1,
    instagram: [
      {
        username: "maksim.merkuri",
        url: "https://www.instagram.com/maksim.merkuri/",
      },
    ],
  },
  {
    key: "jelena",
    image: coach2,
    instagram: [
      {
        username: "jelenasmirnova",
        url: "https://www.instagram.com/jelenasmirnova/",
      },
    ],
  },
  {
    key: "assol",
    image: coach3,
    instagram: [
      {
        username: "a_rostovtseva_",
        url: "https://www.instagram.com/a_rostovtseva_/",
      },
    ],
  },
  {
    key: "anastasija",
    image: coach4,
    instagram: [
      {
        username: "radchenko5679",
        url: "https://www.instagram.com/radchenko5679/",
      },
    ],
  },
  {
    key: "diana",
    image: coach5,
    instagram: [
      {
        username: "di.solovjova",
        url: "https://www.instagram.com/di.solovjova/",
      },
      {
        username: "lasteujumine",
        url: "https://www.instagram.com/lasteujumine/",
      },
    ],
  },
  {
    key: "maria",
    image: coach6,
    instagram: [
      {
        username: "maruuusjaa",
        url: "https://www.instagram.com/maruuusjaa/",
      },
    ],
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 10.5L8 14.5L16 6"
        stroke="currentColor"
        strokeWidth="1.8"
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

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

export default function CoachesList() {
  const { t } = useTranslation("coaches");

  return (
    <section className="overflow-hidden bg-white py-[clamp(64px,7vw,120px)]">
      <div className="page-container">
        <div className="max-w-[760px]">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2A66EA] sm:text-[12px]">
            {t("team.eyebrow")}
          </p>

          <h2 className="mt-4 text-[clamp(32px,3.2vw,56px)] font-semibold leading-[1.06] tracking-[-0.045em] text-[#121722]">
            {t("team.title")}
          </h2>

          <p className="mt-5 max-w-[650px] text-[13px] leading-[1.75] text-[#727D8D] sm:text-[15px]">
            {t("team.description")}
          </p>
        </div>

        <div className="mt-[clamp(42px,5vw,72px)] grid gap-5 lg:grid-cols-2 xl:gap-6">
          {coaches.map((coach, index) => {
            const specialties = t(
              `team.coaches.${coach.key}.specialties`,
              {
                returnObjects: true,
              },
            );

            const facts = t(
              `team.coaches.${coach.key}.facts`,
              {
                returnObjects: true,
              },
            );

            return (
              <article
                key={coach.key}
                className="group grid min-w-0 overflow-hidden rounded-[20px] border border-[#E0E7F0] bg-white shadow-[0_18px_55px_rgba(20,50,100,0.055)] transition-all duration-500 hover:-translate-y-1 hover:border-[#C7D8F5] hover:shadow-[0_26px_70px_rgba(20,50,100,0.1)] sm:grid-cols-[42%_58%]"
              >
                <div className="relative min-h-[360px] overflow-hidden bg-gradient-to-b from-[#F2F7FF] to-[#E8F1FD] sm:min-h-[520px]">
                  <span className="absolute left-4 top-4 z-10 flex h-8 min-w-8 items-center justify-center rounded-full border border-white/80 bg-white/75 px-2 text-[10px] font-bold text-[#2A66EA] shadow-sm backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="pointer-events-none absolute bottom-[-10%] left-[10%] h-[55%] w-[80%] rounded-full bg-[#2A66EA]/10 blur-[45px]" />

                  <img
                    src={coach.image}
                    alt={t(`team.coaches.${coach.key}.name`)}
                    className="relative z-[1] h-full w-full object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </div>

                <div className="flex min-w-0 flex-col p-5 sm:p-6 lg:p-7">
                  <div>
                    <h3 className="text-[20px] font-bold uppercase leading-[1.15] tracking-[-0.035em] text-[#121722] lg:text-[22px]">
                      {t(`team.coaches.${coach.key}.name`)}
                    </h3>

                    <p className="mt-3 text-[12px] font-bold leading-[1.5] text-[#2A66EA] sm:text-[13px]">
                      {t(`team.coaches.${coach.key}.role`)}
                    </p>
                  </div>

                  <p className="mt-5 text-[12px] leading-[1.7] text-[#707B8D] sm:text-[13px]">
                    {t(`team.coaches.${coach.key}.description`)}
                  </p>

                  {Array.isArray(facts) && facts.length > 0 && (
                    <ul className="mt-5 space-y-2.5">
                      {facts.map((fact) => (
                        <li
                          key={fact}
                          className="flex items-start gap-2.5 text-[11px] leading-[1.6] text-[#4F5A6B] sm:text-[12px]"
                        >
                          <span className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EDF3FF] text-[#2A66EA]">
                            <span className="h-3.5 w-3.5">
                              <CheckIcon />
                            </span>
                          </span>

                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-6">
                    {Array.isArray(specialties) &&
                      specialties.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {specialties.map((specialty) => (
                            <span
                              key={specialty}
                              className="rounded-full border border-[#DCE5F2] bg-[#FAFCFF] px-3 py-2 text-[9px] font-bold leading-none text-[#596476] transition-colors duration-300 group-hover:border-[#C9D9F5] group-hover:text-[#2A66EA] sm:text-[10px]"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      )}

                    <div className="mt-5 flex flex-wrap gap-2 border-t border-[#E7ECF3] pt-5">
                      {coach.instagram.map((account) => (
                        <a
                          key={account.username}
                          href={account.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t("team.instagram")} ${account.username}`}
                          className="group/instagram inline-flex h-10 items-center gap-2 rounded-[10px] border border-[#DCE5F2] bg-white px-3 text-[10px] font-bold text-[#596476] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2A66EA] hover:bg-[#2A66EA] hover:!text-white"
                        >
                          <span className="h-[18px] w-[18px] shrink-0">
                            <InstagramIcon />
                          </span>

                          <span>@{account.username}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-[clamp(40px,5vw,72px)] overflow-hidden rounded-[22px] bg-[#EDF4FF]">
          <div className="relative flex flex-col gap-7 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#2A66EA]/10 blur-[20px]" />

            <div className="relative flex items-start gap-4 sm:items-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-white text-[#2A66EA] shadow-[0_12px_30px_rgba(42,102,234,0.12)]">
                <span className="h-7 w-7">
                  <TeamIcon />
                </span>
              </span>

              <div>
                <h3 className="text-[22px] font-semibold leading-[1.15] tracking-[-0.035em] text-[#121722] sm:text-[26px]">
                  {t("team.contact.title")}
                </h3>

                <p className="mt-2 max-w-[650px] text-[12px] leading-[1.7] text-[#687487] sm:text-[13px]">
                  {t("team.contact.description")}
                </p>
              </div>
            </div>

            <Link
              to="/contacts"
              className="group relative flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-[10px] bg-[#2A66EA] px-7 text-[10px] font-extrabold uppercase tracking-[0.04em] !text-white shadow-[0_12px_30px_rgba(42,102,234,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2059D5] sm:h-14"
            >
              {t("team.contact.button")}

              <span className="text-[16px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        <p className="mt-8 text-center text-[12px] font-semibold tracking-[-0.01em] text-[#687487]">
          {t("team.footerText")}
        </p>
      </div>
    </section>
  );
}