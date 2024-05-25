import React from 'react'
import styles from './BlogPostsSection.module.scss'
import { getFivePostsByLang } from '@/libs/sanityQueries';
import { Image as BlogSectionImage } from '@/types/mainPage'
import BlogPostFull from '../BlogPostFull/BlogPostFull';
import BlogPostStandard from '../BlogPostStandard/BlogPostStandard';
import BlogPostFullReverse from '../BlogPostFullReverse/BlogPostFullReverse';
import Link from 'next/link';

type Props = {
  params: { lang: string };
};

const BlogPostsSection = async ({ params }: Props) => {

  const blogPosts = await getFivePostsByLang(params.lang);

  if (!blogPosts) {
    return <div>Ошибка: Не удалось загрузить данные для языка {params.lang}</div>;
  }

  if (blogPosts.length === 0) {
    return null;
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
        <h2 className="h2-main mb70">блог о психологии</h2>
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
        <div className={styles.postsLink}>
          <Link
            className={styles.link}
            href={`/${params.lang}/blog`}
          >
            посмотреть другие статьи
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPostsSection
