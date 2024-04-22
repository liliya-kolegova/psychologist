'use client';
import React from 'react'
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
  const [expanded, setExpanded] = React.useState(false); // State to track expansion

  return (
    <Item
      header={
        <>
          <div className={styles.headerFlex}>
            {title}
            <span className={styles.toggleIcon}>
              {expanded ? <AiOutlineMinus fontSize="2rem" /> : <AiOutlinePlus fontSize="2rem" />}
            </span>
          </div>
        </>
      }
      className={styles.item}
      buttonProps={{
        className: ({ isEnter }) => {
          setExpanded(isEnter); // Update expansion state based on accordion state
          return `${styles.itemBtn} ${isEnter ? styles.itemBtnExpanded : styles.itemBtnCollapsed}`;
        }
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