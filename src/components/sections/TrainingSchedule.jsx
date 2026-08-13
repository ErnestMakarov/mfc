import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import scheduleImage from "../../assets/images/training-schedule-image.png";

const dayKeys = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const schedule = {
  monday: [
    {
      time: "18:00–19:00",
      group: "MAK 5",
      pool: "small",
    },
    {
      time: "19:00–20:00",
      group: "MAK 2",
      pool: "large",
    },
    {
      time: "20:00–21:30",
      group: "MAK 1",
      pool: "large",
    },
  ],

  tuesday: [
    {
      time: "16:30–17:30",
      group: "MAK 3",
      pool: "large",
    },
    {
      time: "17:30–18:15",
      group: "MAK 6",
      pool: "small",
    },
    {
      time: "17:30–18:30",
      group: "MAK 4",
      pool: "large",
    },
    {
      time: "18:30–20:00",
      group: "MAK 1",
      pool: "large",
    },
  ],

  wednesday: [
    {
      time: "18:00–19:00",
      group: "MAK 5",
      pool: "small",
    },
    {
      time: "19:00–20:00",
      group: "MAK 2",
      pool: "large",
    },
    {
      time: "20:00–21:30",
      group: "MAK 1",
      pool: "large",
    },
  ],

  thursday: [
    {
      time: "16:30–17:30",
      group: "MAK 3",
      pool: "large",
    },
    {
      time: "17:30–18:15",
      group: "MAK 6",
      pool: "small",
    },
    {
      time: "17:30–18:30",
      group: "MAK 4",
      pool: "large",
    },
    {
      time: "18:30–20:00",
      group: "MAK 1",
      pool: "large",
    },
  ],

  friday: [
    {
      time: "18:00–19:00",
      group: "MAK 5",
      pool: "small",
    },
    {
      time: "19:00–20:00",
      group: "MAK 2",
      pool: "large",
    },
    {
      time: "19:00–20:30",
      group: "MAK 1",
      pool: "large",
    },
  ],

  saturday: [
    {
      time: "13:00–14:00",
      group: "MAK 3",
      pool: "large",
    },
    {
      time: "14:00–15:00",
      group: "MAK 4",
      pool: "large",
    },
    {
      time: null,
      group: "MAK Baby",
      pool: "confirm",
    },
  ],

  sunday: [],
};

function getInitialDay() {
  const dayIndex = new Date().getDay();

  const daysByIndex = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const currentDay = daysByIndex[dayIndex];

  return currentDay === "sunday" ? "monday" : currentDay;
}

