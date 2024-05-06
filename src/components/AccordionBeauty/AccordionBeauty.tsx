'use client';
import React, { useEffect } from 'react'
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import styles from "./AccordionBeauty.module.scss"
import { PortableText } from '@portabletext/react'
import { RichText } from '../RichText/RichText';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

type AccordionProps = {
  title: string;
  content: any;
};

const AccordionItem: React.FC<AccordionProps> = ({ title, content }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [isEnter, setIsEnter] = React.useState(false); // Local state to track hover

  useEffect(() => {
    setExpanded(isEnter); // Update expanded only after render
  }, [isEnter]);

  return (
    <Item
      header={
        <div className={styles.headerFlex}>
          {title}
          <span className={styles.toggleIcon}>
            {expanded ? <AiOutlineMinus fontSize="2rem" /> : <AiOutlinePlus fontSize="2rem" />}
          </span>
        </div>
      }
      className={styles.item}
      buttonProps={{
        className: `${styles.itemBtn} ${expanded ? styles.itemBtnExpanded : styles.itemBtnCollapsed}`,
        onMouseEnter: () => setIsEnter(true),
        onMouseLeave: () => setIsEnter(false)
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    >
      <PortableText
        value={content}
        components={RichText}
      />
    </Item>
  );
};

type AccordionListProps = {
  items: AccordionProps[];
};

export const AccordionBeauty: React.FC<AccordionListProps> = ({ items }) => {
  return (
    <div className={styles.accordion}>
      <Accordion
        transition
        transitionTimeout={250}
        allowMultiple={false}
      >
        {items.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </Accordion>
    </div>
  );
}
