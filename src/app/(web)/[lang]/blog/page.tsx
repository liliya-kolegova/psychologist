import React from 'react'
import { Metadata } from 'next'
import { getBlogPostsByLang } from '@/libs/sanityQueries'
import BlogPostsAll from '@/components/BlogPostsAll/BlogPostsAll';

type Props = {
  params: { lang: string };
};

// Dynamic metadata for SEO
export async function generateMetadata(): Promise<Metadata> {

  return {
    title: `Блог о психологии | Психолог Лилия Колегова`,
    description: `Блог о психологии: статьи, видео, обзоры, рекомендации и многое другое от психолога Лилии Колеговой.`,
  };
}

const PageBlog = async ({ params }: Props) => {
  const { lang } = params;
  const blogPosts = await getBlogPostsByLang(lang);
  // console.log(blogPosts);
  return (
    <BlogPostsAll
      blogPosts={blogPosts}
    />
  )
}

export default PageBlog