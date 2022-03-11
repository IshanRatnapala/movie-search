import Head from 'next/head';
import React, { useState } from 'react';
import Navbar from './Navbar';
import MovieDetail from './MovieDetail';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import styles from '../styles/Layout.module.scss';

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

      <Navbar></Navbar>

      <SearchBar handleSearch={handleSearch}></SearchBar>

      <main className={styles.main}>
        <SearchResult></SearchResult>

        <MovieDetail>
          <p> {JSON.stringify(searchResults)}</p>

          {children}
        </MovieDetail>
      </main>
    </div>
  );
};

export default Layout;
