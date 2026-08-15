import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation("privacy");

  const sections = t("sections", {
    returnObjects: true,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="min-h-screen bg-white pb-[clamp(72px,8vw,140px)] pt-[clamp(110px,10vw,170px)]">
      <div className="page-container">
        <div className="mx-auto max-w-[1120px]">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.05em] text-[#2A66EA] transition-colors hover:text-[#174FC9] sm:text-[12px]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            {t("back")}
          </Link>

          <header className="mt-8 border-b border-[#E3E8F0] pb-[clamp(32px,5vw,64px)]">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2A66EA] sm:text-[12px]">
              {t("eyebrow")}
            </p>

            <h1 className="mt-4 max-w-[900px] text-[clamp(38px,5vw,76px)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#121722]">
              {t("title")}
            </h1>

            <p className="mt-5 text-[12px] font-medium text-[#8892A2] sm:text-[14px]">
              {t("updated")}
            </p>

            <p className="mt-8 max-w-[900px] text-[14px] leading-[1.8] text-[#657083] sm:text-[16px]">
              {t("introduction")}
            </p>
          </header>

          <div className="mt-[clamp(40px,6vw,80px)] grid gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-[120px] rounded-[16px] border border-[#E3E8F0] bg-[#F8FAFD] p-5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#2A66EA]">
                  {t("contents")}
                </p>

                <nav className="mt-4 flex flex-col gap-1">
                  {sections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="rounded-[8px] px-3 py-2.5 text-[12px] font-semibold leading-[1.4] text-[#5E697A] transition-colors duration-300 hover:bg-white hover:text-[#2A66EA]"
                    >
                      {index + 1}. {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="min-w-0">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={[
                    "scroll-mt-[120px] py-10 first:pt-0",
                    index !== sections.length - 1
                      ? "border-b border-[#E3E8F0]"
                      : "",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDF3FF] text-[11px] font-extrabold text-[#2A66EA]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-[clamp(22px,2.3vw,34px)] font-semibold leading-[1.15] tracking-[-0.035em] text-[#121722]">
                        {section.title}
                      </h2>

                      {section.paragraphs?.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="mt-5 text-[13px] leading-[1.8] text-[#667183] sm:text-[15px]"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.items?.length > 0 && (
                        <ul className="mt-6 space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3 text-[13px] leading-[1.7] text-[#596577] sm:text-[15px]"
                            >
                              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2A66EA]" />

                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.id === "emailjs" && (
                        <a
                          href="https://www.emailjs.com/legal/privacy-policy/"
                          target="_blank"
                          rel="noreferrer"
                          className="group mt-6 inline-flex items-center gap-2 break-all text-[12px] font-bold text-[#2A66EA] transition-colors hover:text-[#174FC9] sm:text-[13px]"
                        >
                          EmailJS Privacy Policy

                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            ↗
                          </span>
                        </a>
                      )}

                      {section.id === "rights" && (
                        <div className="mt-7 rounded-[14px] border border-[#DCE5F5] bg-[#F5F8FF] p-5 sm:p-6">
                          <p className="text-[13px] leading-[1.7] text-[#586577] sm:text-[14px]">
                            {t("contactBefore")}{" "}
                            <a
                              href="mailto:email.finswim@gmail.com"
                              className="font-bold text-[#2A66EA] hover:underline"
                            >
                              email.finswim@gmail.com
                            </a>
                          </p>

                          <a
                            href="https://www.aki.ee/"
                            target="_blank"
                            rel="noreferrer"
                            className="group mt-4 inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.04em] text-[#2A66EA]"
                          >
                            {t("inspection")}

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                              ↗
                            </span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}