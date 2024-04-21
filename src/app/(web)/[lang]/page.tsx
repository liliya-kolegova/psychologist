import { getMainPageByLang } from "@/libs/sanityQueries";
import Hero from "@/components/Hero/Hero";
import Description from "@/components/Description/Description";
import Requests from "@/components/Requests/Requests";
import Offer from "@/components/Offer/Offer";
import Edu from "@/components/Edu/Edu";

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
      />
      <Edu
        educationTitle={mainPage.educationTitle}
        educationBullets={mainPage.educationBullets}
        degreeTitle={mainPage.degreeTitle}
        degreeBullets={mainPage.degreeBullets}
        degreeText={mainPage.degreeText}
        diplomas={mainPage.diplomas}
      />
    </main>
  );
}
