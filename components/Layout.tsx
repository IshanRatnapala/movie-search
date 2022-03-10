import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import MovieDetail from './MovieDetail';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = ({ query, type, minYear, maxYear }) => {
    setSearchResults([{ query, type, minYear, maxYear }]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Search</title>
        <meta name="description" content="Get information on your favorite movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {JSON.stringify(searchResults)}

      <nav>
        <h1>
          <Link href={'/'}>Movie Search</Link>
        </h1>
        <span>
          <Link href={'/watch-list'}>Watchlist</Link>
        </span>
      </nav>

      <SearchBar handleSearch={handleSearch}></SearchBar>

      <SearchResult></SearchResult>
      
      <MovieDetail>{children}</MovieDetail>
    </div>
  );
};

export default Layout;
