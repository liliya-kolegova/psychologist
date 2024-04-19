import { groq } from "next-sanity";
import { sanityClient } from "./sanity";
import { MainPage } from "@/types/mainPage";

// export const getHeaderQuery = groq`*[_type == "header"][0] {
//   _id,
//   logo,
//   "menuItems": menuItems[]{
//     "label": label,
//     "link": link,
//   }
// }`;

// for the query can be adjusted to be data that you need
export async function getMainPageByLang(lang: string): Promise<MainPage> {
  const mainPageQuery = groq`*[_type == 'mainPage' && language == $lang][0] {
        _id,
        pretitle,
        title,
        slug,
        textButton,
        linkButton,
        mainImage,
        description,
        descriptionBig,
        language,
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
          slug,
        },
      }`;

  const mainPage = await sanityClient.fetch(mainPageQuery, { lang });

  return mainPage;
}