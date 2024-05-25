'use client';
import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './Scrolling.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    title: "First text",
    src: "../../../public/img/project-1.webp"
  },
  {
    title: "Second text",
    src: "../../../public/img/project-2.webp"
  },
  {
    title: "Third text",
    src: "../../../public/img/project-3.webp"
  },
  {
    title: "Fourth text",
    src: "../../../public/img/project-4.webp"
  },
];

export const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=100px",
      end: document.body.offsetHeight - window.innerHeight - 50,
    })
  }, [])

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/assets/images/${projects[selectedProject].src}`}
            fill={true}
            alt="project image"
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum et a temporibus pariatur, accusantium voluptatibus debitis alias similique nostrum? Libero.</p>
        </div>
        <div className={styles.column}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eum veritatis quam itaque repellat quasi quis temporibus molestiae, aliquid iusto iure molestias aspernatur excepturi. Mollitia?</p>
        </div>
      </div>

      <div className={styles.projectList}>
        {
          projects.map((project, index) => {
            return <div key={index} onMouseOver={() => { setSelectedProject(index) }} className={styles.projectEl}>
              <h2>{project.title}</h2>
            </div>
          })
        }
      </div>
    </div>
  )
}
