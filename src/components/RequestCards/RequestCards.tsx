'use client';
import Image from 'next/image';
import React, { FC, useState, useEffect, useRef } from 'react'
import { PortableText } from '@portabletext/react'
import { RichText } from '../RichText/RichText';
import styles from './RequestCards.module.scss'
import { urlFor } from '@/libs/sanity';

type Props = {
  requestsCards: any[];
}

const RequestCards: FC<Props> = ({ requestsCards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

const handleScroll = () => {
  if (contentRef.current) {
    const scroll = window.innerWidth < 768 ? contentRef.current.scrollLeft : contentRef.current.scrollTop;
    const cardSize = window.innerWidth < 768 ? contentRef.current.offsetWidth : contentRef.current.offsetHeight;
    const newIndex = Math.floor(scroll / cardSize);
    setActiveIndex(newIndex);
  }
};

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);

      return () => {
        element.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className={styles.requestsContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={urlFor(requestsCards[activeIndex].icon).url()}
          alt="Card Image"
          width={250}
          height={250}
        />
      </div>
      <div className={styles.cardsScrollContainer} ref={contentRef}>
        {requestsCards.map((card, index) => (
          <div
            key={card._key}
            className={styles.cardContent}
          >
            <PortableText
              value={card.content}
              components={RichText}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RequestCards