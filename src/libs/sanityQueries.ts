import { groq } from "next-sanity";
import { sanityClient } from "./sanity";
import { Header } from "@/types/header";
import { MainPage } from "@/types/mainPage";

export async function getHeaderByLang(lang: string): Promise<Header> {
  const headerQuery = groq`*[_type == "header" && language == $lang][0] {
    _id,
    logo,
    "phones": phones[] {
      "phone": phone,
      "phoneLabel": phoneLabel,
    },
    "menuItems": menuItems[]{
      "label": label,
      "link": link,
    },
    "linkItems": linkItems[]{
      "label": label,
      "link": link,
    },
    languageLabel,
    languageLink,
  }`;

  const header = await sanityClient.fetch(headerQuery, { lang });

  return header;
}

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
        requestsTitle,
        requestsDescription,
        requestsCards,
        requestsText,
        requestsLinks,
        requestsImage,
        offerTitle,
        offerDescription,
        offerLinks,
        language,
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
          slug,
        },
      }`;

  const mainPage = await sanityClient.fetch(mainPageQuery, { lang });

  return mainPage;
}