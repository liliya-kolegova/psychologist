import React, { FC } from 'react'
import styles from './Reviews.module.scss'
import { Review } from '@/types/mainPage';
import SliderReviews from '../SliderReviews/SliderReviews';

type Props = {
  reviewsTitle: string;
  reviews: Review[];
}

const Reviews: FC<Props> = ({ reviewsTitle, reviews }) => {
  return (
    <section id='reviews' className={styles.reviews}>
      <div className="container">
        <h2 className="h2-main mb70">{reviewsTitle}</h2>
        <SliderReviews reviews={reviews} />
      </div>
    </section>
  )
}

export default Reviews