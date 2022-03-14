import React, { useEffect, useState } from 'react';
import MultiRangeSlider from './MultiRangeSlider';
import useInput from './../hooks/useInput';
import styles from '../styles/SearchBar.module.scss';

function SearchBar({ handleSearch }) {
  const [query, bindQuery] = useInput('');
  const [type, bindType] = useInput('ANY');
  const [minYear, setMinYear] = useState(1975);
  const [maxYear, setMaxYear] = useState(2022);

  useEffect(() => {
    handleSearch({ query, type, minYear, maxYear });
  }, [query, type, minYear, maxYear]);

  return (
    <section className={styles.container}>
      <div className={styles.searchBox}>
        <label className={styles.searchIcon}>
          <img src="https://img.icons8.com/ios-glyphs/45/000000/search--v1.png" alt="search icon" />
        </label>
        <input placeholder="Search" name="query" type="search" {...bindQuery} />
      </div>

      <div className={styles.filters}>
        <label className={styles.yearSelect}>
          <span>YEAR</span>
          <MultiRangeSlider
            min={1975}
            max={2022}
            onChange={({ min, max }) => {
              setMinYear(min);
              setMaxYear(max);
            }}
          />
        </label>

        <div className={styles.typeSelect} {...bindType}>
          <span>TYPE</span>
          <div className={styles.radioButtons}>
            <label>
              <input type="radio" value="ANY" name="type" defaultChecked />
              <span>Any</span>
            </label>
            <label>
              <input type="radio" value="MOVIES" name="type" />
              <span>Movies</span>
            </label>
            <label>
              <input type="radio" value="SERIES" name="type" />
              <span>Series</span>
            </label>
            <label>
              <input type="radio" value="EPISODES" name="type" />
              <span>Episodes</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
