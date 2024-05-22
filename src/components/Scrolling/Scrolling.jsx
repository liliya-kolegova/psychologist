'use client';
import React, { useEffect } from 'react'
import styles from './Scrolling.module.scss';
import { Intro } from './Intro';
import { Description } from './Description';
import { Projects } from './Projects';

export const Scrolling = () => {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <div className={styles.scrolling}>
      <Intro />
      <Description />
      <Projects />
    </div>
  )
}
