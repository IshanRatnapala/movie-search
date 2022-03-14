import React, { useState } from 'react';
import styles from '../styles/MovieDetail.module.scss';

function MovieDetail({ movie }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <div className={styles.titleImage}>
          <img src={movie['Poster']} alt={movie['Title']} />
        </div>
        <div className={styles.titleDetails}>
          <button className={styles.watchListButton} onClick={(e) => setFavorite(!favorite)}>
            <span className={favorite ? styles.activeIcon : styles.icon}></span>
            <span>Watchlist</span>
          </button>
          <div>
            <h2>{movie['Title']}</h2>
            <ul className={styles.summaryBar}>
              <li className={styles.ratingButton}>{movie['Rated']}</li>
              <li>{movie['Year']}</li>
              <li>{movie['Genre']}</li>
              <li>{movie['Runtime']}</li>
            </ul>
            <div>
              <p>{movie['Actors']}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.detailSection}>
        <p>{movie['Plot']}</p>
      </div>
      <ul className={styles.ratingsSection}>
        {movie['Ratings']?.map((rating) => (
          <li key={rating['Source']}>
            <span>{rating['Value']}</span>
            <span>{rating['Source']}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetail;
