import React, { FC } from 'react'
import styles from './Edu.module.scss'
import { DegreeBullet, Diploma, EducationBullet } from '@/types/mainPage';
import { PortableText } from '@portabletext/react'
import { RichText } from '../RichText/RichText';

type Props = {
  educationTitle: string;
  educationBullets: EducationBullet[];
  degreeTitle: string;
  degreeBullets: DegreeBullet[];
  degreeText: any;
  diplomas: Diploma[];
}

const Edu: FC<Props> = ({
  educationTitle,
  educationBullets,
  degreeTitle,
  degreeBullets,
  degreeText,
  diplomas
}) => {

  return (
    <section className={styles.edu}>
      <div className="container">
        <div className={styles.eduContent}>
          <h2 className={styles.title}>{educationTitle}</h2>
          <div className={styles.eduBullets}>
            {educationBullets.map((bullet) => (
              <div key={bullet._key} className={`${styles.eduBullet} ${styles[bullet.size]} ${styles[bullet.backgroundColor]}`}>
                <h3 className={styles.eduBulletTitle}>{bullet.bulletTitle}</h3>
                <p className={styles.eduBulletText}>{bullet.bulletText}</p>
              </div>
            ))}
          </div>
          <div className={styles.eduGrid}>
            <div className={styles.contentLeftBlock}>
              <h2 className={styles.degreeTitle}>{degreeTitle}</h2>
              <div className={styles.degreeBullets}>
                {degreeBullets.map((bullet, index) => (
                  <div key={index} className={styles.degreeBullet}>
                    <p className={styles.degreeBulletTitle}>{bullet.bulletTitle}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.contentRightBlock}>
              <PortableText
                value={degreeText}
                components={RichText}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Edu