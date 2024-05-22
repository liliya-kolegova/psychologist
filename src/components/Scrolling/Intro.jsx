"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Scrolling.module.scss';
import Image from 'next/image';
import Background from '../../assets/images/background-dj.jpg';
import IntroImage from '../../assets/images/introImage.jpg';

export const Intro = () => {

  const backgroundImage = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: backgroundImage.current,
        start: 'top top',
        end: '+=500px',
        // end: 'bottom top',
        scrub: true,
        markers: true
      }
    });

    timeline
      .from(backgroundImage.current, { clipPath: 'inset(15%)' })
      .to(introImage.current, { height: '250px', autoAlpha: 1, overflow: 'hidden' }, 0);
  }, []);

  return (
    <div className={styles.intro}>
      <div
        ref={backgroundImage}
        className={styles.backgroundImage}
      >
        <Image
          src={Background}
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>

      <div
        // ref={introImage}
        className={styles.intro}
      >
        <div data-scroll data-scroll-speed="0.3" className={styles.introImage}>
          <Image
            ref={introImage}
            src={IntroImage}
            alt="intro image"
            fill={true}
            priority={true}
          />
        </div>
        <h2 data-scroll data-scroll-speed="0.2">Becoming a DJ</h2>
      </div>
    </div>
  );
};
