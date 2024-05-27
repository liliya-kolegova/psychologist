'use client';
// RequestCards.tsx
import React, { FC, useState, useEffect, useRef } from 'react';
import { PortableText } from '@portabletext/react';
import { RichText } from '../RichText/RichText';
import styles from './RequestCards.module.scss';
import { urlFor } from '@/libs/sanity';
import { motion, useMotionValue, useTransform } from 'framer-motion';

type Props = {
  requestsCards: any[];
};

const RequestCards: FC<Props> = ({ requestsCards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollY = useMotionValue(0);
  const translateY = useTransform(scrollY, [0, 200], [0, -50]);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const handleScroll = () => {
    if (contentRef.current) {
      const scroll = isMobile ? contentRef.current.scrollLeft : contentRef.current.scrollTop;
      const cardSize = isMobile ? contentRef.current.offsetWidth : contentRef.current.offsetHeight;
      const newIndex = Math.floor(scroll / cardSize);
      setActiveIndex(newIndex);
      scrollY.set(scroll);

      // Обновление положения каждой карточки
      requestsCards.forEach((card, index) => {
        const cardElement = document.getElementById(`card-${index}`);
        if (cardElement) {
          const overlap = (scroll - (index * cardSize)) / cardSize;
          if (overlap > 0) {
            cardElement.style.transform = `translateY(${1 * overlap}px)`;
          } else {
            cardElement.style.transform = 'translateY(0)';
          }
        }
      });
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

  const getCardStyle = (card: any) => ({
    backgroundColor: card.backgroundColor,
    color: card.textColor,
  });

  return (
    <div className={styles.requestsCards}>
      <div className="container">
        <div className={styles.requestsContainer}>
          <div className={styles.imageContainer}>
            {isMobile ? (
              <img
                src={urlFor(requestsCards[activeIndex].icon).url()}
                alt="Card Image"
                width={250}
                height={250}
              />
            ) : (
              <motion.img
                src={urlFor(requestsCards[activeIndex].icon).url()}
                alt="Card Image"
                width={250}
                height={250}
              />
            )}
          </div>
          <div className={styles.cardsScrollContainer} ref={contentRef} data-lenis-prevent>
            {requestsCards.map((card, index) => (
              isMobile ? (
                <div
                  id={`card-${index}`}
                  key={card._key}
                  className={styles.cardContent}
                  style={{ ...getCardStyle(card), transform: `translateY(${index * 10}px)` }}
                >
                  <div className={styles.cardContentWrapper}>
                    <PortableText
                      value={card.content}
                      components={RichText}
                    />
                  </div>
                </div>
              ) : (
                <motion.div
                  id={`card-${index}`}
                  key={card._key}
                  className={styles.cardContent}
                  initial={{ y: index * 10 }}
                  animate={{ y: activeIndex === index ? 0 : index * 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={getCardStyle(card)}
                >
                  <div className={styles.cardContentWrapper}>
                    <PortableText
                      value={card.content}
                      components={RichText}
                    />
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestCards;
