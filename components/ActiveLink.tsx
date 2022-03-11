import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/SearchItem.module.scss';

function ActiveLink({ children, href }) {
  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <a className={`${router.asPath === href ? styles.selected : ''}`}>{children}</a>
    </Link>
  );
}

export default ActiveLink;
