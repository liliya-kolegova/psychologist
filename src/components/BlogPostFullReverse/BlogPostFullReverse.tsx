import React from "react";
import { Image as BlogImage } from "@/types/mainPage";
import styles from "./BlogPostFullReverse.module.scss";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/libs/sanity";

type Props = {
  title: string;
  shortDescription: string;
  slug: any;
  language: string;
};

import imageNarrow from "../../../public/img/blog-2.webp";
import FadeUpAnimate from "../FadtUpAnimate/FadtUpAnimate";

const BlogPostFullReverse = ({
  title,
  shortDescription,
  slug,
  language,
}: Props) => {
  const generateSlug = (slug: string, language: string) => {
    return `/${language}/blog/${slug}`;
  };

  const localizedSlug = generateSlug(slug.current, language);

  return (
    <FadeUpAnimate>
      <Link href={localizedSlug}>
        <div className={styles.fullPost}>
          <div className={styles.fullPostContent}>
            <div className={styles.textBlock}>
              <h2 className={styles.postTitle}>{title.slice(0, 50)}</h2>
              <p className={styles.postDescription}>
                {shortDescription.slice(0, 500)}...
              </p>
            </div>
            <div className={styles.linkBlock}>
              <span className={styles.postLink}>читать полностью</span>
            </div>
          </div>
          <div className={styles.fullPostImage}>
            <Image src={imageNarrow} alt={title} fill={true} />
          </div>
        </div>
      </Link>
    </FadeUpAnimate>
  );
};

export default BlogPostFullReverse;