export default function TrainingSchedule() {
  const { t } = useTranslation("common");
  const [activeDay, setActiveDay] = useState(getInitialDay);

  const activeTrainings = useMemo(
    () => schedule[activeDay] ?? [],
    [activeDay],
  );

  return (
    <section className="overflow-hidden bg-white py-[clamp(72px,8vw,140px)]">
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[330px_minmax(0,1fr)] xl:gap-16">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2A66EA] sm:text-[12px]">
              {t("schedule.eyebrow")}
            </p>

            <h2 className="mt-4 max-w-[320px] text-[clamp(34px,3vw,54px)] font-semibold leading-[1.05] tracking-[-0.045em] text-[#121722]">
              {t("schedule.title")}
            </h2>

            <p className="mt-4 max-w-[290px] text-[13px] leading-[1.65] text-[#7A8494] sm:text-[14px]">
              {t("schedule.description")}
            </p>

            <div className="relative mt-8 hidden aspect-[4/5] max-w-[220px] overflow-hidden rounded-[18px] bg-[#EEF4FD] lg:block">
              <img
                src={scheduleImage}
                alt={t("schedule.imageAlt")}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.035]"
                loading="lazy"
                decoding="async"
                draggable="false"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10274D]/15 via-transparent to-transparent" />
            </div>
          </div>

          <div className="min-w-0">
            <div className="-mx-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-10 sm:px-10 lg:mx-0 lg:px-0">
              <div
                className="flex min-w-max gap-2"
                role="tablist"
                aria-label={t("schedule.chooseDay")}
              >
                {dayKeys.map((dayKey) => {
                  const isActive = activeDay === dayKey;

                  return (
                    <button
                      key={dayKey}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveDay(dayKey)}
                      className={[
                        "flex h-11 min-w-[52px] items-center justify-center",
                        "rounded-full border px-4",
                        "text-[11px] font-bold uppercase",
                        "transition-all duration-300 sm:min-w-[58px]",
                        isActive
                          ? "border-[#2A66EA] bg-[#2A66EA] text-white shadow-[0_8px_22px_rgba(42,102,234,0.2)]"
                          : "border-[#E1E6EE] bg-white text-[#596274] hover:border-[#2A66EA] hover:text-[#2A66EA]",
                      ].join(" ")}
                    >
                      <span className="sm:hidden">
                        {t(`schedule.daysShort.${dayKey}`)}
                      </span>

                      <span className="hidden sm:inline">
                        {t(`schedule.days.${dayKey}`)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-[16px] border border-[#E2E7EF] bg-white shadow-[0_18px_50px_rgba(20,40,80,0.055)] sm:mt-6">
              <div className="flex items-center justify-between border-b border-[#E7EBF1] bg-[#F7F9FC] px-5 py-4 sm:px-7">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#8993A3]">
                    {t("schedule.selectedDay")}
                  </p>

                  <h3 className="mt-1 text-[18px] font-bold tracking-[-0.025em] text-[#121722] sm:text-[20px]">
                    {t(`schedule.days.${activeDay}`)}
                  </h3>
                </div>

                <span className="rounded-full bg-[#EAF1FF] px-3 py-1.5 text-[10px] font-bold text-[#2A66EA]">
                  {activeTrainings.length}{" "}
                  {t("schedule.trainingCount", {
                    count: activeTrainings.length,
                  })}
                </span>
              </div>

              {activeTrainings.length > 0 ? (
                <div>
                  <div className="hidden grid-cols-[180px_minmax(150px,1fr)_220px] border-b border-[#E7EBF1] px-7 py-3 text-[10px] font-bold uppercase tracking-[0.055em] text-[#929BAA] md:grid">
                    <span>{t("schedule.columns.time")}</span>
                    <span>{t("schedule.columns.group")}</span>
                    <span>{t("schedule.columns.pool")}</span>
                  </div>

                  <div>
                    {activeTrainings.map((training, index) => (
                      <div
                        key={`${activeDay}-${training.group}-${index}`}
                        className={[
                          "group grid gap-4 px-5 py-5",
                          "transition-colors duration-300",
                          "hover:bg-[#F8FAFD]",
                          "md:grid-cols-[180px_minmax(150px,1fr)_220px]",
                          "md:items-center md:px-7 md:py-[22px]",
                          index !== activeTrainings.length - 1
                            ? "border-b border-[#E7EBF1]"
                            : "",
                        ].join(" ")}
                      >
                        <div className="flex items-center justify-between gap-4 md:block">
                          <span className="text-[10px] font-bold uppercase tracking-[0.05em] text-[#929BAA] md:hidden">
                            {t("schedule.columns.time")}
                          </span>

                          <span className="text-[15px] font-bold tracking-[-0.02em] text-[#121722]">
                            {training.time ??
                              t("schedule.confirmTime")}
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-4 md:block">
                          <span className="text-[10px] font-bold uppercase tracking-[0.05em] text-[#929BAA] md:hidden">
                            {t("schedule.columns.group")}
                          </span>

                          <span className="text-[14px] font-bold text-[#121722]">
                            {training.group}
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-4 md:block">
                          <span className="text-[10px] font-bold uppercase tracking-[0.05em] text-[#929BAA] md:hidden">
                            {t("schedule.columns.pool")}
                          </span>

                          <span
                            className={[
                              "inline-flex w-fit items-center rounded-full",
                              "px-3 py-1.5 text-[10px] font-bold",
                              training.pool === "confirm"
                                ? "bg-[#FFF4DD] text-[#A76B00]"
                                : training.pool === "small"
                                  ? "bg-[#ECF7FF] text-[#1670AE]"
                                  : "bg-[#EAF1FF] text-[#2A66EA]",
                            ].join(" ")}
                          >
                            {training.pool === "confirm"
                              ? t("schedule.confirmCoach")
                              : t(
                                  `schedule.pools.${training.pool}`,
                                )}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex min-h-[260px] flex-col items-center justify-center px-6 py-12 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF4FF] text-[22px] text-[#2A66EA]">
                    —
                  </span>

                  <h3 className="mt-5 text-[18px] font-bold text-[#121722]">
                    {t("schedule.noTrainingTitle")}
                  </h3>

                  <p className="mt-2 max-w-[350px] text-[13px] leading-relaxed text-[#7A8494]">
                    {t("schedule.noTrainingDescription")}
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-4 border-t border-[#E7EBF1] bg-[#FAFBFD] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <p className="max-w-[520px] text-[10px] leading-[1.55] text-[#8A94A4]">
                  {t("schedule.notice")}
                </p>

                <a
                  href="/documents/training-schedule.pdf"
                  download
                  className="group flex h-11 shrink-0 items-center justify-center gap-2 rounded-[9px] border border-[#C9D7F2] bg-white px-5 text-[10px] font-extrabold uppercase tracking-[0.04em] text-[#2A66EA] transition-all duration-300 hover:border-[#2A66EA] hover:bg-[#2A66EA] hover:!text-white"
                >
                  {t("schedule.download")}

                  <span className="text-[16px] leading-none transition-transform duration-300 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2A66EA]" />

                <span className="text-[11px] font-medium text-[#6F7989]">
                  {t("schedule.pools.large")}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#58B8F2]" />

                <span className="text-[11px] font-medium text-[#6F7989]">
                  {t("schedule.pools.small")}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E9A928]" />

                <span className="text-[11px] font-medium text-[#6F7989]">
                  {t("schedule.confirmCoach")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}