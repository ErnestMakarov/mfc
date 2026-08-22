import PageHero from "../../components/common/PageHero.jsx";
import AboutIntro from "./AboutIntro.jsx";
import AboutHistory from "./AboutHistory.jsx";
import Faq from "../../components/sections/Faq.jsx";
import ContactForm from "../../components/common/ContactForm.jsx";

export default function About() {
  return (
    <>
      <PageHero namespace="about" />
      <AboutIntro />
      <AboutHistory />
      <Faq />
      <ContactForm />
    </>
  );
}