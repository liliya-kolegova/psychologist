import React, { FC } from 'react'
import styles from './Methods.module.scss'
import { MethodsAccordion } from '@/types/mainPage';
import { PortableText } from '@portabletext/react'
import { RichText } from '../RichText/RichText';
import { AccordionBeauty } from '../AccordionBeauty/AccordionBeauty';

type Props = {
  methodsTitle: string;
  methodsAccordion: any[];
}

const Methods: FC<Props> = ({ methodsTitle, methodsAccordion }) => {
  return (
    <section id='methods' className={styles.methods}>
      <div className="container">
        <div className={styles.methodsContent}>
          <div className={styles.contentLeftBlock}>
            <h2 className={styles.methodsTitle}>{methodsTitle}</h2>
          </div>
          <div className={styles.contentRightBlock}></div>
        </div>
        <div className={styles.methodsAccordion}>
          <AccordionBeauty
            items={methodsAccordion.map((accordion) => ({
              title: accordion.accordionTitle,
              content: accordion.accordionContent,
            }))}
          />
        </div>
      </div>
    </section>
  );
}

export default Methods