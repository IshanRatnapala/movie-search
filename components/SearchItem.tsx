import React from 'react';
import ActiveLink from './ActiveLink';
import styles from '../styles/SearchItem.module.scss';
import Poster from './Poster';

function SearchItem({ item }) {
  return (
    <li className={styles.container}>
      <ActiveLink href={`/${item['imdbID']}`}>
        <Poster
          src={item['Poster']}
          alt={item['Title']}
          width={100}
          height={100}
          style={{ maxWidth: '100px' }}
        ></Poster>
        <div>
          <h2 className={styles.title}>{item['Title']}</h2>
          <span className={styles.year}>{item['Year']}</span>
        </div>
      </ActiveLink>
    </li>
  );
}

export default SearchItem;
