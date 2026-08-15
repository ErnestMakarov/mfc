import PageHero from "../../components/common/PageHero.jsx";
import NewsFeed from "./NewsFeed.jsx";

export default function News() {
  return (
    <>
      <PageHero namespace="news" />
      <NewsFeed />
    </>
  );
}