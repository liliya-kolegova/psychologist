
'use client';
import Image from 'next/image';
import React, { FC, useEffect, useRef } from 'react';
import { PortableText } from '@portabletext/react';
import { RichText } from '../RichText/RichText';
import styles from './TestProjects.module.scss';
import { urlFor } from '@/libs/sanity';
import { useScroll } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  requestsCards: any[];
}

const TestProjects: FC<Props> = ({ requestsCards }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);

cards.forEach((card, index) => {
  const image = card.querySelector(`.${styles.imageContainer} img`);
  const text = card.querySelector(`.${styles.cardContent}`);

  gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: "top center",
      end: "bottom center",
      scrub: true,
      pin: card,
      pinSpacing: false,
    }
  })
  .fromTo(image, { opacity: 0 }, { opacity: 1, duration: "100%" })
  .fromTo(text, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: "100%" }, "<")
  .to(image, { opacity: 0, duration: "100%" }, "+=0.4")
  .to(text, { opacity: 0, scale: 0.8, duration: "100%" }, "+=0.4");

  if (index > 0) {
    gsap.to(cards[index - 1].querySelector(`.${styles.cardContent}`), {
      scrollTrigger: {
        trigger: card,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      opacity: 0,
      scale: 0.8,
      duration: "100%"
    });
  }
});

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [requestsCards]);

  return (
    <div className={styles.requestsCards} ref={contentRef}>
      <div className="container">
        <div className={styles.requestsContainer}>
          {requestsCards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={urlFor(card.icon).url()}
                  alt={`Card Image ${index + 1}`}
                  width={250}
                  height={250}
                />
              </div>
              <div className={styles.cardContent}>
                <PortableText
                  value={card.content}
                  components={RichText}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestProjects;