import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import coach1 from "../../assets/images/coaches/coach1.png";
import coach2 from "../../assets/images/coaches/coach2.png";
import coach3 from "../../assets/images/coaches/coach3.png";
import coach4 from "../../assets/images/coaches/coach4.png";
import coach5 from "../../assets/images/coaches/coach5.png";
import coach6 from "../../assets/images/coaches/coach6.png";

import border from "../../assets/images/BORDER.png";

const coaches = [
  {
    name: "Maksim Merkurii",
    image: coach1,
    roleKeys: ["mak1"],
  },
  {
    name: "Jelena Smirnova",
    image: coach2,
    roleKeys: ["mak2", "mak3"],
  },
  {
    name: "Assol Rostovtseva",
    image: coach3,
    roleKeys: ["mak4", "makBeebi"],
  },
  {
    name: "Anastasija Radtsenko",
    image: coach4,
    roleKeys: ["mak5"],
  },
  {
    name: "Diana Solovjova",
    image: coach5,
    roleKeys: ["mak6"],
  },
  {
    name: "Maria Zavjalova",
    image: coach6,
    roleKeys: ["adultSwimming"],
  },
];

export default function Coaches() {
  const { t } = useTranslation("home");

  return (
    <section className="relative overflow-hidden bg-white pt-[clamp(72px,8vw,145px)]">
      <div className="page-container">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2A66EA] sm:text-[12px]">
              {t("coachesPreview.eyebrow")}
            </p>

            <h2 className="mt-4 text-[clamp(34px,3.2vw,58px)] font-semibold leading-[1.05] tracking-[-0.045em] text-[#121722]">
              {t("coachesPreview.title")}
            </h2>

            <p className="mt-3 text-[13px] leading-relaxed text-[#7A8494] sm:text-[15px]">
              {t("coachesPreview.description")}
            </p>
          </div>

          <Link
            to="/coaches"
            className="group hidden shrink-0 items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.04em] text-[#2A66EA] sm:flex sm:text-[12px]"
          >
            <span className="relative">
              {t("coachesPreview.button")}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#2A66EA] transition-[width] duration-300 group-hover:w-full" />
            </span>

            <span className="text-[17px] leading-none transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="-mr-5 mt-10 sm:-mr-10 xl:mr-0 xl:mt-12">
          <div className="grid snap-x snap-mandatory auto-cols-[82%] grid-flow-col gap-3 overflow-x-auto overscroll-x-contain pr-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:auto-cols-[43%] sm:gap-4 sm:pr-10 lg:auto-cols-[31%] xl:grid-flow-row xl:grid-cols-6 xl:gap-4 xl:overflow-visible xl:pr-0 min-[1600px]:gap-5">
            {coaches.map((coach, index) => (
              <article
                key={coach.name}
                className="group min-w-0 snap-start"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-gradient-to-b from-[#F2F7FF] to-[#E9F1FD] sm:rounded-[18px]">
                  <span className="absolute left-4 top-4 z-10 flex h-7 min-w-7 items-center justify-center rounded-full border border-white/70 bg-white/65 px-2 text-[9px] font-bold text-[#2A66EA] backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="pointer-events-none absolute inset-x-[15%] bottom-[-8%] h-[60%] rounded-full bg-[#2A66EA]/10 blur-[45px] transition-transform duration-700 group-hover:scale-110" />

                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="relative z-[1] h-full w-full object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </div>

                <div className="px-1 pt-5">
                  <h3 className="min-h-[2.5em] text-[15px] font-bold uppercase leading-[1.25] tracking-[-0.025em] text-[#121722] xl:text-[13px] min-[1600px]:text-[15px]">
                    {coach.name}
                  </h3>

                  <div className="mt-2 flex min-h-[42px] flex-wrap content-start gap-x-1.5 gap-y-1">
                    {coach.roleKeys.map((roleKey, roleIndex) => (
                      <span
                        key={roleKey}
                        className="text-[11px] font-semibold leading-[1.45] text-[#2A66EA] xl:text-[10px] min-[1600px]:text-[11px]"
                      >
                        {t(
                          `coachesPreview.roles.${roleKey}`,
                        )}
                        {roleIndex !==
                          coach.roleKeys.length - 1 && ","}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Link
          to="/coaches"
          className="group mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-[9px] border border-[#DCE3ED] text-[10px] font-extrabold uppercase tracking-[0.04em] text-[#2A66EA] transition-all duration-300 hover:border-[#2A66EA] hover:bg-[#2A66EA] hover:!text-white sm:hidden"
        >
          <span>{t("coachesPreview.button")}</span>

          <span className="text-[16px] leading-none transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      <div className="relative left-1/2 mt-[clamp(48px,6vw,100px)] w-screen -translate-x-1/2 overflow-hidden">
        <img
          src={border}
          alt=""
          aria-hidden="true"
          className="relative left-1/2 h-auto w-[max(100%,900px)] max-w-none -translate-x-1/2 object-contain sm:w-[max(100%,1200px)] xl:w-full"
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </div>
    </section>
  );
}