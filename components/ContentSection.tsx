import React from 'react';
import styles from '../styles/ContentSection.module.scss';

function ContentSection({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default ContentSection;
