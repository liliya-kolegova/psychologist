import { getMainPageByLang } from "@/libs/sanityQueries";
import { i18n } from "../../../../i18n.config";

type Props = {
  params: { lang: string };
};

export default async function Home({ params }: Props) {

  const mainPage = await getMainPageByLang(params.lang);

  // console.log("mainPage", mainPage);
  console.log("title", mainPage.title);

  return (
    <main>
      <h1>{mainPage.title}</h1>
    </main>
  );
}
