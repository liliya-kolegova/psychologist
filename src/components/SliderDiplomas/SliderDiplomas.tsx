'use client';
import React, { FC, useEffect, useState } from 'react';
import styles from './SliderDiplomas.module.scss';
import { Diploma } from '@/types/mainPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { urlFor } from '@/libs/sanity';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { TfiClose } from 'react-icons/tfi';

type Props = {
  diplomas: Diploma[];
};

const SliderDiplomas: FC<Props> = ({ diplomas }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index: number, event: any) => {
    event.stopPropagation();  // Prevent any parent handlers from being executed
    setCurrentPhotoIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePrevious = () => {
    setCurrentPhotoIndex(prevIndex => prevIndex === 0 ? diplomas.length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentPhotoIndex(prevIndex => prevIndex === diplomas.length - 1 ? 0 : prevIndex + 1);
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
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentPhotoIndex(swiper.activeIndex)}
        initialSlide={currentPhotoIndex}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2.5, spaceBetween: 30 },
          980: { slidesPerView: 3.5, spaceBetween: 30 },
          1024: { slidesPerView: 4.5, spaceBetween: 30 }
        }}
      >
        {diplomas.map((diploma, index) => (
          <SwiperSlide key={diploma._key} className={styles.slide}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={(event) => openModal(index, event)}>
            <div className={styles.slideContent}>
              <p className={styles.diplomaTitle}>{diploma.diplomaTitle}</p>
              <h3 className={styles.diplomaName}>{diploma.diplomaName}</h3>
              {hoveredIndex === index && (
                <Image
                  src={urlFor(diploma.diplomaImage).url()}
                  alt={diploma.diplomaName}
                  width={1000}
                  height={1000}
                  className={styles.hoveredImage}
                />
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
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiperModalNext',
              prevEl: '.swiperModalPrev'
            }}
            spaceBetween={10}
            slidesPerView={1}
            initialSlide={currentPhotoIndex} // Установка начального слайда на текущий индекс
            className={styles.modalSwiper}
          >
            {diplomas.map((diploma) => (
              <SwiperSlide
                key={diploma._key}
                className={styles.modalSlide}
              >
                <Image
                  src={urlFor(diploma.diplomaImage).url()}
                  alt={diploma.diplomaName}
                  layout="fill"
                  objectFit="contain"
                />
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

export default SliderDiplomas;
