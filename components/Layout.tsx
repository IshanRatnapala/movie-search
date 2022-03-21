import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import styles from '../styles/Layout.module.scss';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({});
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();

  const handleSearch = ({ query, type, minYear, maxYear }) => {
    setQuery({ query, type, minYear, maxYear });
  };

  useEffect(() => {
    setOpenDrawer(router.asPath !== '/');

    const start = (url) => {
      setOpenDrawer(url !== '/');
      setLoading(true);
    };
    const end = (url) => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>MOVIE SEARCH</title>
        <meta name="description" content="Get information on your favorite movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <SearchBar handleSearch={handleSearch}></SearchBar>

      <main className={`${styles.main} ${openDrawer ? styles.active : ''}`}>
        <SearchResult searchQuery={query}></SearchResult>
        <section className={styles.rightSection} style={{ opacity: loading ? '0.5' : '1' }}>
          <div className={styles.backButton}>
            <Link href={'/'}>
              {/* Fix for tab navigation showing overflow content on mobile */}
              <a tabIndex={openDrawer ? 0 : -1}>Back</a>
            </Link>
          </div>
          {children}
        </section>
      </main>
    </div>
  );
};

export default Layout;
