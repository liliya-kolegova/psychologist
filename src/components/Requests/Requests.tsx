import React, { FC } from 'react'
import { Caveat } from "next/font/google";
import styles from './Requests.module.scss'
import { Image as MainImage } from '@/types/mainPage'
import Image from 'next/image';
import { urlFor } from '@/libs/sanity';
import Link from 'next/link';
import { PortableText } from '@portabletext/react'
import { RichText } from '../RichText/RichText';
import RequestCards from '../RequestCards/RequestCards';
import TestProjects from '../TestProjects/TestProjects';

const caveat = Caveat({ weight: ['400', '700'], subsets: ["latin"] });

type Props = {
  requestsTitle: string;
  requestsDescription: string;
  requestsCards: any[];
  requestsText: string;
  requestsLinks: any[];
  requestsImage: MainImage;
}

const Requests: FC<Props> = ({ 
  requestsTitle, 
  requestsDescription, 
  requestsCards, 
  requestsText, 
  requestsLinks, 
  requestsImage
 }) => {

  return (
    <section id='requests' className={styles.requests}>
      <div className="container">
        <div className={`${styles.requestsContent} ${styles.bottomBlock}`}>
          <div className={`${styles.contentLeftBlock}`}>
            <h2 className={styles.title}>{requestsTitle}</h2>
          </div>
          <div className={styles.contentRightBlock}>
            <p className={styles.description}>{requestsDescription}</p>
          </div>
        </div>
        </div>
      <RequestCards requestsCards={requestsCards} />
      {/* <TestProjects requestsCards={requestsCards} /> */}
      <div className="container">
        <div className={styles.requestsContent}>
          <div className={styles.contentLeftBlock}>
            <div className={styles.requestsFlex}>
              <div className={styles.titleBlock}>
                <h2 className={styles.title}>{requestsText}</h2>
              </div>
              <div className={styles.linksBlock}>
                {requestsLinks.map((link) => (
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
          <div className={styles.contentRightBlock}>
            <Image src={urlFor(requestsImage).url()} alt={requestsTitle} width={700} height={600} className={styles.requestsImage} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}

export default Requests