import { Link as RequestLink, PhoneNumber } from '@/types/mainPage';
import React, { FC } from 'react'
import { Caveat } from "next/font/google";
import styles from './Contacts.module.scss'
import Link from 'next/link';
import ScrollAnimate from '../ScrollAnimate/ScrollAnimate';

type Props = {
  contactsTitle: string;
  workingHours: string;
  phones: PhoneNumber[];
  contactsDescription: string;
  contactLinks: RequestLink[];
}

const caveat = Caveat({ weight: ['400', '700'], subsets: ["latin"] });

const Contacts: FC<Props> = ({
  contactsTitle,
  workingHours,
  phones,
  contactsDescription,
  contactLinks,
}) => {
  
  return (
    <section id='contacts' className={styles.contacts}>
      <div className={styles.contactsContainer}>
        <div className={styles.contactsWrapper}>
          <div className={styles.contactsBlock}>
            <ScrollAnimate>
              <h2 className={`${styles.contactsTitle} ${caveat.className}`}>{contactsTitle}</h2>
            </ScrollAnimate>
          </div>
          <div className={styles.contactsBlock}>
            <div className={styles.calls}>
              <p className={styles.callsTitle}>{workingHours}</p>
              <div className={styles.phones}>
                {phones.map((phone) => (
                  <Link href={`tel:${phone.phoneNumber.replace(/[^\d+]/g, '')}`} key={phone._key} className={styles.phone}>
                    {phone.phoneNumber}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.contactsBlock}>
            <div className={styles.messengers}>
              <p className={styles.messengersTitle}>{contactsDescription}</p>
              <div className={styles.messengersLinks}>
                {contactLinks.map((link) => (
                  <Link
                    href={link.link}
                    key={link._key}
                    className={`${styles.link} ${caveat.className}`}
                  >
                    [{link.label}]
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts