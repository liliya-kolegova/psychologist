'use client';
import React, { FC, useEffect, useState } from 'react';
import styles from './SliderReviews.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { urlFor } from '@/libs/sanity';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { TfiClose } from 'react-icons/tfi';
import { Review } from '@/types/mainPage';
import { PortableText } from '@portabletext/react'
import { RichText } from '../RichText/RichText';
import VideoPopup from '../VideoPopup/VideoPopup';

type Props = {
  reviews: Review[];
};

const SliderReviews: FC<Props> = ({ reviews }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number, event: any) => {
    event.stopPropagation();  // Prevent any parent handlers from being executed
    setCurrentPhotoIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePrevious = () => {
    setCurrentPhotoIndex(prevIndex => prevIndex === 0 ? reviews.length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentPhotoIndex(prevIndex => prevIndex === reviews.length - 1 ? 0 : prevIndex + 1);
  };

  // Обработчик нажатия клавиш
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  // Добавление и удаление обработчика событий
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.sliderDiplomas}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentPhotoIndex(swiper.activeIndex)}
        initialSlide={currentPhotoIndex}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 1.2, spaceBetween: 20 },
          1280: { slidesPerView: 1.5, spaceBetween: 20 },
          1440: { slidesPerView: 2, spaceBetween: 20 },
          1920: { slidesPerView: 2.4, spaceBetween: 20 }
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={review._key} className={styles.slide}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={(event) => openModal(index, event)}>
            {/* {hoveredIndex === index && ( */}
              <div className={styles.reviewBlock}>
                {review.reviewVideoLink ? (
                <div className={styles.videoReview}>
                  <div className={styles.videoReviewWrapper}>
                    <div className={styles.videoTextBlock}>
                      <p className={`${styles.reviewText} mb20`}>{review.reviewTitle}</p>
                      <p className={styles.reviewText}>{review.reviewPermission}</p>
                    </div>
                    <div className={styles.posterImageBlock}>
                      <Image
                        src={urlFor(review.reviewPosterImage).url()}
                        alt={review.reviewTitle}
                        width={700}
                        height={700}
                        className={styles.posterImage}
                      />
                      <div className={styles.overlay}></div>
                      <button className={styles.playButton}>
                        <FaPlay className={styles.playIcon} color="#163e5c" fontSize="2em" />
                      </button>
                    </div>
                  </div>
                  </div>
                ) : (
                    <div className={styles.textReview}>
                      <h3 className={styles.reviewTitle}>{review.reviewTitle}</h3>
                      <PortableText
                        value={review.reviewText}
                        components={RichText}
                      />
                  </div>
                )}
              </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showModal && (
        <div className={styles.fullscreenModal}>
          <button onClick={closeModal} className={styles.closeButton}>
            <TfiClose color="#fff" fontSize="2.5em" />
          </button>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.swiperModalNext',
              prevEl: '.swiperModalPrev'
            }}
            pagination={{
              clickable: true, // Делает кнопки пагинации кликабельными
              dynamicBullets: true, // Можно добавить для лучшей визуализации при большом количестве слайдов
              renderBullet: (index, className) => {
                return `<span class="${className}" style="background-color: ${index === activeIndex ? '#163E5C' : '#ffffff'}; width: 12px; height: 12px; display: inline-block; border-radius: 50%; margin: 0 5px;"></span>`;
            }
            }}
              onSlideChange={(swiper) => {
              setCurrentPhotoIndex(swiper.activeIndex);
              setActiveIndex(swiper.activeIndex);
            }}
            // spaceBetween={10}
            slidesPerView={1}
            initialSlide={currentPhotoIndex} // Установка начального слайда на текущий индекс
            className={styles.modalSwiper}
          >
            {reviews.map((review) => (
              <SwiperSlide
                key={review._key}
                className={styles.modalSlide}
              >
                {review.reviewVideoLink ? (
                  <div className={styles.reviewPopup}>
                    <div className={styles.reviewPopupWrapper}>
                      <div className={`${styles.videoTextBlock} mb20`}>
                        <p className={`${styles.reviewText} mb20`}>{review.reviewTitle}</p>
                        <p className={styles.reviewText}>{review.reviewPermission}</p>
                      </div>
                      <iframe
                        width="100%"
                        height="100%"
                        src={review.reviewVideoLink}
                        title="YouTube video player"
                        allowFullScreen
                        className={styles.videoFrame}
                      ></iframe>
                    </div>
                  </div>
                ) : (
                    <div className={styles.reviewPopup}>
                      <div className={styles.textReviewPopup}>
                        <h3 className={styles.reviewTitle}>{review.reviewTitle}</h3>
                        <PortableText
                          value={review.reviewText}
                          components={RichText}
                        />
                      </div>
                    </div>
                )}
              </SwiperSlide>
            ))}
            <div className={styles.navButtonsModal}>
              <button className="swiperModalPrev">
                <SlArrowLeft color="#fff" fontSize="3.5em" />
              </button>
              <button className="swiperModalNext">
                <SlArrowRight color="#fff" fontSize="3.5em" />
              </button>
            </div>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default SliderReviews;
