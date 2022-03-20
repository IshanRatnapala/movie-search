import React, { useEffect, useRef, useState } from 'react';
import { searchMovies } from '../services';
import SearchItem from './SearchItem';
import styles from '../styles/SearchResult.module.scss';

function SearchResult({ searchQuery }) {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [totalResults, setTotalResults] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ref = useRef(null);

  const onScroll = async (e) => {
    if (
      e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight &&
      currentPage * 10 < parseInt(totalResults, 10)
    ) {
      setLoading(true);
      const { items } = await searchMovies(searchQuery, currentPage + 1);
      setLoading(false);
      setSearchResults((existingItems) => [...existingItems, ...items]);
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    // Fix for multiple pagination loads while scrolled to bottom
    ref.current.scrollTop = 0;
    if (searchQuery.query) {
      (async () => {
        setLoading(true);
        const { items, total } = await searchMovies(searchQuery);
        setLoading(false);
        setSearchResults(items);
        setTotalResults(total);
      })();
    } else {
      setSearchResults([]);
      setTotalResults('0');
    }
  }, [searchQuery]);

  return (
    <section
      className={styles.container}
      onScroll={onScroll}
      ref={ref}
      style={{ opacity: loading ? '0.5' : '1' }}
    >
      {!!searchResults.length ? (
        <>
          <span className={styles.totalCount}>{totalResults} RESULTS</span>
          <ul className={styles.resultList}>
            {searchResults.map((result) => (
              <SearchItem key={result['imdbID']} item={result}></SearchItem>
            ))}
          </ul>
        </>
      ) : (
        <span className={styles.errorItem}>
          {!loading && (!!searchQuery.query ? 'No results found' : 'Search for a movie')}
        </span>
      )}
    </section>
  );
}

export default SearchResult;
