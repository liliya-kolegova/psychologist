import { groq } from "next-sanity";
import { sanityClient } from "./sanity";
import { Header } from "@/types/header";
import { MainPage } from "@/types/mainPage";
import { Footer } from "@/types/footer";
import { Blog } from "@/types/blog";
import { NotFound } from "@/types/notFound";
import { BlogPage } from "@/types/blogPage";

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
        metaTitle,
        metaDescription,
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
        offerLinksShort,
        educationTitle,
        educationBullets,
        degreeTitle,
        degreeBullets,
        degreeText,
        diplomas,
        videoTitle,
        videoLink,
        posterImage,
        methodsTitle,
        methodsAccordion,
        therapyStagesTitle,
        therapyStagesImage,
        therapyStages,
        consultationsTitle,
        consultations,
        gamesTitle,
        games,
        reviewsTitle,
        reviews,
        blogImageWide,
        blogImageNarrow,
        language,
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
          slug,
        },
      }`;

  const mainPage = await sanityClient.fetch(mainPageQuery, { lang });

  return mainPage;
}

export async function getFooterByLang(lang: string): Promise<Footer> {
  const footerQuery = groq`*[_type == "footer" && language == $lang][0] {
    _id,
    contactsTitle,
    workingHours,
    phones,
    contactsDescription,
    contactLinks,
    mainFullImage,
    footerLogo,
    footerLinks,
    paymentLogos,
    footerText,
    rightsText,
    copyrigthText
  }`;

  const footer = await sanityClient.fetch(footerQuery, { lang });

  return footer;
}

export async function getFivePostsByLang(lang: string): Promise<Blog[]> {
  const blogPostsQuery = groq`*[_type == "blog" && language == $lang] | order(publishedAt desc)[0...5] {
    _id,
    title,
    slug,
    previewImage,
    shortDescription,
    publishedAt,
    language,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }`;

  const blogPosts = await sanityClient.fetch(
    blogPostsQuery,
    { lang },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return blogPosts;
}

export async function getThreePostsByLang(
  lang: string,
  currentPostId: string
): Promise<Blog[]> {
  const blogPostsQuery = groq`*[_type == "blog" && language == $lang && _id != $currentPostId] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    previewImage,
    shortDescription,
    publishedAt,
    language,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }`;

  const blogPosts = await sanityClient.fetch(
    blogPostsQuery,
    { lang, currentPostId },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return blogPosts;
}

export async function getBlogPostsByLang(lang: string): Promise<Blog[]> {
  const blogPostsQuery = groq`*[_type == 'blog' && language == $lang] | order(publishedAt desc) {
    _id,
    title,
    slug,
    previewImage,
    shortDescription,
    publishedAt,
    language,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }`;

  const blogPosts = await sanityClient.fetch(
    blogPostsQuery,
    { lang },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return blogPosts;
}

export async function getBlogPageByLang(lang: string): Promise<BlogPage> {
  const blogPageQuery = groq`*[_type == "blogPage" && language == $lang][0] {
    _id,
    metaTitle,
    metaDescription,
    language,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }`;

  const blogPage = await sanityClient.fetch(
    blogPageQuery,
    { lang },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return blogPage;
}

export async function getBlogPostByLang(
  lang: string,
  slug: string
): Promise<Blog> {
  const blogQuery = groq`*[_type == 'blog' && slug[$lang].current == $slug][0] {
    _id,
    metaTitle,
    metaDescription,
    title,
    slug,
    previewImage,
    shortDescription,
    firstContent,
    contentBlocks,
    videoTitle,
    videoLink,
    posterImage,
    publishedAt,
    language,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }`;

  const blog = await sanityClient.fetch(
    blogQuery,
    { lang, slug },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return blog;
}

export async function getNotFoundByLang(lang: string): Promise<NotFound> {
  const notFoundQuery = groq`*[_type == "notFound" && language == $lang][0] {
    _id,
    notFoundTitle,
    notFoundDescription,
    workingHours,
    notFoundLinks,
    mainPageText,
    mainPageLink,
  }`;

  const notFound = await sanityClient.fetch(notFoundQuery, { lang });

  return notFound;
}
