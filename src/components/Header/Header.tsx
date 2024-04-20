// Navbar.tsx
'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TfiClose } from "react-icons/tfi";
import { getHeaderByLang } from "@/libs/sanityQueries";
import { urlFor } from "@/libs/sanity";
import { motion } from 'framer-motion';
import { Header as HeaderType } from "@/types/header";
import styles from "./Header.module.scss";

type Props = {
  params: { lang: string };
};

const Header = ({ params }: Props) => {
  const [navbarData, setNavbarData] = useState<HeaderType | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');
  const [activeSection, setActiveSection] = useState('');

  const fetchData = async () => {
    try {
      const data: HeaderType = await getHeaderByLang(params.lang);
      setNavbarData(data);
    } catch (error) {
      console.error('Error fetching Navbar data:', error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 3000);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenSubMenu(null);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(`.${styles.menuItem}`)) {
        setOpenSubMenu(null);
      }
    };

    const handleScroll = () => {
      let closestSectionId = '';
      let smallestDistance = Infinity;
      navbarData?.menuItems.forEach((menuItem) => {
        const sectionElement = document.getElementById(menuItem.link);
        if (sectionElement) {
          const distance = Math.abs(sectionElement.getBoundingClientRect().top);
          if (distance < smallestDistance) {
            smallestDistance = distance;
            closestSectionId = menuItem.link;
          }
        }
      });

      setActiveSection(closestSectionId);
    };

    // Подписки
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    // Вызов handleResize для инициализации состояния
    handleResize();

    // Запрос данных
    fetchData();

    // Отписки
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  // Функция закрытия меню при клике на ссылку
  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
      setOpenSubMenu(null);
    }
  };

  if (!navbarData) {
    return null;
  }

  const handleScroll = () => {
    let closestSectionId = '';
    let smallestDistance = Infinity;
    navbarData.menuItems.forEach((menuItem) => {
      const sectionElement = document.getElementById(menuItem.link);
      if (sectionElement) {
        const distance = Math.abs(sectionElement.getBoundingClientRect().top);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestSectionId = menuItem.link;
        }
      }
    });

    setActiveSection(closestSectionId);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`${styles.headerWrapper} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <div className={styles.logo}>
            <Link className={styles.logoLink} onClick={handleLinkClick} href={`/${params.lang}`}>
              <Image
                alt="Logo"
                src={urlFor(navbarData.logo).url()}
                width={200}
                height={200}
                className={styles.logoImage}
              />
            </Link>
          </div>

          <div className={styles.phones}>
            {navbarData.phones.map((phone) => (
              <div className={styles.phone} key={phone._key}>
                <div className={styles.phoneLink}>
                  <Link href={`tel:${phone.phone.replace(/[^\d+]/g, '')}`}>{phone.phone}</Link>
                </div>
                <div className={styles.phoneLabel}>{phone.phoneLabel}</div>
              </div>
            ))}
          </div>
          
          <div className={styles.headerButtons}>
            <div className={styles.language}>
              <Link className={styles.switchLang} href={navbarData.languageLink}>
                {navbarData.languageLabel}
              </Link>
              <div className={styles.divider}></div>
              <p className={styles.currentLang}>{params.lang}</p>
            </div>
            <div className={styles.burgerIcon} onClick={toggleMenu}>
              <div className={`${styles.bar} ${isMenuOpen ? styles.rotateBar1 : ''}`} />
              <div className={`${styles.bar} ${isMenuOpen ? styles.hideBar : ''}`} />
              <div className={`${styles.bar} ${isMenuOpen ? styles.rotateBar2 : ''}`} />
            </div>
          </div>

          {isMenuOpen ? (
            <motion.nav
              className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className={styles.menuLists}>
                <div className={styles.languageMobile}>
                  <Link className={styles.switchLang} href={navbarData.languageLink}>
                    {navbarData.languageLabel}
                  </Link>
                  <div className={styles.divider}></div>
                  <p className={styles.currentLang}>{params.lang}</p>
                </div>
                <ul className={styles.menuItems}>
                  {navbarData.menuItems.map((menuItem, index) => (
                    <li key={index} className={styles.menuItem} onClick={() => toggleSubMenu(menuItem.label)}>
                      <a 
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(menuItem.link);
                          handleLinkClick();
                        }} 
                        className={`${styles.menuItemLink} ${activeSection === menuItem.link ? styles.active : ''}`}
                      >
                        {menuItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <TfiClose
                className={styles.closeIcon}
                color="#fff"
                onClick={toggleMenu}
              />
            </motion.nav>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;