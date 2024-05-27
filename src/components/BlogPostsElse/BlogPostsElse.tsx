import React from 'react'
import styles from './BlogPostsElse.module.scss'
import { getThreePostsByLang } from '@/libs/sanityQueries';
import { Image as BlogSectionImage } from '@/types/mainPage'
import BlogPostFull from '../BlogPostFull/BlogPostFull';
import BlogPostStandard from '../BlogPostStandard/BlogPostStandard';
import BlogPostFullReverse from '../BlogPostFullReverse/BlogPostFullReverse';
import Link from 'next/link';
import FadeUpAnimate from '../FadtUpAnimate/FadtUpAnimate';
import TransitionLink from '../TransitonLink/TransitonLink';

type Props = {
  params: {
    lang: string;
    id: string;
  };
};

const BlogPostsElse = async ({ params }: Props) => {

  const blogPosts = await getThreePostsByLang(params.lang, params.id);

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
        <FadeUpAnimate>
          <h2 className="h2-main mb70">другие статьи</h2>
        </FadeUpAnimate>
        <div className={styles.blogPosts}>
          {blogPosts.map((post, index) => {
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
          })}
        </div>
      </div>
    </section>
  )
}

export default BlogPostsElse