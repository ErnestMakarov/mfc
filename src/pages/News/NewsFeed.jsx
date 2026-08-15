import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { instagramPosts } from "../../data/instagramPosts.js";
import { loadInstagramEmbed } from "../../utils/loadInstagramEmbed.js";

const POSTS_PER_PAGE = 6;

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

export default function NewsFeed() {
  const { t } = useTranslation("news");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const visiblePosts = instagramPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < instagramPosts.length;

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
  }, [visibleCount]);

  function showMorePosts() {
    setVisibleCount((current) =>
      Math.min(
        current + POSTS_PER_PAGE,
        instagramPosts.length,
      ),
    );
  }

  return (
    <section className="overflow-hidden bg-white py-[clamp(64px,7vw,120px)]">
      <div className="page-container">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2A66EA] sm:text-[12px]">
              {t("feed.eyebrow")}
            </p>

            <h2 className="mt-4 text-[clamp(32px,3.2vw,56px)] font-semibold leading-[1.06] tracking-[-0.045em] text-[#121722]">
              {t("feed.title")}
            </h2>

            <p className="mt-4 max-w-[650px] text-[13px] leading-[1.75] text-[#727D8D] sm:text-[15px]">
              {t("feed.description")}
            </p>
          </div>

          <a
            href="https://www.instagram.com/mfc_est/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-[50px] w-fit shrink-0 items-center justify-center gap-2 rounded-[10px] border border-[#CAD7EF] bg-white px-5 text-[10px] font-extrabold uppercase tracking-[0.04em] text-[#2A66EA] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2A66EA] hover:bg-[#2A66EA] hover:!text-white"
          >
            <span className="h-5 w-5">
              <InstagramIcon />
            </span>

            <span>@mfc_est</span>
          </a>
        </div>

        {visiblePosts.length > 0 ? (
          <>
            <div className="mt-[clamp(40px,5vw,70px)] grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visiblePosts.map((post) => (
                <article
                  key={post.id}
                  className="instagram-feed-card relative h-[520px] min-w-0 overflow-hidden rounded-[18px] border border-[#DFE6F0] bg-white shadow-[0_18px_55px_rgba(20,50,100,0.065)] transition-all duration-500 hover:-translate-y-1 hover:border-[#C6D7F5] hover:shadow-[0_25px_70px_rgba(20,50,100,0.11)] sm:h-[570px]"
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
                      rel="noopener noreferrer"
                      className="flex h-[520px] flex-col items-center justify-center gap-4 bg-[#F4F7FD] px-6 text-center sm:h-[570px]"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#E8F0FF] text-[#2A66EA]">
                        <span className="h-7 w-7">
                          <InstagramIcon />
                        </span>
                      </span>

                      <span className="text-[11px] font-extrabold uppercase tracking-[0.04em] text-[#2A66EA]">
                        {t("feed.loading")}
                      </span>

                      <span className="text-[11px] text-[#8490A1]">
                        {t("feed.openPost")}
                      </span>
                    </a>
                  </blockquote>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-b from-transparent to-white" />
                </article>
              ))}
            </div>

            {hasMorePosts && (
              <div className="mt-10 flex flex-col items-center">
                <button
                  type="button"
                  onClick={showMorePosts}
                  className="group flex h-[52px] min-w-[210px] items-center justify-center gap-2 rounded-[10px] border border-[#BFD0ED] bg-white px-7 text-[10px] font-extrabold uppercase tracking-[0.04em] text-[#2A66EA] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2A66EA] hover:bg-[#2A66EA] hover:text-white"
                >
                  {t("feed.showMore")}

                  <span className="text-[16px] leading-none transition-transform duration-300 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </button>

                <p className="mt-3 text-[11px] text-[#8A94A3]">
                  {t("feed.remaining", {
                    count:
                      instagramPosts.length - visibleCount,
                  })}
                </p>
              </div>
            )}

            <div className="mt-[clamp(48px,6vw,82px)] overflow-hidden rounded-[20px] border border-[#DCE6F4] bg-[#EDF4FF]">
              <div className="relative flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border-[60px] border-white/40" />

                <div className="relative flex items-start gap-4 sm:items-center">
                  <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-[15px] bg-white text-[#2A66EA] shadow-[0_12px_30px_rgba(42,102,234,0.12)]">
                    <span className="h-6 w-6">
                      <InstagramIcon />
                    </span>
                  </span>

                  <div>
                    <h3 className="text-[19px] font-semibold tracking-[-0.03em] text-[#121722] sm:text-[22px]">
                      {t("feed.bannerTitle")}
                    </h3>

                    <p className="mt-2 max-w-[650px] text-[12px] leading-[1.7] text-[#687487] sm:text-[13px]">
                      {t("feed.bannerDescription")}
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/mfc_est/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex h-[52px] shrink-0 items-center justify-center rounded-[10px] bg-[#2A66EA] px-7 text-[10px] font-extrabold uppercase tracking-[0.04em] !text-white shadow-[0_12px_30px_rgba(42,102,234,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2059D5]"
                >
                  {t("feed.instagramButton")}
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-12 rounded-[18px] border border-[#E0E7F0] bg-[#F8FAFD] p-10 text-center">
            <p className="text-[14px] font-semibold text-[#687487]">
              {t("feed.empty")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}