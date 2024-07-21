"use client";
import React from "react";
import styles from "./ScrollLink.module.scss";

type ScrollLinkProps = {
  linkButton: string;
  children: React.ReactNode;
};

const ScrollLink: React.FC<ScrollLinkProps> = ({ linkButton, children }) => {
  // console.log(linkButton);
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const offset = sectionElement.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(linkButton);
      }}
      className={styles.scrollLink}
    >
      {children}
    </a>
  );
};

export default ScrollLink;
