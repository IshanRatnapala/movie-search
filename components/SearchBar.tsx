import React, { useEffect, useState } from 'react';
import MultiRangeSlider from './MultiRangeSlider';
import useInput from './../hooks/useInput';
import styles from '../styles/SearchBar.module.scss';

function SearchBar({ handleSearch }) {
  const { value: query, bind: bindQuery } = useInput('');
  const { value: type, bind: bindType } = useInput('');
  const { value: minYear, setValue: setMinYear } = useInput(1975);
  const { value: maxYear, setValue: setMaxYear } = useInput(2022);

  useEffect(() => {
    handleSearch({ query, type, minYear, maxYear });
  }, [query, type, minYear, maxYear]);

  return (
    <section className={styles.container}>
      <div className={styles.searchBox}>
        <label className={styles.searchIcon}>
          <img src="/search.svg" alt="search icon" />
        </label>
        <input placeholder="Search" name="query" type="search" {...bindQuery} />
      </div>

      <div className={styles.filters}>
        <div className={styles.yearSelect}>
          <label>
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
        </div>

        <div className={styles.typeSelect} {...bindType}>
          <span>TYPE</span>
          <div className={styles.radioButtons}>
            <label>
              <input type="radio" value="" name="type" defaultChecked />
              <span>Any</span>
            </label>
            <label>
              <input type="radio" value="movie" name="type" />
              <span>Movies</span>
            </label>
            <label>
              <input type="radio" value="series" name="type" />
              <span>Series</span>
            </label>
            <label>
              <input type="radio" value="episode" name="type" />
              <span>Episodes</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
