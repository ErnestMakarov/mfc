import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";

const Merch = lazy(() => import("./Merch.jsx"));
const MerchProduct = lazy(() => import("./MerchProduct.jsx"));

function Loading() {
  const { t } = useTranslation("merch");
  return <div className="page-container flex min-h-[50vh] items-center justify-center" role="status" aria-label={t("loading")}><span className="h-8 w-8 animate-spin rounded-full border-2 border-[#E6EAF1] border-t-[#2A66EA]" /></div>;
}

export function MerchRoute() {
  return <Suspense fallback={<Loading />}><Merch /></Suspense>;
}

export function MerchProductRoute() {
  return <Suspense fallback={<Loading />}><MerchProduct /></Suspense>;
}
