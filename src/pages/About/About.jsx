import PageHero from "../../components/common/PageHero.jsx";
import AboutIntro from "./AboutIntro.jsx";
import AboutHistory from "./AboutHistory.jsx";
import Faq from "../../components/sections/Faq.jsx";

export default function About() {
  return (
    <>
      <PageHero namespace="about" />
      <AboutIntro />
      <AboutHistory />
      <Faq />
    </>
  );
}