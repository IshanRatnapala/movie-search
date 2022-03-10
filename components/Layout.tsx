import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import SearchBar from './SearchBar';

const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a className={`${router.asPath === href ? 'red' : ''}`}>{children}</a>
    </Link>
  );
};

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
      
      <section>
        <p>{12312} results</p>
        <ul>
          <li>
            <ActiveLink href={'/district1'}>
              <h2>district1</h2>
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
      <section>{children}</section>
    </div>
  );
};

export default Layout;
