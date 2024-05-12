import BlogIntro from '@/components/BlogIntro/BlogIntro';
import DoubleTextBlockComponent from '@/components/DoubleTextBlockComponent/DoubleTextBlockComponent';
import TextImageBlockComponent from '@/components/TextImageBlock/TextImageBlockComponent';
import { getBlogPostByLang } from '@/libs/sanityQueries';
import { DoubleTextBlock, TextImageBlock, UnknownBlock } from '@/types/blog';
import React from 'react'

type Props = {
  params: { lang: string, slug: string };
};

type ContentBlock = TextImageBlock | DoubleTextBlock | UnknownBlock;

const PagePost = async ({ params }: Props) => {
  const { lang, slug } = params;
  const blog = await getBlogPostByLang(lang, slug);
  // console.log(blog.contentBlocks);

  const renderContentBlock = (block: ContentBlock) => {
    switch (block._type) {
      case 'textImageBlock':
        return <TextImageBlockComponent key={block._key} block={block as TextImageBlock} />;
      case 'doubleTextBlock':
        return <DoubleTextBlockComponent key={block._key} block={block as DoubleTextBlock} />;
      default:
        return <p key={block._key}>Unsupported block type</p>;
    }
  };

  return (
    <main>
      <BlogIntro
        title={blog.title}
        previewImage={blog.previewImage}
        firstContent={blog.firstContent}
      />
      <article>
        {blog.contentBlocks.map(block => renderContentBlock(block))}
      </article>
    </main>
  )
}

export default PagePost