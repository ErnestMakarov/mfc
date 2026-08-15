import PageHero from "../../components/common/PageHero.jsx";
import CoachesList from "./CoachesList.jsx";

export default function Coaches() {
  return (
    <>
      <PageHero namespace="coaches" />
      <CoachesList />
    </>
  );
}