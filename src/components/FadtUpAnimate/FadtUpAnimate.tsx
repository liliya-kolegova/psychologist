'use client';
import React, { useEffect, ReactElement, cloneElement } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FadeUpAnimate = ({ children }: { children: ReactElement }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {React.cloneElement(children, { 'data-aos': 'fade-up' })}
    </>
  );
};

export default FadeUpAnimate;
