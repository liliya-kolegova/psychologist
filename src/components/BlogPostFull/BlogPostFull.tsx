import React from 'react'
import styles from './BlogPostFull.module.scss'
import { Image as BlogImage } from '@/types/mainPage'

type Props = {
  title: string;
  previewImage: BlogImage;
  shortDescription: string;
  slug: string;
};

const BlogPostFull = ({ title, previewImage, shortDescription, slug }: Props) => {
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
    </div>
  )
}

export default BlogPostFull
