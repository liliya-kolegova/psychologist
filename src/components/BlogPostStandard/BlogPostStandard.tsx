import React from "react";
import styles from "./BlogPostStandard.module.scss";
import { Image as BlogImage } from "@/types/mainPage";
import Image from "next/image";
import { urlFor } from "@/libs/sanity";
import Link from "next/link";
import FadeUpAnimate from "../FadtUpAnimate/FadtUpAnimate";

type Props = {
  title: string;
  previewImage: BlogImage;
  shortDescription: string;
  slug: any;
  bgColor: string;
  textColor: string;
  language: string; // Добавляем язык в пропсы
};

const BlogPostStandard = ({
  title,
  previewImage,
  shortDescription,
  slug,
  bgColor,
  textColor,
  language,
}: Props) => {
  const generateSlug = (slug: string, language: string) => {
    return `/${language}/blog/${slug}`;
  };

  const localizedSlug = generateSlug(slug.current, language);

  return (
    <FadeUpAnimate>
      <Link href={localizedSlug}>
        <div className={styles.post}>
          <div className={styles.postImage}>
            {previewImage && (
              <Image
                src={urlFor(previewImage).url()}
                alt={title}
                width={800}
                height={600}
              />
            )}
          </div>
          <div
            className={styles.postContent}
            style={{ backgroundColor: bgColor, color: textColor }}
          >
            <h2 className={styles.postTitle}>{title.slice(0, 33)}</h2>
            <p className={styles.postDescription}>
              {shortDescription.slice(0, 100)}...
            </p>
            <span className={styles.postLink}>читать полностью</span>
          </div>
        </div>
      </Link>
    </FadeUpAnimate>
  );
};

export default BlogPostStandard;
