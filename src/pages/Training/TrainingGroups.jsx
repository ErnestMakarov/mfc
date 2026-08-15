import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const groups = [
  {
    key: "makBaby",
    number: "01",
    level: "baby",
  },
  {
    key: "mak6",
    number: "02",
    level: "beginner",
  },
  {
    key: "mak5",
    number: "03",
    level: "beginner",
  },
  {
    key: "mak4",
    number: "04",
    level: "development",
  },
  {
    key: "mak3",
    number: "05",
    level: "development",
  },
  {
    key: "mak2",
    number: "06",
    level: "sport",
  },
  {
    key: "mak1",
    number: "07",
    level: "professional",
  },
];

function PoolIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 9C6 7.7 8 7.7 10 9C12 10.3 14 10.3 16 9C18 7.7 20 7.7 22 9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M2 14C4 12.7 6 12.7 8 14C10 15.3 12 15.3 14 14C16 12.7 18 12.7 20 14C21 14.7 22 14.8 23 14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M4 19C6 17.7 8 17.7 10 19C12 20.3 14 20.3 16 19C18 17.7 20 17.7 22 19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8 8V4H14V8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 7V12L15.5 14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle
        cx="12"
        cy="8"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5 20V18C5 14.7 7.7 12 11 12H13C16.3 12 19 14.7 19 18V20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

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

export default function TrainingGroups() {
  const { t } = useTranslation("training");

  return (
    <section className="overflow-hidden bg-white py-[clamp(64px,7vw,120px)]">
      <div className="page-container">
        <div className="max-w-[780px]">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2A66EA] sm:text-[12px]">
            {t("groups.eyebrow")}
          </p>

          <h2 className="mt-4 text-[clamp(32px,3.2vw,56px)] font-semibold leading-[1.06] tracking-[-0.045em] text-[#121722]">
            {t("groups.title")}
          </h2>

          <p className="mt-5 max-w-[680px] text-[13px] leading-[1.75] text-[#727D8D] sm:text-[15px]">
            {t("groups.description")}
          </p>
        </div>

        <div className="mt-[clamp(42px,5vw,72px)] grid gap-5 lg:grid-cols-2 xl:gap-6">
          {groups.map((group) => {
            const schedule = t(
              `groups.items.${group.key}.schedule`,
              {
                returnObjects: true,
              },
            );

            return (
              <article
                key={group.key}
                className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-[22px] border border-[#DFE7F1] bg-[#FCFDFF] p-5 shadow-[0_18px_55px_rgba(20,50,100,0.045)] transition-all duration-500 hover:-translate-y-1 hover:border-[#BCD2F7] hover:shadow-[0_26px_70px_rgba(20,50,100,0.09)] sm:p-7 lg:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#2A66EA] transition-transform duration-500 group-hover:scale-x-100" />

                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#EDF3FF] text-[#2A66EA] transition-all duration-300 group-hover:bg-[#2A66EA] group-hover:text-white">
                      <span className="h-6 w-6">
                        <PoolIcon />
                      </span>
                    </span>

                    <div>
                      <h3 className="text-[23px] font-semibold leading-none tracking-[-0.04em] text-[#121722] sm:text-[27px]">
                        {t(`groups.items.${group.key}.name`)}
                      </h3>

                      <p className="mt-3 text-[11px] font-bold leading-[1.5] text-[#2A66EA] sm:text-[12px]">
                        {t(`groups.items.${group.key}.audience`)}
                      </p>
                    </div>
                  </div>

                  <span className="text-[12px] font-extrabold tracking-[0.08em] text-[#C6D7F3]">
                    {group.number}
                  </span>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-[13px] border border-[#E4EAF2] bg-white p-4">
                    <span className="h-5 w-5 shrink-0 text-[#2A66EA]">
                      <AgeIcon />
                    </span>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.06em] text-[#929CAC]">
                        {t("groups.labels.age")}
                      </p>

                      <p className="mt-1 text-[11px] font-bold leading-[1.4] text-[#121722] sm:text-[12px]">
                        {t(`groups.items.${group.key}.age`)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-[13px] border border-[#E4EAF2] bg-white p-4">
                    <span className="h-5 w-5 shrink-0 text-[#2A66EA]">
                      <PoolIcon />
                    </span>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.06em] text-[#929CAC]">
                        {t("groups.labels.pool")}
                      </p>

                      <p className="mt-1 text-[11px] font-bold leading-[1.4] text-[#121722] sm:text-[12px]">
                        {t(`groups.items.${group.key}.pool`)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-[14px] bg-[#F1F6FF] p-4">
                  <div className="flex items-center gap-2 text-[#2A66EA]">
                    <span className="h-5 w-5">
                      <ClockIcon />
                    </span>

                    <p className="text-[9px] font-extrabold uppercase tracking-[0.06em]">
                      {t("groups.labels.schedule")}
                    </p>
                  </div>

                  {Array.isArray(schedule) && (
                    <div className="mt-3 space-y-1.5">
                      {schedule.map((row) => (
                        <p
                          key={row}
                          className="text-[11px] font-semibold leading-[1.5] text-[#455164] sm:text-[12px]"
                        >
                          {row}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <p className="mt-5 text-[12px] leading-[1.75] text-[#6E798A] sm:text-[13px]">
                  {t(`groups.items.${group.key}.description`)}
                </p>
              </article>
            );
          })}

          <article className="relative flex min-h-[430px] flex-col justify-between overflow-hidden rounded-[22px] bg-[#EDF4FF] p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border-[52px] border-white/45" />

            <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#2A66EA]/10 blur-[10px]" />

            <div className="relative">
              <span className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-white text-[#2A66EA] shadow-[0_12px_30px_rgba(42,102,234,0.14)]">
                <span className="h-7 w-7">
                  <AgeIcon />
                </span>
              </span>

              <h3 className="mt-7 max-w-[420px] text-[clamp(27px,2.5vw,40px)] font-semibold leading-[1.08] tracking-[-0.045em] text-[#121722]">
                {t("groups.contact.title")}
              </h3>

              <p className="mt-5 max-w-[440px] text-[13px] leading-[1.75] text-[#687487]">
                {t("groups.contact.description")}
              </p>
            </div>

            <Link
              to="/contacts"
              className="group/button relative mt-9 flex h-[54px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#2A66EA] px-7 text-[10px] font-extrabold uppercase tracking-[0.04em] !text-white shadow-[0_12px_30px_rgba(42,102,234,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2059D5] sm:w-fit"
            >
              {t("groups.contact.button")}

              <span className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}