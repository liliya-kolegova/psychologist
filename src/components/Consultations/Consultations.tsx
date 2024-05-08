import React, { FC } from 'react'
import { Consultation, Link as OfferLink } from '@/types/mainPage';
import styles from './Consultations.module.scss';
import Link from 'next/link';
import WorkCard from '../WorkCard/WorkCard';

type Props = {
  consultationsTitle: string;
  consultations: Consultation[];
  offerLinks: OfferLink[];
  offerLinksShort: OfferLink[];
}

const Consultations: FC<Props> = ({
  consultationsTitle,
  consultations,
  offerLinks,
  offerLinksShort
}) => {
  return (
    <section className={styles.consultations}>
      <div className="container">
        <h2 className="h2-main mb70">{consultationsTitle}</h2>
        <div className="cards-list">
          {consultations.map((consultation) => (
            <WorkCard
              key={consultation._key}
              type={consultation.consultationType}
              time={consultation.consultationTime}
              title={consultation.constultationTitle}
              price={consultation.consultationPrice}
            />
          ))}
        </div>
        <div className="offer-links">
          {offerLinks.map((link) => (
            <Link
              href={link.link}
              key={link._key}
              className="offer-link"
            >
              {link.label}
            </Link>
          ))}
          {offerLinksShort.map((link) => (
            <Link
              href={link.link}
              key={link._key}
              className="offer-link__mobile"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Consultations