import Head from 'next/head';
import React, { useState } from 'react';
import Navbar from './Navbar';
import MovieDetail from './MovieDetail';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({});

  const handleSearch = ({ query, type, minYear, maxYear }) => {
    setQuery({ query, type, minYear, maxYear });
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
        <SearchResult query={query}></SearchResult>

        <MovieDetail>
          <p> {JSON.stringify(query)}</p>

          {children}
        </MovieDetail>
      </main>
    </div>
  );
};

export default Layout;
