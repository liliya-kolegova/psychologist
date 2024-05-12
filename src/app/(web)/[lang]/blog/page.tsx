import React from 'react'
import { getBlogPostsByLang } from '@/libs/sanityQueries'

type Props = {
  params: { lang: string };
};

const PageBlog = async ({ params }: Props) => {
  const { lang } = params;
  const blogPosts = await getBlogPostsByLang(lang);
  console.log(blogPosts);
  return (
    <div>PageBlog</div>
  )
}

export default PageBlog