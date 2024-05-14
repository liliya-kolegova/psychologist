import React from 'react'
import { Image as BlogImage } from '@/types/mainPage'

type Props = {
  title: string;
  previewImage: BlogImage;
  shortDescription: string;
  slug: string;
};

const BlogPostFullReverse = ({ title, previewImage, shortDescription, slug }: Props) => {
  return (
    <div className="blogPostFullReverse" style={{ backgroundImage: `url(${previewImage})` }}>
      <h2>{title}</h2>
    </div>
  )
}

export default BlogPostFullReverse
