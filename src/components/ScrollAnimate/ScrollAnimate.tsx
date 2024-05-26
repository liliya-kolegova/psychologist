'use client';
import React, { useEffect } from 'react'

const ScrollAnimate = ({ children }: any) => {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <div data-scroll data-scroll-speed="0.1">{children}</div>
  )
}

export default ScrollAnimate