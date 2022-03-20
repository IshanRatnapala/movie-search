import React from 'react';
import styles from '../styles/Poster.module.scss';

function Poster(params) {
  const placeHolderImage = '/placeholder.png';
  const imageSrc = !params.src || params.src === 'N/A' ? placeHolderImage : params.src;
  return <img className={styles.container} {...params} src={imageSrc} />;
}

export default Poster;
