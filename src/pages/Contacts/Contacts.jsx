import PageHero from "../../components/common/PageHero.jsx";

import Faq from "../../components/sections/Faq.jsx";

import ContactForm from "../../components/common/ContactForm.jsx";

export default function Contacts() {
  return (
    <>
      <PageHero namespace="contacts" />
      <Faq />
      <ContactForm />
    </>
  );
}