import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { instagramPosts } from "../../data/instagramPosts.js";

const homePosts = instagramPosts.slice(0, 3);

import { loadInstagramEmbed } from "../../utils/loadInstagramEmbed.js";

export default function Instagram() {
  const { t } = useTranslation("home");

  useEffect(() => {
    let isMounted = true;

    loadInstagramEmbed()
      .then(() => {
        if (isMounted) {
          window.instgrm?.Embeds?.process();
        }
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="overflow-hidden bg-white pt-[clamp(44px,3.5vw,70px)] pb-[clamp(44px,3.5vw,70px)]">
      <div className="page-container">
        <div className="grid gap-10 xl:grid-cols-[330px_minmax(0,1fr)] xl:items-start xl:gap-16">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2A66EA] sm:text-[12px]">
              {t("instagramPreview.eyebrow")}
            </p>

            <h2 className="mt-4 max-w-[520px] text-[clamp(34px,3.2vw,58px)] font-semibold leading-[1.05] tracking-[-0.045em] text-[#121722]">
              {t("instagramPreview.titleFirst")}

              <span className="block text-[#2A66EA]">
                {t("instagramPreview.titleAccent")}
              </span>
            </h2>

            <p className="mt-5 max-w-[380px] text-[13px] leading-[1.7] text-[#7A8494] sm:text-[14px]">
              {t("instagramPreview.description")}
            </p>

            <Link
              to="/news"
              className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-[9px] border border-[#CAD7EF] bg-white px-6 text-[10px] font-extrabold uppercase tracking-[0.04em] text-[#2A66EA] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2A66EA] hover:bg-[#2A66EA] hover:!text-white"
            >
              <span>{t("instagramPreview.allNews")}</span>

              <span className="text-[16px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="min-w-0">
            <div className="-mr-5 sm:-mr-10 xl:mr-0">
              <div className="grid snap-x snap-mandatory auto-cols-[86%] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain pr-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:auto-cols-[48%] sm:pr-10 lg:auto-cols-[38%] xl:grid-flow-row xl:grid-cols-3 xl:gap-5 xl:overflow-visible xl:pr-0">
                {homePosts.map((post) => (
                  <article
                    key={post.id}
                    className="instagram-preview-card relative h-[430px] min-w-0 snap-start overflow-hidden rounded-[16px] border border-[#E2E7EF] bg-white shadow-[0_16px_45px_rgba(20,40,80,0.07)] sm:h-[480px] xl:h-[520px]"
                  >
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink={post.url}
                      data-instgrm-version="14"
                      style={{
                        width: "100%",
                        minWidth: "0",
                        maxWidth: "100%",
                        margin: "0",
                        padding: "0",
                        border: "0",
                        borderRadius: "0",
                        boxShadow: "none",
                        background: "#ffffff",
                      }}
                    >
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-[430px] items-center justify-center bg-[#F4F7FD] text-[11px] font-bold uppercase tracking-[0.04em] text-[#2A66EA] sm:h-[480px] xl:h-[520px]"
                      >
                        {t("instagramPreview.loading")}
                      </a>
                    </blockquote>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-b from-transparent to-white" />
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 rounded-[16px] border border-[#E1E7F0] bg-white p-5 shadow-[0_16px_45px_rgba(20,40,80,0.04)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#EDF3FF] text-[21px] text-[#2A66EA]">
                  ◎
                </span>

                <div>
                  <h3 className="text-[14px] font-bold tracking-[-0.02em] text-[#121722] sm:text-[16px]">
                    {t("instagramPreview.bannerTitle")}
                  </h3>

                  <p className="mt-1 max-w-[560px] text-[11px] leading-relaxed text-[#7A8494] sm:text-[12px]">
                    {t("instagramPreview.bannerDescription")}
                  </p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/mfc_est/"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 shrink-0 items-center justify-center rounded-[9px] bg-[#2A66EA] px-7 text-[10px] font-extrabold uppercase tracking-[0.04em] !text-white shadow-[0_9px_25px_rgba(42,102,234,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2059D5]"
              >
                {t("instagramPreview.instagramButton")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}