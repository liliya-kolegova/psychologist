import React from 'react'
import { getBlogPostsByLang } from '@/libs/sanityQueries'
import BlogPostsAll from '@/components/BlogPostsAll/BlogPostsAll';

type Props = {
  params: { lang: string };
};

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