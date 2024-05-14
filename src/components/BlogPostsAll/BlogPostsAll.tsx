import { Blog } from '@/types/blog';
import React, { FC } from 'react'

type Props = {
  blogPosts: Blog[];
};

const BlogPostsAll: FC<Props> = ({ blogPosts }) => {
  console.log(blogPosts);
  return (
    <div>BlogPostsAll</div>
  )
}

export default BlogPostsAll