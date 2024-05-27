import React, { FC } from 'react'
import styles from './Reviews.module.scss'
import { Review } from '@/types/mainPage';
import SliderReviews from '../SliderReviews/SliderReviews';
import FadeUpAnimate from '../FadtUpAnimate/FadtUpAnimate';

type Props = {
  reviewsTitle: string;
  reviews: Review[];
}

const Reviews: FC<Props> = ({ reviewsTitle, reviews }) => {

  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section id='reviews' className={styles.reviews}>
      <div className="container">
        <FadeUpAnimate>
          <h2 className="h2-main mb70">{reviewsTitle}</h2>
        </FadeUpAnimate>
        <SliderReviews reviews={reviews} />
      </div>
    </section>
  )
}

export default Reviews