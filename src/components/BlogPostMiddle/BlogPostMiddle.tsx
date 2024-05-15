import React from 'react'
import styles from './BlogPostMiddle.module.scss'
import Link from 'next/link';

type Props = {
  title: string;
  shortDescription: string;
  slug: any;
  language: string;
};

const BlogPostMiddle = ({
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
    <div className={styles.fullPostContent}>
      <div className={styles.textBlock}>
        <h2 className={styles.postTitle}>{title.slice(0, 50)}</h2>
        <p className={styles.postDescription}>{shortDescription.slice(0, 250)}...</p>
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
  )
}

export default BlogPostMiddle
