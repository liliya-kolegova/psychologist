import React, { FC } from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import { Image as MainImage } from '@/types/mainPage'
import { urlFor } from '@/libs/sanity'
import Link from 'next/link'

type Props = {
  pretitle: string
  title: string
  mainImage: MainImage;
  textButton: string;
}

const Hero: FC<Props> = ({ pretitle, title, mainImage, textButton }) => {
  return (
    <section className={styles.hero}>
      <Image
        src={urlFor(mainImage).url()}
        alt={title}
        width={1920}
        height={900}
        objectFit="cover"
        className={styles.mainImage}
      />
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <div className={`container ${styles.contentHigh}`}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.contentTop}>
              <p className={styles.preheading}>{pretitle}</p>
            </div>
            <div className={styles.contentBottom}>
              <h1 className={styles.mainHeading}>{title}</h1>
              <Link href="#" className={styles.scrollLink}>{textButton}</Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero