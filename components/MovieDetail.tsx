import React from 'react';
import styles from '../styles/MovieDetail.module.scss';

function MovieDetail({ children }) {
  return (
    <section className={styles.container}>
      <h2>MovieDetail</h2>
      {children}
    </section>
  );
}

export default MovieDetail;
