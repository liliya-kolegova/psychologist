'use client';
import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './Scrolling.module.scss';

const phrases = [
  "First text about Sasha",
  "Second text about Sasha",
  "Third text about Sasha",
  "Fourth text about Sasha",
  "Fifth text about Sasha"
]

function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: "0px bottom",
        end: "bottom+=400px bottom",
      },
      opacity: 0,
      left: "-200px",
      ease: "power3.Out"
    })
  }, [])

  return <p ref={text}>{children}</p>
}

export const Description = () => {

  return (
    <div className={styles.description} >
      {
        phrases.map((phrase, index) => {
          return <AnimatedText key={index}>{phrase}</AnimatedText>
        })
      }
    </div>
  )
}