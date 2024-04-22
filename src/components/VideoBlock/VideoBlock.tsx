'use client';
import React, { FC, useState } from 'react'
import styles from "./VideoBlock.module.scss"
import { Image as ImageType } from '@/types/mainPage';
import Image from 'next/image';
import { urlFor } from '@/libs/sanity';
import VideoPopup from '../VideoPopup/VideoPopup';
import { FaPlay } from 'react-icons/fa';

type Props = {
  videoTitle: string;
  videoLink: string;
  posterImage: ImageType;
}

const VideoBlock: FC<Props> = ({ videoTitle, videoLink, posterImage }) => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className={styles.videoBlock}>
      <div className="container">
        <div className={styles.videoBlockContent}>
          <div className={styles.contentLeftBlock}>
            <h2 className={styles.videoTitle}>{videoTitle}</h2>
          </div>
          <div className={styles.contentRightBlock}>
            <div className={styles.posterImageBlock}>
              <Image
                src={urlFor(posterImage).url()}
                alt={videoTitle}
                width={600}
                height={400}
                className={styles.posterImage}
              />
              <div className={styles.overlay}></div>
              <button className={styles.playButton} onClick={handleOpenPopup}>
                <FaPlay className={styles.playIcon} color="#163e5c" fontSize="2em" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <VideoPopup videoLink={videoLink} onClose={handleClosePopup} />
      )}
    </section>
  )
}

export default VideoBlock