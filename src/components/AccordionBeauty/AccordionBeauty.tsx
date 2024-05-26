'use client';
import React, { useState } from 'react';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import styles from "./AccordionBeauty.module.scss";
import { PortableText } from '@portabletext/react';
import { RichText } from '../RichText/RichText';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

type AccordionProps = {
  title: string;
  content: any;
};

const AccordionItem: React.FC<AccordionProps & { expanded: boolean; onClick: () => void }> = ({ title, content, expanded, onClick }) => {

  if (!title || !content) {
    return null;
  }

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
        onClick: onClick,
        style: { borderRadius: expanded ? '30px 30px 0 0' : '30px' } // Add this line
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
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  return (
    <div className={styles.accordion}>
      <Accordion
        transition
        transitionTimeout={250}
        allowMultiple={false}
      >
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            expanded={index === expandedIndex}
            onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
          />
        ))}
      </Accordion>
    </div>
  );
}
