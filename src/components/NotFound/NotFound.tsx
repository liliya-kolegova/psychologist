import { Link as NotFoundLink } from '@/types/mainPage';
import React, { FC } from 'react'
import styles from './NotFound.module.scss'
import Link from 'next/link';
import { Caveat } from "next/font/google";
import ScrollAnimate from '../ScrollAnimate/ScrollAnimate';
const caveat = Caveat({ weight: ['400', '700'], subsets: ["latin"] });


type Props = {
  title: string;
  description: string;
  workingHours: string;
  links: NotFoundLink[];
  mainPageText: string;
  mainPageLink: NotFoundLink;
  params: { lang: string };
};

const NotFound: FC<Props> = ({
  title,
  description,
  workingHours,
  links,
  mainPageText,
  mainPageLink,
  params,
}) => {
  return (
    <section className={styles.notFound}>
      <div className={styles.contactsContainer}>
        <div className={styles.contactsWrapper}>
          <div className={styles.contactsBlock}>
            <ScrollAnimate>
              <h2 className={`${styles.contactsTitle} ${caveat.className}`}>{title}</h2>
            </ScrollAnimate>
          </div>
          <div className={styles.contactsBlock}>
            <p className={styles.callsTitle}>{description}</p>
          </div>
          <div className={styles.contactsBlock}>
            <div className={styles.messengers}>
              <p className={styles.messengersTitle}>{workingHours}</p>
              <div className={styles.messengersLinks}>
                {links.map((link) => (
                  <Link
                    href={link.link}
                    key={link._key}
                    className={`${styles.link} ${caveat.className}`}
                  >
                    [{link.label}]
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.contactsBlock}>
            <div className={styles.calls}>
              <p className={styles.callsTitle}>{mainPageText}</p>
            </div>
          </div>
          <div className={styles.contactsBlock}>
            <Link
              href={`/${params.lang}/`}
              className={styles.mainPageLink}
            >
              {mainPageLink.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound