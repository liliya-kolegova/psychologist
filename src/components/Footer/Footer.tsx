'use client';
import { getFooterByLang } from '@/libs/sanityQueries';
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/libs/sanity";
import { Footer as FooterType } from "@/types/footer";
import styles from './Footer.module.scss'

type Props = {
  params: { lang: string };
};

const Footer = ({ params }: Props) => {

  const [footerData, setFooterData] = useState<FooterType | null>(null);

  const fetchData = async () => {
    try {
      const data: FooterType = await getFooterByLang(params.lang);
      setFooterData(data);
    } catch (error) {
      console.error('Error fetching Footer data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!footerData) {
    return null;
  }

  const scrollToSection = (sectionId: string) => {
    // Найдите элемент с указанным id
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      // Вычислите позицию элемента относительно верхней части страницы
      const offset = sectionElement.offsetTop;
      // Выполните плавный скролл
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className={styles.fullImageBlock}>
        <Image
          src={urlFor(footerData.mainFullImage).url() || ''}
          alt={footerData.footerText || ''}
          width={1920}
          height={1080}
          className={styles.mainFullImage}
        />
      </div>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.logoMobile}>
            <Image
              src={urlFor(footerData.footerLogo).url() || ''}
              alt={footerData.footerText || ''}
              width={645}
              height={85}
            />
          </div>
          <div className={styles.footerWrapper}>
            <div className={styles.footerContent}>
              <div className={styles.footerContentWrapper}>
                <div className={styles.logoBlock}>
                  <Image
                    src={urlFor(footerData.footerLogo).url() || ''}
                    alt={footerData.footerText || ''}
                    width={645}
                    height={85}
                  />
                </div>
                <div className={styles.contentBlock}>
                  <div className={styles.paymentLogos}>
                    {footerData.paymentLogos.map((logo, index) => (
                      <div key={logo._key || index} className={styles.paymentLogo}>
                        <Image
                          src={urlFor(logo.paymentLogo).url() || ''}
                          alt={footerData.footerText || ''}
                          // layout="responsive"
                          width={500}
                          height={200}
                        />
                      </div>
                    ))}
                  </div>
                  <div className={styles.dataText}>
                    <p className={`${styles.text} mb20`}>{footerData.footerText}</p>
                    <p className={styles.text}>{footerData.rightsText}</p>
                    <p className={styles.text}>{footerData.copyrigthText}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerLinks}>
              {footerData.footerLinks.map((link) => (
                <Link
                  key={link._key}
                  href={link.link}
                  className={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.link);
                  }} 
                >
                {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer