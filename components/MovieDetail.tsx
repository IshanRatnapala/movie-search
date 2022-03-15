import React, { useEffect, useState } from 'react';
import { addToWatchList, getWatchList, removeFromWatchList } from '../services';
import styles from '../styles/MovieDetail.module.scss';
import Poster from './Poster';

function MovieDetail({ movie }) {
  const [favorite, setFavorite] = useState(false);

  const handleAddToWatchList = (movie) => {
    if (favorite) {
      removeFromWatchList(movie['imdbID']);
      setFavorite(false);
    } else {
      addToWatchList(movie['imdbID'], { image: movie['Poster'], title: movie['Title'] });
      setFavorite(true);
    }
  };

  useEffect(() => {
    const watchList = getWatchList();
    setFavorite(!!watchList[movie['imdbID']]);
  }, [movie]);

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <div className={styles.titleImage}>
          <Poster src={movie['Poster']} alt={movie['Title']}></Poster>
        </div>
        <div className={styles.titleDetailsContainer}>
          <button
            className={styles.watchListButton}
            onClick={handleAddToWatchList.bind(null, movie)}
          >
            <span className={favorite ? styles.activeIcon : styles.icon}></span>
            <span>Watchlist</span>
          </button>
          <div className={styles.titleDetails}>
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
