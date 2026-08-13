import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import faqImage from "../../assets/images/faq-image.png";

const faqKeys = [
  "startingAge",
  "swimmingSkills",
  "equipment",
  "experience",
  "trialTraining",
];

export default function Faq() {
  const { t } = useTranslation("common");
  const [activeQuestion, setActiveQuestion] = useState(null);

  function toggleQuestion(index) {
    setActiveQuestion((current) =>
      current === index ? null : index,
    );
  }

  return (
    <section className="overflow-hidden bg-white py-[clamp(72px,8vw,140px)]">
      <div className="page-container">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2A66EA] sm:text-[12px]">
            {t("faq.eyebrow")}
          </p>

          <h2 className="mt-4 text-[clamp(34px,3.2vw,58px)] font-semibold leading-[1.05] tracking-[-0.045em] text-[#121722]">
            {t("faq.title")}
          </h2>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] xl:gap-16">
          <div className="overflow-hidden rounded-[16px] border border-[#E2E7EF] bg-white">
            {faqKeys.map((faqKey, index) => {
              const isOpen = activeQuestion === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <div
                  key={faqKey}
                  className={
                    index !== faqKeys.length - 1
                      ? "border-b border-[#E7EBF1]"
                      : ""
                  }
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="group flex w-full items-center justify-between gap-5 px-5 py-[18px] text-left transition-colors duration-300 hover:bg-[#F8FAFD] sm:px-7 sm:py-5"
                  >
                    <span
                      className={[
                        "text-[13px] font-semibold leading-[1.5]",
                        "tracking-[-0.015em] transition-colors duration-300",
                        "sm:text-[15px]",
                        isOpen
                          ? "text-[#2A66EA]"
                          : "text-[#4D5768] group-hover:text-[#121722]",
                      ].join(" ")}
                    >
                      {t(`faq.items.${faqKey}.question`)}
                    </span>

                    <span
                      className={[
                        "relative flex h-9 w-9 shrink-0 items-center",
                        "justify-center rounded-full border",
                        "transition-all duration-300",
                        isOpen
                          ? "rotate-45 border-[#2A66EA] bg-[#2A66EA] text-white"
                          : "border-[#DFE5EE] bg-white text-[#536071] group-hover:border-[#2A66EA] group-hover:text-[#2A66EA]",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      <span className="absolute h-px w-3.5 bg-current" />
                      <span className="absolute h-3.5 w-px bg-current" />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={[
                      "grid transition-[grid-template-rows,opacity]",
                      "duration-400 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 pr-16 sm:px-7 sm:pb-7 sm:pr-20">
                        {faqKey === "trialTraining" ? (
                          <p className="max-w-[720px] text-[12px] leading-[1.75] text-[#727D8D] sm:text-[14px]">
                            {t(
                              "faq.items.trialTraining.answerBefore",
                            )}{" "}
                            <Link
                              to="/contacts"
                              className="font-bold text-[#2A66EA] underline decoration-[#2A66EA]/30 underline-offset-4 transition-colors hover:text-[#2059D5] hover:decoration-[#2059D5]"
                            >
                              {t(
                                "faq.items.trialTraining.contactLink",
                              )}
                            </Link>
                            {t(
                              "faq.items.trialTraining.answerAfter",
                            )}
                          </p>
                        ) : (
                          <p className="max-w-[720px] text-[12px] leading-[1.75] text-[#727D8D] sm:text-[14px]">
                            {t(`faq.items.${faqKey}.answer`)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative mx-auto w-full max-w-[680px] lg:max-w-none">
            <span
              className="pointer-events-none absolute -right-[2%] -top-[22%] z-0 hidden text-[clamp(230px,25vw,390px)] font-semibold leading-none tracking-[-0.08em] text-[#E5EDFF] lg:block"
              aria-hidden="true"
            >
              ?
            </span>

            <div className="group relative z-10 aspect-[16/10] overflow-hidden rounded-[18px] bg-[#EEF3F8] shadow-[0_20px_60px_rgba(20,40,80,0.08)] sm:rounded-[22px]">
              <img
                src={faqImage}
                alt={t("faq.imageAlt")}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                loading="lazy"
                decoding="async"
                draggable="false"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10203A]/15 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}