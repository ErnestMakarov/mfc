import PageHero from "../../components/common/PageHero.jsx";
import TrainingGroups from "./TrainingGroups.jsx";
import TrainingSchedule from "../../components/sections/TrainingSchedule.jsx";

export default function Training() {
  return (
    <>
      <PageHero namespace="training" />
      <TrainingGroups />
      <TrainingSchedule />
    </>
  );
}