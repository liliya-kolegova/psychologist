import React from "react";
import styles from "./BlogPostFull.module.scss";
import { Image as BlogImage } from "@/types/mainPage";
import Image from "next/image";
import { urlFor } from "@/libs/sanity";
import Link from "next/link";

type Props = {
  title: string;
  shortDescription: string;
  slug: any;
  language: string;
};

import blogImageWide from "../../../public/img/blog-1.webp";
import FadeUpAnimate from "../FadtUpAnimate/FadtUpAnimate";

const BlogPostFull = ({ title, shortDescription, slug, language }: Props) => {
  const generateSlug = (slug: any, language: string) => {
    return slug && slug[language]?.current
      ? `/${language}/blog/${slug[language].current}`
      : "#";
  };

  const localizedSlug = generateSlug(slug, language);

  return (
    <FadeUpAnimate>
      <Link href={localizedSlug}>
        <div className={styles.fullPost}>
          <div className={styles.fullPostContent}>
            <div className={styles.textBlock}>
              <h2 className={styles.postTitle}>{title.slice(0, 50)}</h2>
              <p className={styles.postDescription}>
                {shortDescription.slice(0, 200)}...
              </p>
            </div>
            <div className={styles.linkBlock}>
              <span className={styles.postLink}>читать полностью</span>
            </div>
          </div>
          <div className={styles.fullPostImage}>
            <Image src={blogImageWide} alt={title} fill={true} />
          </div>
        </div>
      </Link>
    </FadeUpAnimate>
  );
};

export default BlogPostFull;
