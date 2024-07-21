import { Metadata } from "next";
import BlogIntro from "@/components/BlogIntro/BlogIntro";
import BlogVideoSection from "@/components/BlogVideoSection/BlogVideoSection";
import DoubleTextBlockComponent from "@/components/DoubleTextBlockComponent/DoubleTextBlockComponent";
import TextImageBlockComponent from "@/components/TextImageBlock/TextImageBlockComponent";
import { getBlogPostByLang } from "@/libs/sanityQueries";
import { DoubleTextBlock, TextImageBlock, UnknownBlock } from "@/types/blog";
import React from "react";
import BlogPostsElse from "@/components/BlogPostsElse/BlogPostsElse";
import { Translation } from "@/types/mainPage";
import { i18n } from "@/i18n.config";
import Header from "@/components/Header/Header";

type Props = {
  params: { lang: string; slug: string };
};

type ContentBlock = TextImageBlock | DoubleTextBlock | UnknownBlock;

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = params;
  const data = await getBlogPostByLang(lang, slug);

  return {
    title: data?.metaTitle,
    description: data?.metaDescription,
  };
}

const PagePost = async ({ params }: Props) => {
  const { lang, slug } = params;
  const blog = await getBlogPostByLang(lang, slug);
  const currentPostId = blog._id; // Получение ID текущего поста

  // console.log("translations", blog._translations);

  const blogPageTranslationSlugs: { [key: string]: { current: string } }[] =
    blog?._translations.map((item) => {
      const newItem: { [key: string]: { current: string } } = {};

      for (const key in item.slug) {
        if (key !== "_type") {
          newItem[key] = { current: item.slug[key].current };
        }
      }
      return newItem;
    });

  const translations = i18n.languages.reduce<Translation[]>((acc, lang) => {
    const translationSlug = blogPageTranslationSlugs
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
            path: `/${lang.id}/blog/${translationSlug}`,
          },
        ]
      : acc;
  }, []);

  const renderContentBlock = (block: ContentBlock) => {
    switch (block._type) {
      case "textImageBlock":
        return (
          <TextImageBlockComponent
            key={block._key}
            block={block as TextImageBlock}
          />
        );
      case "doubleTextBlock":
        return (
          <DoubleTextBlockComponent
            key={block._key}
            block={block as DoubleTextBlock}
          />
        );
      default:
        return <p key={block._key}>Unsupported block type</p>;
    }
  };

  return (
    <>
      <Header params={params} translations={translations} />
      <main className="bg-[#F0EDEA] mt-20 pb-20 rounded-[50px]">
        <BlogIntro
          title={blog.title}
          previewImage={blog.previewImage}
          firstContent={blog.firstContent}
        />
        <article>
          {blog.contentBlocks.map((block) => renderContentBlock(block))}
          {blog.videoLink && (
            <BlogVideoSection
              videoLink={blog.videoLink}
              videoTitle={blog.videoTitle}
              posterImage={blog.posterImage}
            />
          )}
        </article>
        <BlogPostsElse params={{ lang, id: currentPostId }} />
      </main>
    </>
  );
};

export default PagePost;
