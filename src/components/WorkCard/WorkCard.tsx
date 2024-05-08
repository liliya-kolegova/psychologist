// Card.tsx
import React, { FC } from 'react';
import styles from './WorkCard.module.scss';

type Props = {
  type?: string;
  time?: string;
  quantity?: string;
  title: string;
  price?: string;
};

const WorkCard: FC<Props> = ({ type, time, quantity, title, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardTopContent}>
          {type && <div className={styles.cardTopItem}>{type}</div>}
          {time && <div className={styles.cardTopItem}>{time}</div>}
          {quantity && <div className={styles.cardTopItem}>{quantity}</div>}
        </div>
        <div className={styles.cardBottomContent}>
          <h3 className={styles.cardBottomItem}>{title}</h3>
          {price && <div className={styles.cardBottomItem}>{price}</div>}
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
