import React, { FC } from "react";
import styles from "./BlogIntro.module.scss";
import { Image as BlogMainImage } from "@/types/mainPage";
import { urlFor } from "@/libs/sanity";
import { PortableText } from "@portabletext/react";
import { RichText } from "../RichText/RichText";
import Image from "next/image";

type Props = {
  title: string;
  previewImage: BlogMainImage;
  firstContent: any;
};

const BlogIntro: FC<Props> = ({ title, previewImage, firstContent }) => {
  return (
    <section className={styles.blogIntro}>
      <div className="container">
        <div className={styles.blogIntroWrapper}>
          <div className={styles.blogIntroContent}>
            <h1 className={styles.blogHeading}>{title}</h1>
            <div className={styles.blogIntroText}>
              <PortableText value={firstContent} components={RichText} />
            </div>
          </div>
          <div className={styles.blogIntroImage}>
            {previewImage && (
              <Image
                src={urlFor(previewImage).url()}
                alt={title}
                width={800}
                height={600}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIntro;
