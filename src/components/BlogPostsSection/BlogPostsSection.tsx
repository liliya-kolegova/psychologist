import React from 'react'
import styles from './BlogPostsSection.module.scss'
import { getFivePostsByLang } from '@/libs/sanityQueries';
import { Image as BlogSectionImage } from '@/types/mainPage'
import BlogPostFull from '../BlogPostFull/BlogPostFull';
import BlogPostStandard from '../BlogPostStandard/BlogPostStandard';
import BlogPostFullReverse from '../BlogPostFullReverse/BlogPostFullReverse';

type Props = {
  params: { lang: string };
  blogImageWide: BlogSectionImage;
  blogImageNarrow: BlogSectionImage;
};

const BlogPostsSection = async ({ params, blogImageWide, blogImageNarrow }: Props) => {

  const blogPosts = await getFivePostsByLang(params.lang);

  if (!blogPosts) {
    return <div>Ошибка: Не удалось загрузить данные для языка {params.lang}</div>;
  }

  const colors = [
    { bgColor: '#F1BE54', textColor: '#163E5C' },
    { bgColor: '#163E5C', textColor: '#F6F6F5' },
    { bgColor: '#F6F6F5', textColor: '#163E5C' },
  ];

  let standardPostIndex = 0;

  return (
    <section className={styles.blogPostSection}>
      <div className="container">
        <h2 className="h2-main mb20">блог о психологии</h2>
        <div className={styles.blogPosts}>
          {blogPosts.map((post, index) => {
            if (index === 0) {
              return (
                <div key={post._id} className={styles.blogPostFull}>
                  <BlogPostFull
                    title={post.title}
                    shortDescription={post.shortDescription}
                    slug={post.slug}
                    language={params.lang}
                    blogImageWide={blogImageWide}
                  />
                </div>
              )
            } else if (index === 4){
              return (
                <div key={post._id} className={styles.blogPostFullReverse}>
                  <BlogPostFullReverse
                    title={post.title}
                    shortDescription={post.shortDescription}
                    slug={post.slug}
                    language={params.lang}
                    blogImageNarrow={blogImageNarrow}
                  />
                </div>
              )
            } else {
              const { bgColor, textColor } = colors[standardPostIndex % colors.length];
              standardPostIndex++; // Увеличиваем счетчик для стандартных постов
              return (
                <div key={post._id} className={styles.blogPostStandard}>
                  <BlogPostStandard
                    title={post.title}
                    previewImage={post.previewImage}
                    shortDescription={post.shortDescription}
                    slug={post.slug}
                    bgColor={bgColor}
                    textColor={textColor}
                    language={params.lang}
                  />
                </div>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default BlogPostsSection
