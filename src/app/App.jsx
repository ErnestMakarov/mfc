import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import ScrollToTop from "../components/common/ScrollToTop.jsx";
import { MerchCartProvider } from "../context/MerchCartContext.jsx";

export default function App() {
  return (
    <MerchCartProvider>
      <ScrollToTop />
      <Header />
      <main><Outlet /></main>
      <Footer />
    </MerchCartProvider>
  );
}