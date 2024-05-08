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

type Props = {
  params: { lang: string };
};

export default async function Home({ params }: Props) {

  const mainPage = await getMainPageByLang(params.lang);

  return (
    <main>
      <Hero
        mainImage={mainPage.mainImage}
        pretitle={mainPage.pretitle}
        title={mainPage.title}
        textButton={mainPage.textButton}
      />
      <Description
        description={mainPage.description}
        descriptionBig={mainPage.descriptionBig}
      />
      <Requests
        requestsTitle={mainPage.requestsTitle}
        requestsDescription={mainPage.requestsDescription}
        requestsCards={mainPage.requestsCards}
        requestsText={mainPage.requestsText}
        requestsLinks={mainPage.requestsLinks}
        requestsImage={mainPage.requestsImage}
      />
      <Offer
        offerTitle={mainPage.offerTitle}
        offerDescription={mainPage.offerDescription}
        offerLinks={mainPage.offerLinks}
        offerLinksShort={mainPage.offerLinksShort}
      />
      <Edu
        educationTitle={mainPage.educationTitle}
        educationBullets={mainPage.educationBullets}
        degreeTitle={mainPage.degreeTitle}
        degreeBullets={mainPage.degreeBullets}
        degreeText={mainPage.degreeText}
        diplomas={mainPage.diplomas}
      />
      <VideoBlock
        videoTitle={mainPage.videoTitle}
        videoLink={mainPage.videoLink}
        posterImage={mainPage.posterImage}
      />
      <Methods
        methodsTitle={mainPage.methodsTitle}
        methodsAccordion={mainPage.methodsAccordion}
      />
      <TherapyStages
        therapyStagesTitle={mainPage.therapyStagesTitle}
        therapyStagesImage={mainPage.therapyStagesImage}
        therapyStages={mainPage.therapyStages}
      />
      <Consultations
        offerLinks={mainPage.offerLinks}
        offerLinksShort={mainPage.offerLinksShort}
        consultationsTitle={mainPage.consultationsTitle}
        consultations={mainPage.consultations}
      />
      <Games
        offerLinks={mainPage.offerLinks}
        offerLinksShort={mainPage.offerLinksShort}
        gamesTitle={mainPage.gamesTitle}
        games={mainPage.games}
      />
    </main>
  );
}
