'use client';
import React, { FC, useState, useEffect, useRef } from 'react'
import { Image as MainImage, TherapyStage } from '@/types/mainPage'
import styles from './TherapyStages.module.scss'
import Image from 'next/image';
import { urlFor } from '@/libs/sanity';
import { motion, useMotionValue, useTransform } from 'framer-motion';

type Props = {
  therapyStagesTitle: string;
  therapyStagesImage: MainImage;
  therapyStages: TherapyStage[];
}

const TherapyStages: FC<Props> = ({ therapyStagesTitle, therapyStagesImage, therapyStages}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollY = useMotionValue(0);
  const translateY = useTransform(scrollY, [0, 200], [0, -50]);

  const handleScroll = () => {
    if (contentRef.current) {
      const scroll = window.innerWidth < 768 ? contentRef.current.scrollLeft : contentRef.current.scrollTop;
      const cardSize = window.innerWidth < 768 ? contentRef.current.offsetWidth : contentRef.current.offsetHeight;
      const newIndex = Math.floor(scroll / cardSize);
      setActiveIndex(newIndex);
      scrollY.set(scroll);

      // Обновление положения каждой карточки
      therapyStages.forEach((stage, index) => {
        const stageElement = document.getElementById(`stage-${index}`);
        if (stageElement) {
          const overlap = (scroll - (index * cardSize)) / cardSize;
          if (overlap > 0) {
            stageElement.style.transform = `translateY(${1 * overlap}px)`;
          } else {
            stageElement.style.transform = 'translateY(0)';
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

  return (
    <section id='stages' className={styles.therapyStages}>
      <div className="container">
        <div className="grid-main">
          <div className="grid-main__left">
            <h2 className="h2-main">{therapyStagesTitle}</h2>
            <div className={styles.therapyStagesList} ref={contentRef} data-lenis-prevent>
              {therapyStages.map((stage, index) => (
                <motion.div
                  id={`stage-${index}`} // Добавьте id для каждой стадии
                  key={stage._key}
                  className={styles.therapyStagesItem}
                  style={{
                    backgroundColor: stage.stageColor,
                    color: stage.textColor
                  }}
                  initial={{ y: index * 10 }}
                  animate={{ y: activeIndex === index ? 0 : index * 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={styles.therapyStagesItemIcon}>
                    <Image
                      src={urlFor(stage.stageIcon).url()}
                      alt={stage.stageTitle}
                      width={55}
                      height={35}
                    />
                  </div>
                  <h3 className={styles.therapyStagesItemTitle}>{stage.stageTitle}</h3>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid-main__right">
            <div className={styles.imageBlock}>
              <Image
                src={urlFor(therapyStagesImage).url()}
                alt={therapyStagesTitle}
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TherapyStages
