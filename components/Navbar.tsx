import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

function Navbar() {
  return (
    <nav className={styles.container}>
      <h1 className={styles.heading}>
        <Link href={'/'}>Movie Search</Link>
      </h1>
      <span>
        <Link href={'/watchlist'}>Watchlist</Link>
      </span>
    </nav>
  );
}

export default Navbar;
