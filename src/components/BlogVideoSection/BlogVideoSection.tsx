'use client';
import React, { FC, useState, useRef } from 'react';
import styles from './BlogVideoSection.module.scss';
import { Image as ImageType } from '@/types/mainPage';
import { urlFor } from '@/libs/sanity';
import Image from 'next/image';
import { FaPlay, FaPause } from 'react-icons/fa';
import YouTube, { YouTubePlayer } from 'react-youtube';

type Props = {
  videoLink: string;
  videoTitle: string;
  posterImage: ImageType;
};

const BlogVideoSection: FC<Props> = ({ videoLink, videoTitle, posterImage }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const playerRef = useRef<YouTubePlayer | null>(null);

  const extractVideoID = (url: string) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?&]+)|(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)|(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?&]+)/;
    const match = url.match(regex);
    return match ? match[1] || match[2] || match[3] : '';
  };

  const videoId = extractVideoID(videoLink);

  const onPlayerReady = (event: { target: YouTubePlayer }) => {
    console.log('Player is ready');
    playerRef.current = event.target;
    setIsPlayerReady(true);
  };

  const onPlayerStateChange = (event: { data: number }) => {
    console.log('Player state changed:', event.data);
    if (event.data === 0) { // Video ended
      setIsVideoPlaying(false);
    } else if (event.data === 1) { // Video playing
      setIsVideoPlaying(true);
    } else if (event.data === 2) { // Video paused
      setIsVideoPlaying(false);
    }
  };

  const handlePlayPause = () => {
    if (isPlayerReady && playerRef.current) {
      if (isVideoPlaying) {
        console.log('Pausing video');
        playerRef.current.pauseVideo();
      } else {
        console.log('Playing video');
        playerRef.current.playVideo();
      }
      setIsVideoPlaying(!isVideoPlaying);
    } else {
      console.log('Player is not ready');
    }
  };

  return (
    <section className={styles.blogVideoSection}>
      <div className="container">
        <div className={styles.videoBlockContent}>
          <h2 className="h2-main mb20">{videoTitle}</h2>
          <div className={styles.posterImageBlock}>
            {!isVideoPlaying && (
              <>
                <Image
                  src={urlFor(posterImage).url()}
                  alt={videoTitle}
                  width={1920}
                  height={1080}
                  className={styles.posterImage}
                />
                <div className={styles.overlay}></div>
              </>
            )}
            <button
              className={styles.playButton}
              onClick={handlePlayPause}
              aria-label={isVideoPlaying ? `Pause video: ${videoTitle}` : `Play video: ${videoTitle}`}
            >
              {isVideoPlaying ? (
                <FaPause className={styles.playIcon} color="#163e5c" fontSize="2em" />
              ) : (
                <FaPlay className={styles.playIcon} color="#163e5c" fontSize="2em" />
              )}
            </button>
            <YouTube
              videoId={videoId}
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 0, // Don't autoplay when initializing
                  controls: 0,
                },
              }}
              onReady={onPlayerReady}
              onStateChange={onPlayerStateChange}
              className={styles.videoFrame}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogVideoSection;
