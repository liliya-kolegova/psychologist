import { getMainPageByLang } from "@/libs/sanityQueries";
import { Metadata } from "next";
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
import BlogPostsSection from "@/components/BlogPostsSection/BlogPostsSection";
import OverlapClient from "@/components/OverlapClient/OverlapClient";
import { i18n } from "@/i18n.config";
import { Translation } from "@/types/mainPage";
import Header from "@/components/Header/Header";

type Props = {
  params: { lang: string };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getMainPageByLang(params.lang);

  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function Home({ params }: Props) {
  const mainPage = await getMainPageByLang(params.lang);

  const homePageTranslationSlugs: { [key: string]: { current: string } }[] =
    mainPage?._translations.map((item) => {
      const newItem: { [key: string]: { current: string } } = {};

      for (const key in item.slug) {
        if (key !== "_type") {
          newItem[key] = { current: item.slug[key].current };
        }
      }
      return newItem;
    });

  const translations = i18n.languages.reduce<Translation[]>((acc, lang) => {
    const translationSlug = homePageTranslationSlugs
      ?.reduce(
        (acc: string[], slug: { [key: string]: { current: string } }) => {
          const current = slug[lang.id]?.current;
          if (current) {
            acc.push(current);
          }
          return acc;
        },
        []
      )
      .join(" ");

    return translationSlug
      ? [
          ...acc,
          {
            language: lang.id,
            path: `/${lang.id}`,
          },
        ]
      : acc;
  }, []);

  if (!mainPage) {
    return (
      <div>Ошибка: Не удалось загрузить данные для языка {params.lang}</div>
    );
  }

  return (
    <>
      <Header params={params} translations={translations} />
      <main>
        <OverlapClient>
          <Hero
            mainImage={mainPage.mainImage}
            pretitle={mainPage.pretitle}
            title={mainPage.title}
            linkButton={mainPage.linkButton}
            textButton={mainPage.textButton}
          />
        </OverlapClient>
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
        {/* <TestProjects requestsCards={mainPage.requestsCards} /> */}
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
        <Reviews
          reviewsTitle={mainPage.reviewsTitle}
          reviews={mainPage.reviews}
        />
        <OverlapClient>
          <BlogPostsSection params={{ lang: params.lang }} />
        </OverlapClient>
      </main>
    </>
  );
}
