import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Coaches from "./Coaches.jsx";
import Instagram from "./Instagram.jsx";

import TrainingSchedule from "../../components/sections/TrainingSchedule.jsx";

import Faq from "../../components/sections/Faq.jsx";

import ContactForm from "../../components/common/ContactForm.jsx";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Coaches />
      <TrainingSchedule />
      <Instagram />
      <Faq />
      <ContactForm />
    </>
  );
}