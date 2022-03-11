import React, { useEffect, useState } from 'react';
import ActiveLink from './ActiveLink';
import styles from '../styles/SearchResult.module.scss';

function SearchResult({ query }) {
  const [searchResults, setSearchResults] = useState([]);
  const [totalResults, setTotalResults] = useState('');

  useEffect(() => {}, []);

  return (
    <section className={styles.container}>
      <h2>SearchResult</h2>

      <p>{12312} results</p>
      <ul>
        <li>
          <ActiveLink href={'/district1'}>
            <img
              src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
              alt="Star Wars: Episode IV - A New Hope"
              width={100}
              height={100}
            />
            <div>
              <h3>Star Wars: Episode IV - A New Hope</h3>
              <span>1977</span>
            </div>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={'/district2'}>
            <h2>district2</h2>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={'/district3'}>
            <h2>district3</h2>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={'/district4'}>
            <h2>district4</h2>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={'/district5'}>
            <h2>district5</h2>
          </ActiveLink>
        </li>
      </ul>
    </section>
  );
}

export default SearchResult;
