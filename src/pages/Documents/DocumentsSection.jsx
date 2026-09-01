import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const documents = [
  {
    id: "baby",
    file: "/documents/beebi-1-2.pdf",
    type: "PDF",
  },
  {
    id: "adult",
    file: "/documents/taidiskasvanud.pdf",
    type: "PDF",
  },
  {
    id: "mak1",
    file: "/documents/mak-1.pdf",
    type: "PDF",
  },
  {
    id: "mak2",
    file: "/documents/mak-2.pdf",
    type: "PDF",
  },
  {
    id: "mak35",
    file: "/documents/mak-3-5.pdf",
    type: "PDF",
  },
  {
    id: "mak6",
    file: "/documents/mak-6.pdf",
    type: "PDF",
  },
];

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <path
        d="M14 2H7.8A2.8 2.8 0 0 0 5 4.8v14.4A2.8 2.8 0 0 0 7.8 22h8.4a2.8 2.8 0 0 0 2.8-2.8V7l-5-5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v5h5M12 10v7m0 0-3-3m3 3 3-3M9 20h6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="M20 11.5a8 8 0 0 1-8.5 8 8.8 8.8 0 0 1-3.6-.9L4 20l1.4-3.6A8 8 0 1 1 20 11.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DocumentsSection() {
  const { t } = useTranslation("documents");

  return (
    <section
      id="documents"
      className="relative overflow-hidden bg-[#F8FAFF] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            {t("documents.badge")}
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {t("documents.title")}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            {t("documents.description")}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {documents.map((document) => (
            <a
              key={document.id}
              href={document.file}
              download
              className="group relative flex min-h-[150px] items-center gap-5 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_35px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)] sm:p-6"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white">
                <DownloadIcon />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-slate-900 transition group-hover:text-blue-600 sm:text-lg">
                  {t(`documents.items.${document.id}.title`)}
                </h3>

                <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500">
                  {t(`documents.items.${document.id}.description`)}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <span className="rounded-md bg-red-50 px-2 py-1 text-xs font-bold text-red-500">
                    {document.type}
                  </span>

                  <span className="text-sm font-semibold text-blue-600">
                    {t("documents.download")}
                  </span>

                  <span className="text-blue-600 transition-transform duration-300 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-5 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-violet-50 p-5 shadow-[0_12px_40px_rgba(37,99,235,0.08)] sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-4 sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
              <MessageIcon />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                {t("documents.contact.title")}
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                {t("documents.contact.description")}
              </p>
            </div>
          </div>

          <Link
            to="/contacts"
            className="group relative flex h-[52px] w-full shrink-0 items-center justify-center gap-2 rounded-[10px] bg-[#2A66EA] px-7 text-[10px] font-extrabold uppercase tracking-[0.04em] !text-white shadow-[0_12px_30px_rgba(42,102,234,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2059D5] sm:h-14 sm:w-auto"
          >
            {t("documents.contact.button")}

            <span className="text-[16px] leading-none transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}