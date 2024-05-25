import { getMainPageByLang } from "@/libs/sanityQueries";
import Hero from "@/components/Hero/Hero";
import Description from "@/components/Description/Description";
import Requests from "@/components/Requests/Requests";
import Offer from "@/components/Offer/Offer";
import Edu from "@/components/Edu/Edu";
import VideoBlock from "@/components/VideoBlock/VideoBlock";
import Methods from "@/components/Methods/Methods";
import TherapyStages from "@/components/TherapyStages/TherapyStages";
import Consultations from "@/components/Consultations/Consultations";
import Games from "@/components/Games/Games";
import Reviews from "@/components/Reviews/Reviews";
import Contacts from "@/components/Contacts/Contacts";
import BlogPostsSection from "@/components/BlogPostsSection/BlogPostsSection";
import OverlapClient from "@/components/OverlapClient/OverlapClient";
import RequestCards from "@/components/RequestCards/RequestCards";
import TestProjects from "@/components/TestProjects/TestProjects";

type Props = {
  // params: { lang: string };
};

export default async function Home() {

  // const mainPage = await getMainPageByLang(params.lang);
  // console.log(mainPage);

  // if (!mainPage) {
  //   return <div>Ошибка: Не удалось загрузить данные для языка {params.lang}</div>;
  // }

  return (
    <main></main>
  );
}
