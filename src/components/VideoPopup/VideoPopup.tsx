'use client';
import React, { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { TfiClose } from 'react-icons/tfi';

import styles from './VideoPopup.module.scss';

type Props = {
  videoLink: string;
  onClose: () => void;
}

const VideoPopup: FC<Props> = ({ videoLink, onClose }: any) => {
  return (
    <AnimatePresence>
      {videoLink && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className={styles.popupOverlay}
        >
            <div
              className={styles.popupContent}>
              <iframe
                width="100%"
                height="100%"
                src={videoLink}
                title="YouTube video player"
                allowFullScreen
                className={styles.videoFrame}
              ></iframe>
              <button className={styles.closeButton} onClick={onClose}>
                <TfiClose color="#fff" fontSize="2.5em" />
              </button>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default VideoPopup;