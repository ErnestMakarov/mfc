import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import ScrollToTop from "../components/common/ScrollToTop.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}