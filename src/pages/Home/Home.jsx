import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Coaches from "./Coaches.jsx";
import TrainingSchedule from "../../components/sections/TrainingSchedule.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Coaches />
      <TrainingSchedule />
    </>
  );
}