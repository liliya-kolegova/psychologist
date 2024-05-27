import React from 'react'
import styles from './BlogPostFull.module.scss'
import { Image as BlogImage } from '@/types/mainPage'
import Image from 'next/image';
import { urlFor } from '@/libs/sanity';
import Link from 'next/link';

type Props = {
  title: string;
  shortDescription: string;
  slug: any;
  language: string;
};

import blogImageWide from '../../../public/img/blog-1.webp';
import FadeUpAnimate from '../FadtUpAnimate/FadtUpAnimate';

const BlogPostFull = ({
  title,
  shortDescription,
  slug,
  language
}: Props) => {
  
  const generateSlug = (slug: string, language: string) => {
    return `/${language}/blog/${slug}`;
  };

  const localizedSlug = generateSlug(slug.current, language);

  return (
    <FadeUpAnimate>
      <div className={styles.fullPost}>
        <div className={styles.fullPostContent}>
          <div className={styles.textBlock}>
            <h2 className={styles.postTitle}>{title.slice(0, 50)}</h2>
            <p className={styles.postDescription}>{shortDescription.slice(0, 200)}...</p>
          </div>
          <div className={styles.linkBlock}>
            <Link
              href={localizedSlug}
              className={styles.postLink}
            >
              читать полностью
            </Link>
          </div>
        </div>
        <div className={styles.fullPostImage}>
          <Image
            src={blogImageWide}
            alt={title}
            fill={true}
          />
        </div>
      </div>
    </FadeUpAnimate>
  )
}

export default BlogPostFull
