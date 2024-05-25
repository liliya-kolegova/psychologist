import React, { FC } from 'react'
import { TextImageBlock } from '@/types/blog';
import { Image as BlogMainImage } from '@/types/mainPage'
import { urlFor } from '@/libs/sanity'
import { PortableText } from '@portabletext/react'
import { RichText } from '../RichText/RichText';
import Image from 'next/image'
import styles from './TextImageBlockComponent.module.scss'

type Props = {
  block: TextImageBlock;
}

const TextImageBlockComponent: FC<Props> = ({ block }) => {

  const wrapperClass = block.direction === 'textRight' ? styles.textRight : styles.textLeft;

  const getBlockStyle = () => ({
    background: block.backgroundColor,
    color: block.textColor || '#163E5C',
    padding: block.backgroundColor ? '25px' : '0',
    borderRadius: block.backgroundColor ? '20px' : '0',
  });

  return (
    <div className={styles.texImageBlock}>
      <div className="container">
        <div
          className={`${styles.wrapper} ${wrapperClass}`}
        >
          <div
            className={styles.textBlock}
            style={getBlockStyle()}
          >
            <PortableText
              value={block.text}
              components={RichText}
            />              
          </div>
          <div className={styles.imageBlock}>
            <Image
              src={urlFor(block.image).url()}
              alt="image"
              fill={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImageBlockComponent