import { getMainPageByLang } from "@/libs/sanityQueries";
import Hero from "@/components/Hero/Hero";
import Description from "@/components/Description/Description";

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
    </main>
  );
}
