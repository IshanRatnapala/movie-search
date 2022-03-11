import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

function Navbar() {
  return (
    <nav className={styles.container}>
      <h1>
        <Link href={'/'}>Movie Search</Link>
      </h1>
      <span>
        <Link href={'/watch-list'}>Watchlist</Link>
      </span>
    </nav>
  );
}

export default Navbar;
