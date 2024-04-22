// Accordion.tsx
'use client';
import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import Image from 'next/image';
import { PortableText } from '@portabletext/react'
import { RichText } from '../RichText/RichText';
// import shevronDown from '../../images/shevron-down.svg';

type AccordionProps = {
  title: string;
  content: any;
};

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div
        className={styles.accordionHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{title}</h3>
        {/* <Image
          className={styles.chevron}
          src={shevronDown}
          alt="Chevron Down"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          width={30}
          height={30}
        /> */}
      </div>
      <div
        className={styles.accordionContent}
        style={{
          maxHeight: isOpen ? '1000px' : '0',
          transition: 'max-height 0.5s ease',
          overflow: 'hidden',
        }}
      >
        <PortableText
          value={content}
          components={RichText}
        />
      </div>
    </div>
  );
};

export default Accordion;
