import React, { FC, useState, useEffect } from 'react'
import { Image as MainImage, TherapyStage } from '@/types/mainPage'
import styles from './TherapyStages.module.scss'
import Image from 'next/image';
import { urlFor } from '@/libs/sanity';

type Props = {
  therapyStagesTitle: string;
  therapyStagesImage: MainImage;
  therapyStages: TherapyStage[];
}

const TherapyStages: FC<Props> = ({ therapyStagesTitle, therapyStagesImage, therapyStages}) => {
  return (
    <section id='stages' className={styles.therapyStages}>
      <div className="container">
        <div className="grid-main">
          <div className="grid-main__left">
            <h2 className="h2-main">{therapyStagesTitle}</h2>
            <div className={styles.therapyStagesList}>
              {therapyStages.map((stage) => (
                <div
                  key={stage._key}
                  className={styles.therapyStagesItem}
                  style={{
                    backgroundColor: stage.stageColor,
                    color: stage.textColor
                  }}
                >
                  <div className={styles.therapyStagesItemIcon}>
                    <Image
                      src={urlFor(stage.stageIcon).url()}
                      alt={stage.stageTitle}
                      width={55}
                      height={35}
                    />
                  </div>
                  <h3 className={styles.therapyStagesItemTitle}>{stage.stageTitle}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="grid-main__right">
            <div className={styles.imageBlock}>
              <Image
                src={urlFor(therapyStagesImage).url()}
                alt={therapyStagesTitle}
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TherapyStages