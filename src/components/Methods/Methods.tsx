import React, { FC } from 'react'
import styles from './Methods.module.scss'
import { MethodsAccordion } from '@/types/mainPage';
import { PortableText } from '@portabletext/react'
import { RichText } from '../RichText/RichText';
import Accordion from '../Accordion/Accordion';
import { AccordionBeauty } from '../AccordionBeauty/AccordionBeauty';

type Props = {
  methodsTitle: string;
  methodsAccordion: any[];
}

const Methods: FC<Props> = ({ methodsTitle, methodsAccordion }) => {

  console.log("methodsAccordion", methodsAccordion);
  return (
    <section className={styles.methods}>
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